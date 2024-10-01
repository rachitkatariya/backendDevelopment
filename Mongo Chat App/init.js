const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "neha",
    to: "anjali",
    msg: "Send me your notes",
    created_at: new Date(),
  },
  {
    from: "Netrika",
    to: "Rachit",
    msg: "Send me your notes",
    created_at: new Date(),
  },
  {
    from: "Nandini",
    to: "Prince",
    msg: "Send me your notes",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
