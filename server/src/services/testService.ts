// testServices.js

import { testItems as testItemsDb } from "../db/schema";
import { v4 as uuidv4 } from "uuid";

export const getAllTestItems = async (db) => {
  try {
    const result = await db.select().from(testItemsDb);
    console.log("Fetched test items:", result);
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const createTestItem = async (db, content: string, important: boolean) => {
  try {
    const id = uuidv4();
    const [newItem] = await db
      .insert(testItemsDb)
      .values({ id, content, important })
      .returning();

    console.log("Created test item:", newItem);
    return newItem;
  } catch (error) {
    console.error("Error creating test item:", error);
    throw error;
  }
};
