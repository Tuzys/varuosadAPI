import express from "express";
import { getParts, createPart, getPart, deletePart, updatePart } from "../controllers/parts.js";

const router = express.Router();

router.get("/", getParts);

router.post("/", createPart);

router.get("/:Id", getPart);

router.delete("/:Id", deletePart);

router.patch("/:Id", updatePart);

export default router;
