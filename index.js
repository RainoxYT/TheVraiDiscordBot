// Library
const Discord = require("discord.js");
const client = new Discord.Client();
const ClientUser = require ("discord.js");

// Commandes

  // BotCommand
  const commandbot = require("./commandbot.js")


// Token + Prefix
const config = require("./config.json")

// Start du Bot
client.on("ready", ( ) => {
  console.log(`💻  ${client.users.size} Utilisateurs / ${client.guilds.size} Serveurs`);
  client.user.setActivity(`${client.users.size} connectés`);
  client.user.setStatus("dnd");
}); 

// Nouveau Serveur
client.on("guildCreate", guild => {
  console.log(`  ${guild.name} (id: ${guild.id}).  ${guild.memberCount} membres`);
});

// Supprimé d'un Serveur
client.on("guildDelete", guild => {
  console.log(`:x:  ${guild.name} (id: ${guild.id})`);
});

// Async
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase(); 
});

// Configuration
client.login(config.token);