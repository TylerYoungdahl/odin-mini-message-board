import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import router from "./routes/router.js";
import dotenv from "dotenv";

// Config
dotenv.config();
const PORT = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// Paths
const assetsPath = path.join(__dirname, "public");

// Middleware
app.use(express.urlencoded({ extended: true }));

// View Engine Setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
app.use("/", router);

// Start Server
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
