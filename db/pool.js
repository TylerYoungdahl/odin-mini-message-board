import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();
const CONNECTION_STRING = process.env.CONNECTION_STRING;

export const pool = new Pool({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
});
