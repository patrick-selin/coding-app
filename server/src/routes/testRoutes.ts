// testRoutes.js
import { Router } from "express";
import { getTestItems } from "../controllers/testController";

const router = Router();

router.get("/test", getTestItems);

export default router;
