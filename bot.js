const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Five Stars|*help`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.on('message', msg => {
  if(msg.content === 'هلا')
  msg.reply(':heart: هلا بك حبي اتني ان اكون عجبتك ')
});



client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links 😠 !**`)
    }
}
});



 client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == 'لون'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**لا يوجد لون بهذا الأسم ** :x: `)
   .setColor(`ff0000`)
 
    if(!isNaN(args) && args.length > 0)
   
 
if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
 
 
       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                   
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Done , تم تغير لونك . :white_check_mark: **`)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
         
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
       
           
    }
});



client.on("message", message => {
    var prefix = "*";
 if (message.content === "*help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000")
      .setDescription(`
     
             Please Chose:
 
             
${prefix}   *𝑯𝑬𝑳𝑷-𝑮𝑬𝑵𝑬𝑹𝑳☞ الاوامر العامه
 
${prefix}**𝑯𝑬𝑳𝑷-𝑨𝑫𝑴𝑰𝑵☞ الاوامر الاداريه 
             
${prefix}**𝑯𝑬𝑳𝑷-𝑮𝑨𝑴𝑬𝑺☞ اوامر الالعاب
 
${prefix}**𝑯𝑬𝑳𝑷 𝑩𝑶𝑻☞ اوامر حول البوت

      `)
   message.channel.sendEmbed(embed)
   
   }
   });
 
 
client.on("message", message => {
    var prefix = "*";
 if (message.content === "*help-generl") {
     message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`
           𝑯𝑬𝑳𝑷-𝑮𝑬𝑵𝑬𝑹𝑳|الاوامر عامة














`)
   message.author.sendEmbed(embed)
   
   }
   });
   
   client.on("message", message => {
    var prefix = "*";
 if (message.content === "*help-admin") {
      message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`
          𝑯𝑬𝑳𝑷-𝑨𝑫𝑴𝑰𝑵|اوامر ادارة السيرفر










`)
   message.author.sendEmbed(embed)
   
   }
   });
 
   client.on("message", message => {
    var prefix = "*";
 if (message.content === "*help-games") {
      message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`
         𝑯𝑬𝑳𝑷-𝑮𝑨𝑴𝑬𝑺|اوامر الالعاب






  `)
   message.author.sendEmbed(embed)
   
   }
   });
             
client.on("message", message => {
    var prefix = "*";
 if (message.content === "*help-bot") {
     message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed()
      .setColor("#000000")
      .setDescription(`
                𝑯𝑬𝑳𝑷 𝑩𝑶𝑻 |اوامر حول البوت   






`)
   message.author.sendEmbed(embed)
   
   }
   });



client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" :heart: هلا حبي اتمني ان اكون عجبتك ايش  تريد؟  ");
    }
});

client.login(process.env.BOT_TOKEN);
