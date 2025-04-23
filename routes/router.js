import express from "express";
import { getMessages } from "../controllers/indexController.js";

const router = express.Router();

router.get("/", getMessages);

export default router;
