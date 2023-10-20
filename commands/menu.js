𝚊
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
cmd({
            pattern: "1",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu.*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝙳𝙾𝚆𝙽𝙻𝙾𝙳𝙴𝚁 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑🧜‍♂️⃟➤ᴅᴏᴡɴᴀᴘᴋ
┃ ├❑🧜‍♂️⃟➤ɪᴏꜱ
┃ ├❑🧜‍♂️⃟➤ɴᴀꜱᴀ
┃ ├❑🧜‍♂️⃟➤ᴡᴀʙᴇᴛᴀ
┃ ├❑🧜‍♂️⃟➤ᴛᴛꜱ
┃ ├❑🧜‍♂️⃟➤ʏᴛꜱ
┃ ├❑🧜‍♂️⃟➤ᴠɪᴅᴇᴏ
┃ ├❑🧜‍♂️⃟➤ᴘʟᴀʏ
┃ ├❑🧜‍♂️⃟➤ʀɪɴɢᴛᴏɴᴇ
┃ ├❑🧜‍♂️⃟➤ᴘɪɴᴛ
┃ ├❑🧜‍♂️⃟➤ᴍᴇᴅɪᴀꜰɪʀᴇ
┃ ├❑🧜‍♂️⃟➤ʏᴛᴍᴘ4
┃ ├❑🧜‍♂️⃟➤ʏᴛᴍᴘ3
┃ ├❑🧜‍♂️⃟➤ʏᴛᴅᴏᴄ
┃ ├❑🧜‍♂️⃟➤ꜱꜱ
┃ ├❑🧜‍♂️⃟➤ꜰʙ
┃ ├❑🧜‍♂️⃟➤ᴛɪᴋᴛᴏᴋ
┃ ├❑🧜‍♂️⃟➤ᴛᴠɪᴅᴇᴏ
┃ ├❑🧜‍♂️⃟➤ꜰʙꜱ
┃ ├❑🧜‍♂️⃟➤ᴅᴀᴅᴜ
┃ ├❑🧜‍♂️⃟➤ᴛᴛᴘ
┃ ├❑🧜‍♂️⃟➤ᴠɪᴅᴇᴏ3
┃ ├❑🧜‍♂️⃟➤ᴛᴇꜱᴛꜱᴏɴɢ
┃ ├❑🧜‍♂️⃟➤ᴀᴛᴛᴘ
┃ ├❑🧜‍♂️⃟➤ᴛɪᴋᴛᴏᴋ
┃ ├❑🧜‍♂️⃟➤ᴘʟᴀʏʟɪꜱᴛ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🧙‍♂️ *_Qᴜᴇᴇɴ ɴɪᴄᴋʏ ᴍᴅ_*
👩‍💻 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴜᴍɪᴅᴜ_*
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
cmd({
            pattern: "2",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Mr.Hansamala.*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙶𝙴𝙽𝙴𝚁𝙰𝙻 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑🐉⃟➤ ʟɪꜱᴛ
┃ ├❑🐉⃟➤ᴏᴡɴᴇʀ
┃ ├❑🐉⃟➤ꜰɪʟᴇ
┃ ├❑🐉⃟➤ᴄʜᴀᴛɢᴘᴛ
┃ ├❑🐉⃟➤ʀᴇᴘᴏ
┃ ├❑🐉⃟➤ꜱᴛᴀᴛᴜꜱ
┃ ├❑🐉⃟➤ᴛʜᴇᴍᴇ
┃ ├❑🐉⃟➤ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
┃ ├❑🐉⃟➤ᴘɪɴɢ
┃ ├❑🐉⃟➤ꜱɪʀᴀꜱᴀ
┃ ├❑🐉⃟➤ᴀʟɪᴠᴇ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
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
cmd({
            pattern: "3",
            react: "✅",
            category: "general",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu*`
            const alivtxt = `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ *𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙶𝚁𝙾𝚄𝙿 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂*
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├❑🧞‍♀️⃟➤ꜱᴛɪᴄᴋᴇʀ
┃ ├❑🧞‍♀️⃟➤ꜱᴜᴘᴘᴏʀᴛ
┃ ├❑🧞‍♀️⃟➤ᴡᴀʀɴ
┃ ├❑🧞‍♀️⃟➤ᴛᴀɢᴀʟʟ
┃ ├❑🧞‍♀️⃟➤ʀᴇϙᴜᴇꜱᴛ
┃ ├❑🧞‍♀️⃟➤ʀᴇᴛʀɪᴠᴇ
┃ ├❑🧞‍♀️⃟➤ʀᴡᴀʀɴ
┃ ├❑🧞‍♀️⃟➤ᴘᴏʟʟ
┃ ├❑🧞‍♀️⃟➤ᴘʀᴏꜰɪʟᴇ
┃ ├❑🧞‍♀️⃟➤ʀᴀɴᴋ
┃ ├❑🧞‍♀️⃟➤ᴘʀᴏᴍᴏᴛᴇ
┃ ├❑🧞‍♀️⃟➤ᴋɪᴄᴋ
┃ ├❑🧞‍♀️⃟➤ᴍᴇᴍᴇɢᴇɴ
┃ ├❑🧞‍♀️⃟➤ɢʀᴏᴜᴘ
┃ ├❑🧞‍♀️⃟➤ɢʀᴏᴜᴘᴘɪᴄ
┃ ├❑🧞‍♀️⃟➤ʜɪᴅᴇᴛᴀɢ
┃ ├❑🧞‍♀️⃟➤ᴀᴅᴅ
┃ ├❑🧞‍♀️⃟➤ɢᴇᴛᴊɪᴅꜱ
┃ ├❑🧞‍♀️⃟➤ᴅᴇᴍᴏᴛᴇ
┃ ├❑🧞‍♀️⃟➤ᴅᴇʟ
┃ ├❑🧞‍♀️⃟➤ᴄʜᴇᴄᴋᴡᴀʀɴ
┃ ├❑🧞‍♀️⃟➤ᴀɴᴛɪʟɪɴᴋ
┃ ├❑🧞‍♀️⃟➤ᴏɴʟʏᴀᴅᴍɪɴ
┃ ├❑🧞‍♀️⃟➤ᴀɴᴛɪʙᴏᴛ
┃ ├❑🧞‍♀️⃟➤ᴅɪꜱᴀʙʟᴇ
┃ ├❑🧞‍♀️⃟➤ᴇɴᴀʙʟᴇ
┃ ├❑🧞‍♀️⃟➤ᴀɴᴛɪꜰᴀᴋᴇ
┃ ├❑🧞‍♀️⃟➤ᴀɴᴛɪᴅᴇᴍᴏᴛᴇ
┃ ├❑🧞‍♀️⃟➤ᴀɴᴛɪᴘʀᴏᴍᴏᴛᴇ
┃ ├❑🧞‍♀️⃟➤ᴘᴅᴍ
┃ ├❑🧞‍♀️⃟➤ᴀɴᴛɪʟɪɴᴋ
┃ ├❑🧞‍♀️⃟➤ ᴀᴄᴛ
┃ ├❑🧞‍♀️⃟➤ ᴅᴇᴀᴄᴛ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
*🧙‍♂️ 𝚀𝚄𝙴𝙴𝙽 𝙽𝙸𝙲𝙺𝚈 𝙼𝙳*.
👩‍💻 _𝙲𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝙳𝚄𝙼𝙸𝙳𝚄_
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
