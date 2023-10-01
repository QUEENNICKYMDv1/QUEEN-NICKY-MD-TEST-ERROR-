 const {cmd } = require('../lib')
const sirasanews = require('sirasa-news')
cmd({
        pattern: "sirasa",
        category: "news",
        react: "🗞️",

        filename: __filename
    },
    async(Void, citel,text) => {
    const sirasa = await sirasanews()
    const caption = `QUEEN NICKY SIRASA NEWS
    
Title: ${sirasa.result.title}

Date  and Time : ${sirasa.result.dateandtime}

Description: ${sirasa.result.description}

Link: ${sirasa.result.link}`

await Void.sendMessage(citel.chat, { image: { url: sirasa.result.image }, caption: caption }, { quoted: citel })

    })
