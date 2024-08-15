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

export const getTestItem = (req: Request, res: Response): void => {
  try {
    const id = req.params.id;
    const item = getTestItemById(id);

    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ error: `Test item with id ${id} not found` });
    }
  } catch (_error) {
    res.status(500).json({ error: "Failed to fetch the test item" });
  }
};
