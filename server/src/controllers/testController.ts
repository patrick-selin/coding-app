// testController.js
import { Request, Response } from "express";
import { getAllTestItems } from "../services/testService";

export const getTestItems = (_req: Request, res: Response): void => {
  const items = getAllTestItems();
  res.json(items);
};
