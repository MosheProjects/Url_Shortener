import { Request, Response } from "express";
import { findAll, redirectUrl, shortenUrl } from "../services/urlService";


export const shortenTheUrl = async (req: Request, res: Response) => {
  return shortenUrl(req, res);
};

export const redirecThetUrl = async (req: Request, res: Response) => {
  return redirectUrl(req, res);
};

export const getAll = async (req: Request, res: Response) => {
  return findAll(req, res);
};
