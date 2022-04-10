/** @format **/

console.clear();
import { Client, Intents } from "discord.js";
import ping from "./comments/ping.js";
import info from "./comments/info.js";
import help from "./comments/help.js";
import config from "./utils/config.json" assert { type: "json" };

// Setup Discord js
const intents = new Intents(32767);
const client = new Client({
  intents,
});

// Variable yang dibutuhkan
const token = config.token;

// Event Hendler
client.on("ready", () => {
  console.log(`Logged in as ${client.user.name}!`);
  client.user.setActivity("all member", {
    type: "LISTENING",
  });
});

client.on("messageCreate", (msg) => {
  const cekPrefx = msg.content.toString();
  if (cekPrefx[0] !== "!") {
    return false;
  } else {
    if (cekPrefx === "!ping") {
      ping(msg);
    }
    const args = msg.content.toString().split(" ");
    switch (args[0]) {
      case "!info":
        info(msg, args, client);
        break;
      case "!help":
        help(msg);
        break;
    }
  }
});

// Event login
client.login(token);
