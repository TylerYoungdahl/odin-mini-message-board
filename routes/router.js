import express from "express";
import * as controllers from "../controllers/controller.js";

const router = express.Router();

router.get("/", controllers.getMessages);

router.get("/new", controllers.getNewMessageForm);

router.post("/new", controllers.postMessage);

export default router;
