// testRoutes.js
import { Router } from "express";
import { getHealthHTML, getHealthJSON } from "../controllers/healthController";

const router = Router();

router.get("/health", getHealthHTML);
router.get("/health/json", getHealthJSON);

export default router;
