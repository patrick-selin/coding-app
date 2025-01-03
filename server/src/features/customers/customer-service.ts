import { customers } from "../../db/schemas/customers";
import { db } from "../../db/db";

export const getAllCustomers = async () => {
  return await db.select().from(customers);
};
