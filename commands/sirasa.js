const { tlang, botpic, cmd, prefix, } = require('../lib')
const axios = require('axios')

//---------------------------------------------------------------------------
cmd({
        pattern: "sirasa",
        alias: ["sirasanewd", "sn", "sirasa news"],
        desc: "Sends info about repo.",
        category: "general",
        react: "🗞️",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://gist.githubusercontent.com/X-Notiya/a7d8a39e82fc93c800d1043c200f3144/raw/a52e01c01a4e6ce0c1656a0d9aa0e9eff2a54f6a/DarkQueen-Sirasanews.txt')
        let cap = `
ᴛɪᴛʟᴇ: ${title}
ᴅᴀᴛᴇ ᴀɴ ᴛɪᴍᴇ ${dateandtime}
ʟɪɴᴋ: ${link}
ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ: ${description}

💃 *_Qᴜᴇᴇɴ ɴɪᴄᴋʏ ᴍᴅ_*💃
🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴜᴍɪᴅᴜ_*🎭
`
        let buttonMessaged = {
            image: {url: image},
            caption: cap,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "QUEEN NICKY SIRASA NEWS",
                    body: "© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴛᴇᴀᴍ",
                    thumbnail: log0,
                    mediaType: 4,
                    mediaUrl: '',
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
