// Library
const Discord = require("discord.js");
const client = new Discord.Client(); 

// Prefix + Token
const config = require("./config.json");

//Async
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


// Commande
if(command === "lel") {
    console.log(`${message.author.username}`);
    message.reply("Fils de Jul!");

}});


  // Configuration
  client.login(config.token);
