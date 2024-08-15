// testController.js
import { Request, Response } from "express";
import { getAllTestItems, getTestItemById } from "../services/testService";

export const getTestItems = (_req: Request, res: Response) => {
  try {
    const items = getAllTestItems();
    res.json(items);
  } catch (_error) {
    res.status(500).json({ error: "Error" });
  }
};

export const getTestItem = () => {
    // todo
}