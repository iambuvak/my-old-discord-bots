const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
  
   //emojii
       var emojiadd = await db.fetch(`mesajamoji_${message.guild.id}`);
  let emojiler = "";
  if (emojiadd === null || emojiadd === undefined){
    emojiler = "❌";
  }else {
    emojiler = emojiadd
  };
  //emoji
     const teyitmsj = new Discord.RichEmbed() 
   .setColor("RANDOM") 
        .setDescription(` ${emojiler} Bu komutu kullanmaya yetkin yok!`)
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(teyitmsj);
  
let user = message.mentions.users.first() || message.guild.members.get(args[0]);
  let kan = await db.fetch(`korumalogk_${message.guild.id}`);
  
const leonesias = new Discord.RichEmbed()  
        
  .setColor('RANDOM')
 .setAuthor('kayıtsız rolü Sıfırlandı')
      .setDescription(`<#${kan}> Başarıyla sıfırlandı!`)
  .setFooter(`Komutu kullanan yetkili: ${message.author.username}`, `${message.author.displayAvatarURL}`) 
    
   message.channel.sendEmbed(leonesias)
  
  db.delete(`korumalogk_${message.guild.id}`)
} 
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['koruma-log-sıfırla'],
    permLevel: 0
}

exports.help = {
    name: 'koruma-log-sıfırla',
    description: 'koruma-log-sıfırla',
    usage: 'koruma-log-sıfırla'
}