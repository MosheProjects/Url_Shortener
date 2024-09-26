import { Request, Response } from "express";
import Url from "../models/url";
import { validateUrl } from "../utils/utils";
import { nanoid } from "nanoid";
import * as Redis from "redis";

const redisClient = Redis.createClient({
  url: "redis://redis:6379",
});

export const connectRedis = async () => {
  await redisClient.connect().catch(console.error);
};
export const redirectUrl = async (req: Request, res: Response) => {
  const { shortId } = req.params;
  const expirationTimeInSeconds = 10000;
  updateCounter(shortId);
  const data = await redisClient.get(shortId);
  if (data != null) {
    return res.json({ url: data });
  } else {
    try {
      const url = await Url.findOne({ urlId: shortId });
      if (url) {
        redisClient.setEx(shortId, expirationTimeInSeconds, url.origUrl);
        return res.json({ url: url.origUrl });
      } else {
        return res.status(404).json("URL not found");
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  }
};

const updateCounter = async (id: string) => {
  await Url.updateOne(
    {
      urlId: id,
    },
    { $inc: { clicks: 1 } }
  );
};
export const shortenUrl = async (req: Request, res: Response) => {
  const { origUrl } = req.body;
  const base = "http://shortUrl.com";
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

export const findAll = async (req: Request, res: Response) => {
  try {
    const allUrls = await Url.find();
    res.json(allUrls);
  } catch (error) {
    console.log(error);
    res.status(404).json("no content in document");
  }
};
