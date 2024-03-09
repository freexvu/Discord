const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: true
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


    console.clear();

    console.log(`${client.user.tag} - rich presence started!`
               )
const r = new Discord.RichPresence()
    .setApplicationId('857147640851202068')
    .setType('STREAMING') //STREAMING, PLAYING, LISTENING.
    .setURL('https://twitch.tv/xdd') // or your yt url
    .setName('##1600')
    .setDetails('$')
     client.user.setActivity(r);
     client.user.setPresence({ status: "online" }); //dnd, online, idle, offline
})

client.login(process.env.TOKEN)






















// Copyright to mrnekrozyt 2021-2023
// Support Server:https://discord.gg/pSJ5JkmH6N
// Source Code: https://github.com/mrnekrozyt/Streaming-24-7-RPC/
