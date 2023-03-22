import express from "express";
import joi from "joi";

import { create, getAll, get, remove, update } from "../controllers/products";

const router = express.Router()

router.post("/products", create)
router.get("/products/:id", get)
router.get("/products", getAll)
router.delete("/products/:id", remove)
router.put("/products/:id", update)


export default router;