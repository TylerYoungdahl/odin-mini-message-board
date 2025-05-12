import { pool } from "./pool.js";

export const getMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

export const insertMessage = async (message) => {
  await pool.query(
    `INSERT INTO messages (text, username, date_added) VALUES ($1, $2, $3)`,
    message
  );
};
