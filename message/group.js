const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")

const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')

let setting = JSON.parse(fs.readFileSync('./setting.json'))

module.exports = welcome = async (ikyy, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)
      num = anu.participants[0]
join = `Hai @${num.split('@')[0]}\n\n\n*Nama :*\n*Askot :*\n*Umur :*\n*Status :*\n\n - \`\`\`[   ]\`\`\` -`
leave = `\`\`\`Sayonaraa @${num.split('@')[0]}\`\`\``

teks = `${join}`
	    if (!isWelcome) return
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await ikyy.getProfilePicture(mem)
                } catch  {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
                pp_grup = await ikyy.getProfilePicture(anu.jid)
                } catch  {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (anu.action == 'add' && mem.includes(ikyy.user.jid)) {
            ikyy.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot Ketik !menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(ikyy.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await ikyy.groupMetadata(anu.jid)
           
                memeg = mdata.participants.length
                let v = ikyy.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
            buff = await getBuffer(pp_user)
            //buff = await getBuffer(`https://api.lolhuman.xyz/api/base/welcome?apikey=${setting.lolkey}&img1=${pp_user}&img2=${pp_grup}&background=https://telegra.ph/file/559d40a73f54e257b0b2e.jpg&username=${encodeURI(anu_user)}&member=${memeg}&groupname= ${encodeURI(mdata.subject)}`)
       // buttons = [

         // { buttonId: `!selamatdatang`, buttonText: { displayText: "Welcome👋" }, type: 1 },

      //  ];

      // imageMsg = (
           await ikyy.sendMessage(anu.jid, { contentText: `${teks}`,
                     footerText: '@ I Z U M I  B O T Z',
                      buttons: [{ buttonId: '!selamatdatang',buttonText: { displayText: 'WELCOME👋👋' }, type: 1 },
                       { buttonId: '!rulesgc', buttonText: { displayText: 'RULES BOT' }, type: 1 }], 
                       headerType: 'LOCATION', 
                       locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {mentionedJid: [num]}}}, 'buttonsMessage')
      
          /*await ikyy.prepareMessageMedia(buff, "imageMessage", {

            thumbnail: buff,

          })

        ).imageMessage;

        buttonsMessage = {

          contentText: `${teks}`,

          footerText: "@ I Z U M I  B O T",

          imageMessage: imageMsg,

          buttons: buttons,

          headerType: 4,

        };*/

       /* prep = await ikyy.prepareMessageFromContent(

          mdata.id,

          { buttonsMessage },

          {}

        );

        ikyy.relayWAMessage(prep);*/

      } 
/*> let tod = fs.readFileSync('./media/Nakano.jpg')
                    ikyy.sendMessage(from, { contentText: [sender],
                     footerText: 'iky gans',
                      buttons: [{ buttonId: !command,
                       buttonText: { displayText: 'LIST' }, type: 1 },
                       { buttonId: !menu, buttonText: { displayText: 'Tes' }, type: 1 }], 
                       headerType: 'LOCATION', 
                       locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tod, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage', { quoted: freply})*/
      if (anu.action == "remove" && !mem.includes(ikyy.user.jid)) {

        mdata = await ikyy.groupMetadata(anu.jid);

        num = anu.participants[0];

        let w = ikyy.contacts[num] || { notify: num.replace(/@.+/, "") };

        anu_user = w.vname || w.notify || num.split("@")[0];

        memeg = mdata.participants.length;

        out = `${leave}`;
                buff = await getBuffer(pp_user)
 await ikyy.sendMessage(anu.jid, { contentText: `${out}`,
                     footerText: '@ I Z U M I  B O T Z',
                      buttons: [{ buttonId: '!ara',buttonText: { displayText: 'Sayonaraa👋👋' }, type: 1 },
                       { buttonId: '!welcome disable', buttonText: { displayText: 'Disable Welcome' }, type: 1 }], 
                       headerType: 'LOCATION', 
                       locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {mentionedJid: [num]}}}, 'buttonsMessage')
      
         
       // buff = await getBuffer(`https://api.lolhuman.xyz/api/base/welcome?apikey=${setting.lolkey}&img1=${pp_user}&img2=${pp_grup}&background=https://telegra.ph/file/559d40a73f54e257b0b2e.jpg&username=${encodeURI(anu_user)}&member=${memeg}&groupname= ${encodeURI(mdata.subject)}`)
            
       // buttons = [

         // { buttonId: `!bay`, buttonText: { displayText: "Sayonara👋" }, type: 1 },];

       /* imageMsg = (

          await ikyy.prepareMessageMedia(buff, "imageMessage", {

            thumbnail: buff,

          })

        ).imageMessage;

        buttonsMessage = {

          contentText: `${out}`,

          footerText: "@ I Z U M I  B O T",

          imageMessage: imageMsg,

          buttons: buttons,

          headerType: 4,

        };*/

      /*  prep = await ikyy.prepareMessageFromContent(

          mdata.id,

          { buttonsMessage },

          {}

        );

        ikyy.relayWAMessage(prep); */
        }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
