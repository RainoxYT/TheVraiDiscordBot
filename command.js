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
    console.log("[LOG] (" + " ( " + ladate.getDate() + " / " +( ladate.getMonth()+1 )  + " / " +ladate.getFullYear + h + m + s + ") " + ") > " + `${message.author.username}` + " à fais la commande lel");
    message.reply("卍 LE RAICH C'EST MAINTENANT 卍");

if(command === "Créateur"){

        Message.reply("Maître @Teyo's, vous m'avez créer...");
    
    }

}});




  // Configuration
  client.login(config.token);


 // Date

    var ladate=new Date()
    var h=ladate.getHours();
    if (h<10) {h = "0" + h}
    var m=ladate.getMinutes();
    if (m<10) {m = "0" + m}
    var s=ladate.getSeconds();
    if (s<10) {s = "0" + s}

