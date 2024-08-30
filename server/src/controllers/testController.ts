// testController.js
import { Request, Response } from "express";
import {
  getAllTestItems,
  getTestItemById,
  createTestItem,
} from "../services/testService";

export const getTestItems = async (_req: Request, res: Response) => {
  try {
    const items = await getAllTestItems();
    console.log(`ITEMS :: ${items}`);
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

export const addTestItem = (req: Request, res: Response): void => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { content, important } = req.body;
    // check if req.body ok, else erroria
    const newItem = createTestItem(content, important);
    res.status(201).json(newItem);
  } catch (_error) {
    res.status(500).json({ error: "Failed to create a test item" });
  }
};
