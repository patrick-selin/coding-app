// testRoutes.js
import { Router } from "express";
import { getTestItems, getTestItem } from "../controllers/testController";

const router = Router();

router.get("/test", getTestItems);
router.get("/test/:id", getTestItem);

export default router;
