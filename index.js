const keepAlive = require("./server");

const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require("node-fetch");

const guild = new Discord.Guild();

/*
const goodbyeChannel = client.channels.cache.find(channel => channel.name === 'goodbye');
*/

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  //log all servers the bot is on
    console.log(`Guilds: ${client.guilds.cache.map(guild =>  guild.name + " " + guild.id)}`);
  // log roles on civ5 server
  console.log(`Roles on civ5 vanilla ${client.guilds.cache.get("854021864371126272").roles.cache.map(role => role.name + " " + role.id)}`)
  // log all channels on civ5 server
   console.log(`Channels on civ5 vanilla ${client.guilds.cache.get("854021864371126272").channels.cache.map(channel => channel.name + " " + channel.id)}`)
});

//autorole
client.on("guildMemberAdd", member => {
  member.roles.add("861717299084918805");
});

//automessage on server leave
client.on("guildMemberRemove", member => {
  member.guild.channels.cache.find(channel => channel.name === 'goodbye').send(`**${member.displayName}** has left. Sorry to see you go!`);
  //log channel the message was posted in
  console.log(client.channels.cache.find(channel => channel.name === 'goodbye'));
});


client.on("message", msg => {
  if (msg.author.bot) {return}

    if (msg.channel.type === 'dm') {
    if (msg.content.startsWith("@")) {

      let guild = client.guilds.cache.get("854021864371126272");
      let anonFeedbackChannel = guild.channels.cache.get("864895103025283072");
      
      anonFeedbackChannel.send(`**${msg.author.username}** wrote ${msg.content}`);

      msg.channel.send("Thank you! Your message has been sent to the administration staff.");
    } else {
          msg.channel.send("Hi! I'm a bot. If you wish to send a message to the admnistration staff, start your next message with '@' symbol. Example: '@ my message to the staff'. You will get a notification from me once the message has been sent. ")

    }
  }

  if(msg.content.toLowerCase().includes("howgh")) {
    msg.reply("Howgh!");
  }

  if (msg.content.toLowerCase().includes("best civ")) {
    msg.reply("The best civilization is the Shoshone");
  }
});

const CronJob = require('cron').CronJob;

const messageAnonymous = new CronJob('20 18 * * *', function() {

  let guild = client.guilds.cache.get("854021864371126272");
  let messageChannel = guild.channels.cache.get("863414782606573569");
  let presentationChannel = guild.channels.cache.get('854022962637307965');

  messageChannel.send("<@&861717299084918805> a reminder, that in order to get full access to the server, you should post in " + presentationChannel.toString() + " first")

}, null, true, 'Europe/Warsaw');

keepAlive();

const mySecret = process.env['TOKEN']
client.login(process.env.TOKEN);