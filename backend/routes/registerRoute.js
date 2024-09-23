import express from "express";
import { create } from "../controller/registerController.js";

const router = express.Router();

// router.get("/");

router.post("/", create);

export default router;
