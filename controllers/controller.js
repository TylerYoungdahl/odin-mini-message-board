import * as db from "../db/queries.js";
import { format } from "date-fns";

export const getMessages = async (req, res) => {
  const messages = await db.getMessages();
  const formattedMessages = messages.map((message) => {
    return {
      ...message,
      date_added: format(message.date_added, "MM-dd-yyyy hh:mm a"),
    };
  });
  res.render("index", { messages: formattedMessages });
};

export const getNewMessageForm = (req, res) => {
  res.render("form");
};

export const postMessage = (req, res) => {
  const newMessage = [req.body.text, req.body.username, new Date()];
  db.insertMessage(newMessage);
  res.redirect("/");
};
