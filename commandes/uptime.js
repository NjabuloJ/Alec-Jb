const { fana } = require("../njabulo/fana");
const moment = require("moment-timezone");
const { getBuffer } = require("../njabulo/dl/Function");
const { default: axios } = require('axios');

const AUDIO_URL = "https://files.catbox.moe/7ydtb3.mp3"; // New audio URL
const THUMBNAIL_URL = "https://files.catbox.moe/gsdha7.jpg"; // New image URL

const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " d, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " h, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " m, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " second" : " s") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 


fana({ nomCom: 'uptime',
    desc: 'To check runtime',
    Categorie: 'General',
    reaction: '📃', 
    fromMe: 'true', 


  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
      
    try {
        await zk.sendMessage(dest, { 
        text:  `*Uptime: ${runtime(process.uptime())}*\n*Tanks you see uptime please don't forget check uptime again*`,
         footer: "*Njabulo Jb*, developed by Njabulo",
          gifPlayback: true,
          contextInfo: {
             externalAdReply: {
              title: "Alec-Jb",
              body: "ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ",
              mediaType: 1,
              thumbnailUrl: THUMBNAIL_URL,
              sourceUrl: "https://github.com/NjabuloJ/Njabulo-Jb",
              showAdAttribution: true,
                }
            }
        }, { quoted: ms });

    } catch (e) {
        console.log("❌ uptime Command Error: " + e);
        repondre("❌ Error: " + e);
    }
});


   
