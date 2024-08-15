// testServices.js
import { TestItem, testItems } from "../models/testItemModel";

export const getAllTestItems = (): TestItem[] => {
  return testItems;
};

export const getTestItemById = (id: string): TestItem | undefined => {
  return testItems.find((item) => item.id === id);
};
