const { tlang,cmd } = require('../lib')

const Config = require('../config')

const axios = require('axios')



const url = 'https://github.com/prabathLK/AUTO-VOICE-SENDER-PRABATH-MD-/blob/main/plugins/bgm/PTT-20230214-WA0029.mp3?raw=true'



cmd({ on: "text" }, async (Void,citel,text,{isCreator})=> {

  let { data } = await axios.get(url)

  for (vr in data){

 if((new RegExp(`\\b${vr}\\b`,'gi')).test(citel.text)) return Void.sendMessage(citel.chat,{audio: { url : data[vr]},mimetype: 'audio/mpeg',ptt:true},{quoted:citel})   

}

})
