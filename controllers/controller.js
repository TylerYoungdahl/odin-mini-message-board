const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

export const getMessages = (req, res) => {
  res.render("index", { messages: messages });
};

export const getNewMessageForm = (req, res) => {
  res.render("form");
};

export const postMessage = (req, res) => {
  const newMessage = {
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  };

  if (!req.body.text || !req.body.user) {
    console.error("Please fill out all fields");
  } else {
    messages.push(newMessage);
  }

  res.redirect("/");
};
