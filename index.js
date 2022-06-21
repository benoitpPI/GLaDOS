console.log("working");
const {token} = require("/home/pi/discordbot/creditential.json");
const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});


client.on('message', message => {
    if (message.author.username=="GLaDOS"){return;}
    msg=message.content;
    msg=msg.toLowerCase();
    console.log(msg);
    if (msg.includes("glados")) {
	if (msg.includes("hello") || msg.includes("bonjour") || msg.includes("salut") || msg.includes("hi")  ){
	  message.reply("Hello! I am GLaDOS. Let's make science!")
      }
      else{
	  message.reply("What do you have you son of Wheatley?")
      }
  }

    if (msg=="!roulette"){
 	console.log('roulette russe!');
 	message.reply("Vous jouez à la roulette russe!");
	if (Math.random()<.2){
	    message.reply("You die!");
    		message.guild.members.fetch(message.author.id).then(member => {
		    member.kick().catch( e => {message.reply("I am not powerful enaugh to kick you!");})		   
		});
	}
	else{
		message.reply("You survive!");
	}
}

	if (msg.startsWith("!puissance4 new")){
		let player1=message.author;
		let player2=message.mentions.members.first().id;
		plateau=0;
		message.reply(player1,player2);


	}

  })



client.login(token);
