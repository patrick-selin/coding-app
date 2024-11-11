// testController.js
import { Request, Response } from "express";
import {
  getAllTestItems,
  getTestItemById,
  createTestItem,
} from "../services/testService";

export const getTestItems = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const testItems = await getAllTestItems();
    if (testItems.length === 0) {
      return res.status(404).json({ message: "No test items found" });
    }
    return res.status(200).json(testItems);
  } catch (error) {
    console.error("Error in getTestItems controller:", error);
    return res.status(500).json({ error: "Error fetching data" });
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

export const addTestItem = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { content, important } = req.body;
    console.log(`REQ BODY :: ${JSON.stringify(req.body)}`);
    const newItem = await createTestItem(content, important);

    res.status(201).json(newItem);
  } catch (_error) {
    res.status(500).json({ error: "Failed to create a test item" });
  }
};
