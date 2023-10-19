
const { addnote,cmd, sck1, delnote, allnotes, delallnote, tlang, botpic, runtime, prefix, Config } = require('../lib')

cmd({
            pattern: "menu",
            category: "menu1",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu.*`
            const alivtxt = `
❍═════════════════════❍
    *_𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙴𝙽𝚄 𝙻𝙸𝚂𝚃_*
   ✦╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦

┏⃞❑✷▎🎋⃟🥷➥.1 *ᴅᴏᴡɴʟᴏᴅᴇʀ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.2 *ɢᴇɴᴇʀᴀʟ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.3 *ɢʀᴏᴜᴘ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.4 *ᴛᴇxᴛᴘʀᴏ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.5 *ᴄᴏɴᴠᴇʀᴛᴇʀ ᴍᴇɴᴜ*
┃
┣⃞⃟❑✷▎🎋⃟🥷➥.6 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.7 *ɴᴇᴡꜱ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.8 *ɢᴀᴍᴇ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.9 *ᴀᴜᴅɪᴏ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.10 *ꜱᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ*
┃
┣⃞❑⃟✷▎🎋⃟🥷➥.11 *ᴀʟʟ ᴍᴇɴᴜ*
┃
┣⃞⃟❑✷▎🎋⃟🥷➥.12 *ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.13 *ɴꜱꜰᴡ ᴍᴇɴᴜ*
┃
┣❑ ⃟✷🎋⃟🥷➥.14 *ʀᴇᴀᴄᴛɪᴏɴ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.15 *ᴍᴏᴅᴇʀᴀᴛɪᴏɴ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.16 *ɢᴇɴ ᴍᴇɴᴜ*
┃
┣⃞❑✷▎🎋⃟🥷➥.17 *ᴡᴇᴇʙ ᴍᴇɴᴜ*
┃
┗⃞❑✷▎🎋⃟🥷➥.18 *ᴍɪꜱᴄ ᴍᴇɴᴜ*
❍═════════════════════❍
🧙‍♂️  *_Qᴜᴇᴇɴ ɴɪᴄᴋʏ ᴍᴅ_*
👩‍💻   *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴜᴍɪᴅᴜ_*
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
