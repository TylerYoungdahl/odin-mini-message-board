import express from "express";
import {
  getMessages,
  getNewMessageForm,
  postMessage,
} from "../controllers/controller.js";

const router = express.Router();

router.get("/", getMessages);

router.get("/new", getNewMessageForm);

router.post("/new", postMessage);

export default router;
