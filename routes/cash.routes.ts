import express from "express";
const router = express.Router();
import { getCounter, incrementCounter } from "../controller/temp/count.controller";

router.get("/", getCounter);
router.post("/", incrementCounter);

export default router;