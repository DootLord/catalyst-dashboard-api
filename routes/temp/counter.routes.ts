import express from "express";
const router = express.Router();
import { getCounter, incrementCounter } from "../../controller/temp/count.controller";

router.get("/count", getCounter);
router.post("/count", incrementCounter);

export default router;