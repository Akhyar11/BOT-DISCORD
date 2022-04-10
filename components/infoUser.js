import { MessageEmbed } from "discord.js";
import config from "../utils/config.json" assert { type: "json" };

export default function infoUser(msg, member, client) {
  const userEmbed = new MessageEmbed()
    .setTitle(`${member.user.username} informasi`)
    .setColor(config.primary)
    .setFields(
      { name: "user id", value: member.user.id, inline: true },
      {
        name: "nickname",
        value: member.nickname ? member.nickname : "nickname not set",
        inline: true,
      }
    )
    .setFooter(
      `Command used by ${msg.author.username}`,
      msg.author.displayAvatarURL()
    );

  msg.channel.send({ embeds: [userEmbed] });
}
