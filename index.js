const { Client, GatewayIntentBits, SlashCommandBuilder } = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", async () => {
  console.log("SobaBot is online 😎");

  const command = new SlashCommandBuilder()
    .setName("soba")
    .setDescription("Posts a cool Soba picture with a message");

  await client.application.commands.create(command);
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "soba") {
    await interaction.reply({
      content: "🍜 **Soba says: Stay cool and eat noodles!** 😎",
      files: ["https://i.imgur.com/6RLVZ5C.jpg"]
    });
  }
});

client.login(process.env.TOKEN);

