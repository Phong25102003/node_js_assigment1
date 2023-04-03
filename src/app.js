import mongoose from "mongoose";
import express from "express";
import productsRouter from "./routers/products"
import authRouter from "./router/auth"
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors())

app.use("/api", productsRouter);
app.use("/api", authRouter);
mongoose.connect('mongodb://127.0.0.1:27017/we17301')

export const viteNodeApp = app;