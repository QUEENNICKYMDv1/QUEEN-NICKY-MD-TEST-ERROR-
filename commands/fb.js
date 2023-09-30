const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");

const { fetchJson, cmd, citel, Config, tlang } = require('../lib')

cmd({

            pattern: "fb",

            desc: "fb down",

            react: "🧩",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const fbdl = await fetchJson(`https://kaveesha-sithum-api.cyclic.cloud/fbdl?url=${text}`)

const videolink = fbdl.result[0].url[0].url

            citel.reply (`*Hello ${citel.pushName} I Am Finding Your Facebook Video*`);

       Void.sendMessage(citel.chat, {

                video: {

                    url: videolink ,

                },

                caption: tlang().footer,

            }, {

                quoted: citel,

            });

 }

)
