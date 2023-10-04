const { tlang,cmd } = require('../lib')

const Config = require('../config')

const axios = require('axios')



const url = 'https://gist.github.com/QUEENNICKYMDv1/c86f09b4862e72d5bda7110d4a39fb49/raw'



cmd({ on: "text" }, async (Void,citel,text,{isCreator})=> {

  let { data } = await axios.get(url)

  for (vr in data){

 if((new RegExp(`\\b${vr}\\b`,'gi')).test(citel.text)) return Void.sendMessage(citel.chat,{audio: { url : data[vr]},mimetype: 'audio/mpeg',ptt:true},{quoted:citel})   

}

})
