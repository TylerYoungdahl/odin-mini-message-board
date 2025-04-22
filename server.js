import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Config
const PORT = 8000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// Start Server
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
