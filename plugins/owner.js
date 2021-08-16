const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'owner', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.pixelstalk.net/wp-content/uploads/2016/03/Pikachu-wallpaper-HD-dowload.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater Anshad*
*owner number wa.me/919995390942*
*instagram  : https://instagram.com/ans._had_?utm_medium=copy_link*
*bot setting video : https://youtube.com/channel/UCQ3NYIDKT6-glPHTPya7b7w
*githublink       https://github.com/anshadat/pikachu*
*audio commads    https://github.com/anshadat/pikachu/tree/master/uploads*
*sticker commads  https://github.com/anshadat/pikachu/tree/master/uploads*
`}) 

}));
