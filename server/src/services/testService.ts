// testServices.js
import { addTestItem, TestItem, testItems } from "../models/testItemModel";
import { db } from "../db/db";
import { testItems as testItemsDb } from "../db/schema";

export const getAllTestItems = async () => {
  try {
    const result = await db.select().from(testItemsDb);
    console.log("Fetched test items:", result);
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getTestItemById = (id: string): TestItem | undefined => {
  return testItems.find((item) => item.id === id);
};

export const createTestItem = (
  content: string,
  important: boolean
): TestItem => {
  const lastItem = testItems[testItems.length - 1];
  const newId = lastItem ? (Number(lastItem.id) + 1).toString() : "1";

  const newItem: TestItem = {
    id: newId,
    content,
    important,
  };

  addTestItem(newItem);

  return newItem;
};
