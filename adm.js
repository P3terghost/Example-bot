const Discord = require('discord.js');

exports.run = async (client, message, args) => {
message.delete();
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('MODERAÇÃO do BOT')
        .setColor('#d800e3')
        .setDescription(`**Painel de comandos de MODERAÇÃO do bot!**\n \n **Forma:** //<comando>\n \n ➡ | **ban** \n ➡ | **kick** \n ➡ | **anuncio** \n ➡ | **evento**\n ➡ | **clear** \n ➡ | **bomba** \n ➡ | **say** \n ➡ | **jornal** \n ➡ | **rban** \n ➡ | **flood**`)
        .setTimestamp()
        .setFooter('//adm')
  await message.channel.send(embed);
};