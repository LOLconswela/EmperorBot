const Discord = require("discord.js");

const TOKEN = "MzY1OTExMDExMTQ1OTQwOTkz.DLlOKg.p6WWVXn2QohNZJ3Eifb4hS6GLSw";

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("IM IMMORTAL BITCH!")
});
bot.on("message", function(message) {
   if (message.author.equals(bot.user)) return;

   if (message.content == "Hi!") {
        message.reply.sendMessage('Hi, Faggot');
   }
});

bot.login(TOKEN);
