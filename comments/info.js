import { MessageEmbed } from "discord.js";
import config from "../utils/config.json" assert { type: "json" };
import infoUser from "../components/infoUser.js";

const info = (msg, args, client) => {
  switch (args[1]) {
    case "Author":
      const author = new MessageEmbed()
        .setColor("#34ebba")
        .setTitle("Information Author")
        .addField("name : ", "Muhammad Akhyar", true);
      msg.channel.send({ embeds: [author] });
      break;
    case "Bot":
      const bot = new MessageEmbed()
        .setColor("#34ebba")
        .setTitle("Information Bot")
        .addFields(
          { name: "nama", value: client.user.username, inline: true },
          { name: "versi ", value: config.versi }
        )
        .setFooter(
          `DKA-BOT version 1.0.0 created by ${config.author}`,
          msg.author.displayAvatarURL()
        )
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription(
          `Ini adalah bot yang dibuat untuk mengelola\nserver dan member di discord ${msg.guild.name}`
        );
      msg.channel.send({ embeds: [bot] });
      break;
    case "user":
      const mention = msg.mentions.users.first() || msg.author;
      const member = msg.guild.members.cache.get(mention.id);
      console.log(member);
      if (args[2]) {
        if (args[2] === "user") {
          infoUser(msg, member, client);
        }
      } else {
        infoUser(msg, member, client);
      }
  }
};

export default info;
