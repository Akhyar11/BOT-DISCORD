import { MessageEmbed } from "discord.js";

export default function help(msg) {
  const help = new MessageEmbed()
    .setColor("#34ebba")
    .setTitle("Help")
    .setDescription(
      "Perintah yang dapat digunakan. Setiap perintah harus diawali dengan '!' contoh '!help' tanpa tanda kutip"
    )
    .addFields(
      { name: "1. !ping", value: "digunakan untuk mengetes bot" },
      {
        name: "2. !info Author",
        value:
          "digunakan untuk mengecek siapa saja yang membuat atau mengembangkan bot",
      },
      { name: "3. !info Bot", value: "digunakan untuk mengecek informasi bot" },
      { name: "4. !help", value: "bantuan" }
    );
  msg.channel.send({ embeds: [help] });
}
