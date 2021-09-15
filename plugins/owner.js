const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'owner', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.linkpicture.com/q/20210816_231658.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `╭──────────────────╮
   ᴀɴsʜᴀᴅ ᴠғᴄ
╭──────────────────╯
│
│
│
│
│ ▢ *ᴏᴡɴᴇʀ* : ᴀɴsʜᴀᴅ
│ ▢ *ɴᴜᴍʙᴇʀ* : wa.me/919995390942
│ ▢ *ɪɴsᴛᴀɢʀᴀᴍ* :https://instagram.com/│ans._had_?utm_medium=copy_link
│ ▢ *ʏᴛ* :https://youtube.com/channel/│UCQ3NYIDKT6-glPHTPya7b7w
│ ▢ *ɢɪᴛʜᴜʙ* :https://github.com/│anshadat/Rocky
│ ▢ *ᴀᴜᴅɪᴏ ᴄᴏᴍɴᴅs* :https://github.com/│anshadat/Rocky/tree/master/uploads
│ ▢ *sᴛɪᴄᴋᴇʀ ᴄᴏᴍɴᴅs* :https://│github.com/anshadat/Rocky/tree/│master/uploads
│
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│       ©919995390942
│
╰──────────────────╮
│ 
│
│   ❏ 𝘤𝘰𝘥𝘦𝘥 𝘣𝘺 *ᴀɴsʜᴀᴅ* ❏
╰──────────────────╯
`}) 

}));
