console.log("hii");
const TelegramBot = require('node-telegram-bot-api');
const token = '5894087766:AAGNieA2JJ57qPiV4R7-dT9cN8kJq7Q7Kxo';
const bot=new TelegramBot(token,{polling:true});
bot.on('message', function(msg){
    
if (msg.text=== "hi") {
bot.sendMessage(msg.chat.id,"Hello dear user");
} 
    
});
bot.onText(/\/start/, (msg) => {

bot.sendMessage(msg.chat.id, "Welcome");
    
});
bot.onText(/\/sendpic/, (msg) => {

bot.sendPhoto(msg.chat.id,"https://www.somesite.com/image.jpg" );
    
});
bot.onText(/\/sendpic/, (msg) => {

bot.sendPhoto(msg.chat.id,"https://www.somesite.com/image.jpg",{caption : "Here we go ! \nThis is just a caption "} );
    
});
bot.onText(/\/start/, (msg) => {
    
bot.sendMessage(msg.chat.id, "Welcome", {
"reply_markup": {
    "keyboard": [["Sample text", "Second sample"],   ["Keyboard"], ["I'm robot"]]
    }
});
    
});
bot.on('message', (msg) => {
var Hi = "hi";
if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id, "Hello dear user");
}
var bye = "bye";
if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
}    
var robot = "I'm robot";
if (msg.text.indexOf(robot) === 0) {
    bot.sendMessage(msg.chat.id, "Yes I'm robot but not in that way!");
}
});
bot.on('message', (msg) => {

 var Hi = "hi";
 if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
   bot.sendMessage(msg.chat.id,"<b>bold</b> \n <i>italic</i> \n <em>italic with em</em> \n <a href=\"http://www.example.com/\">inline URL</a> \n <code>inline fixed-width code</code> \n <pre>pre-formatted fixed-width code block</pre>" ,{parse_mode : "HTML"});
   }
});
