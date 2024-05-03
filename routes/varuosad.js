import express from "express";
import { getParts, getPart } from "../controllers/parts.js";

const router = express.Router();

router.get("/", getParts);


router.get("/:Id", getPart);

export default router;
