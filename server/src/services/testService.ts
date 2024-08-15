// testServices.js
import { TestItem, testItems } from "../models/testItemModel";

export const getAllTestItems = (): TestItem[] => {
  return testItems;
};
