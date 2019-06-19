const Discord = require("discord.js");

const myBot = new Discord.Client();

const token = 'NTkwNzk0MTU2MjkzNjE5NzEy.XQnbYg.PhStBTZq2BJPbRen031BXjtz_PQ';

const PREFIX = "!";

myBot.on('ready', () =>{
    console.log('This bot is online!');
})


// Loading global variables
const songs = ["Brand New Theater!", "Thank You!", "Welcome!!", "UNION!!", "Dreaming!", "THE IDOLM@STER", "Jibun REST@RT", "READY!!", "Machiuke Prince", "ToP!!!!!!!!!!!!!", "Merry", "Overmaster", "Invincible Justice", "Justice OR Voice", "LEADER!!", "Kokoro ga Kaeru Basho", "Blue Symphony", "Sentimental Venus", "Marionette wa Nemuranai", "Shooting Stars", "Good-Sleep Baby", "Growing Storm!", "FairyTale ja Irarenai", "STANDING ALIVE", "Angelic Parade", "Dream Traveler", "Princess Be Ambitious!!", "HOME, SWEET FRIENDSHIP", "Kuraki Hoshi, Tooi Tsuki", "Aikotoba wa Start Up!", "Nijiiro letters", "Hoshikuzu no Symphonia", "ZETTAIxBREAK!! Twinkle Rhythm", "Jireru Heart ni Hi o Tsukete", "Melty Fantasia", "Birth of Color", "Hanazakari Weekend", "Eternal Harmony", "Saku wa Ukiyo no Kimi Hanabi", "Sun Rhythm Orchestra", "Big Bang's Volleyball!!!!!", "Brave HARMONY", "Ordinary Clover", "Starry Melody", "Last Actress", "Jungle Party", "Harmonics", "PRETTY DREAMER", "Harumachi Joushi", "Raise the FLAG", "Datte Anata wa Princess", "SeichouChu LOVER!!", "Getsuyoubi no Cream Soda", "Bonnes! Bonnes!! Vacances!!!", "Pikopiko IIKO! Invader", "Episode. Tiara", "Primula", "fruity love", "Suteki na Kiseki", "Precious Grain", "Koi no Lesson Shokyuuhen", "Ruriiro Kingyo to Hanashoubu", "Hummingbird", "Toumeu na Prologue", "Tokimeki no Onpu ni Natte", "Smile Ichiban", "IMPRESSION LOCOMOTION!", "Happy Lucky Jet Machine", "After School Party Time", "Happy Darling", "Original Koe ni Natte", "Liar Rouge", "dear...", "Kokoro Exercise", "Unison Beat", "Happy Effect!", "vivid color", "Fantasista Carnival", "WHY?", "Chou Genki Show Idol ch@ng!", "...In The Name of. ...LOVE?", "Heart Days Night", "Festa Illumination", "Koigokoro Masquerade", "FIND YOUR WIND!", "Animal Station", "Rolling Sankaku", "BOUNCING SMILE!", "Asayake no Crescendo", "Maria Trap", "Ano ne, Kiite Hoshii Koto ga Arunda", "WE ARE ONE!!", "Beginner's Strike", "Oshiete last note...", "Hana Shirabe", "Ryuuseigun", "Orange no Sora no Shita", "Blooming Star", "THE IDOLM@STER Hatsuboshi-Mix", "White Vows"];
const allsongs = ["Brand New Theater!", "Thank You!", "Welcome!!", "UNION!!", "Dreaming!", "THE IDOLM@STER", "Jibun REST@RT", "READY!!", "Machiuke Prince", "ToP!!!!!!!!!!!!!", "Merry", "Overmaster", "Invincible Justice", "Justice OR Voice", "LEADER!!", "Blooming Star", "THE IDOLM@STER Hatsuboshi-Mix"];
const psongs = ["Kokoro ga Kaeru Basho", "Growing Storm!", "Princess Be Ambitious!!", "HOME, SWEET FRIENDSHIP", "Aikotoba wa Start Up!", "ZETTAIxBREAK!! Twinkle Rhythm", "Jireru Heart ni Hi o Tsukete", "Birth of Color", "Saku wa Ukiyo no Kimi Hanabi", "Big Bang's Volleyball!!!!!", "Starry Melody", "PRETTY DREAMER", "Datte Anata wa Princess", "Bonnes! Bonnes!! Vacances!!!", "Episode. Tiara", "Suteki na Kiseki", "Toumei na Prologue", "Smile Ichiban", "Happy Lucky Jet Machine", "Original Koe ni Natte", "Kokoro Exercise", "vivid color", "Chou Genki Show Idol ch@ng!", "Festa Illumination", "Animal Station", "Asayake no Crescendo", "WE ARE ONE!!", "Hana Shirabe"];
const fsongs = ["Blue Symphony", " Sentimental Venus", "Shooting Stars", "FairyTale ja Irarenai", "Kuraki Hoshi, Tooi Tsuki", "Melty Fantasia", "Eternal Harmony", "brave HARMONY", "Last Actress", "Harmonics", "Raise the FLAG", "Getsuyoubi no Cream Sode", "Primula", "Precious Grain", "Ruriiro Kingyo to Hanashoubu", "IMPRESSION LOCOMOTION!", "After School Party Time", "Liar Rouge", "Unison Beat", "WHY?", "...In The Name of. ...LOVE?", "Koigokoro Masquerade", "Rolling Sankaku", "Maria Trap", "Beginner's Strike", "Ryuuseigun"];
const asongs = ["Marionette wa Nemuranai", "Good-Sleep Baby", "STANDING ALIVE", "Angelic Parade", "Dream Traveler", "Nijiiro letters", "Hoshizuku no Symphonia", "Hanazakari Weekend", "Sun Rhythm Orchestra", "Original Clover", "Jungle Party", "Harumachi Joushi", "SeichouChu LOVER!!", "Pikopiko IIKO! Invader", "fruity love", "Koi no Lesson Shokyuuhen", "Hummingbird", "Tokimeki no Onpu ni Natte", "Happy Darling", "dear...", "Happy Effect!", "Fantasista Carnival", "Heart Days Night", "FIND YOUR WIND!", "BOUNCING SMILE!","Ano ne, Kiite Hoshii Koto ga Arunda", "Oshiete last note...", "Orange no Sora no Shita", "White Vows"];




// The onMessage event handler
myBot.on('message', function (message) {
    // It is considered bad practice to let your bot react to other bots.
    if (message.author.bot) return;

    // If a message doesn't start with your bot's prefix, don't bother going through the cases.
    if (!message.content.startsWith("!")) return;

    // Args length check. #1 is the command, #2 and higher are the arguments
    var args = message.content.substring("!".length).split(" ");

    switch (args[0].toLowerCase()) {
        case "song":
            var response = songs [Math.floor(Math.random()*songs .length)];

            message.channel.send(response).then().catch(console.error);
            break;

         case "all":
            var response = allsongs [Math.floor(Math.random()*allsongs .length)];

            message.channel.send(response).then().catch(console.error);
            break;

        case "p":
            var response = psongs [Math.floor(Math.random()*psongs .length)];
        
            message.channel.send(response).then().catch(console.error);
            break;  

        case "f":
            var response = fsongs [Math.floor(Math.random()*fsongs .length)];
        
            message.channel.send(response).then().catch(console.error);
                    break;

        case "a":
            var response = asongs [Math.floor(Math.random()*asongs .length)];
                
            message.channel.send(response).then().catch(console.error);
            break;
        default:
            break;
    }
});


myBot.login(process.env.BOT_TOKEN);
