import express from "express";
import { getCashShare } from "../controller/temp/cash.controller";
const router = express.Router();

router.get("/share", getCashShare);

export default router;