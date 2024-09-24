import { Request, Response } from "express";
import Url from "../models/url";
import * as redis from "redis";
import { validateUrl } from "../utils/utils";
import { nanoid } from "nanoid";
import { log } from "console";

const redisClient = redis.createClient();

export const shortenUrl1 = async (req: Request, res: Response) => {
  const { longUrl } = req.body;

  try {
    let url = await Url.findOne({ longUrl });
    if (url) {
      return res.json({ shortUrl: url.shortUrl });
    }

    const shortId = nanoid(7);
    const shortUrl = `${process.env.BASE_URL}/${shortId}`;

    url = new Url({ longUrl, shortUrl, shortId });
    await url.save();

    redisClient.set(shortId, longUrl);

    res.json({ shortUrl });
  } catch (error) {
    res.status(500).json("Server error");
  }
};

export const shortenUrl2 = async (req: Request, res: Response) => {
  const { origUrl } = req.body;
  const base = process.env.BASE_URL;
  console.log(base);

  const urlId = nanoid(7);
  if (validateUrl(origUrl)) {
    try {
      let url = await Url.findOne({ origUrl });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = `${base}/${urlId}`;

        url = new Url({
          origUrl,
          shortUrl,
          urlId,
          date: new Date(),
        });

        await url.save();
        res.json(url);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(400).json("you entered a Invalid Url");
  }
};

export const redirectUrl1 = async (req: Request, res: Response) => {
  const { shortId } = req.params;

  const data = await redisClient.get(shortId);

  if (data) {
    return res.redirect(data);
  } else {
    try {
      const url = await Url.findOne({ shortId });
      if (url) {
        await redisClient.set(shortId, url.origUrl); // Cache the result
        return res.redirect(url.origUrl);
      } else {
        return res.status(404).json("URL not found");
      }
    } catch (error) {
      return res.status(500).json("Server error");
    }
  }
};
export const redirectUrl2 = async (req: Request, res: Response) => {
  try {
    const url = await Url.findOne({ urlId: req.params.urlId });
    if (url) {
      await Url.updateOne(
        {
          urlId: req.params.urlId,
        },
        { $inc: { clicks: 1 } }
      );
      return res.redirect(url.origUrl);
    } else res.status(404).json("Not found");
  } catch (err) {
    console.log(err);
    res.status(500).json("Server Error");
  }
};
