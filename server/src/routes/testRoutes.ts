// testRoutes.js
import { Router } from "express";
import { getTestItems, getTestItem, addTestItem } from "../controllers/testController";

const router = Router();

router.get("/test", getTestItems);
router.get("/test/:id", getTestItem);

router.post("/test", addTestItem);

export default router;
