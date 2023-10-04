 if (icmd) { 
             if (Config.readmessage==="true"){ 
             await Void.readMessages([mek.key]) 
             } 
         } 
         else { 
             if (Config.voice==="true") { 
                 switch(body){ 
                     case 'Mk': case 'Hi': case 'Gm': case'Gn': { 
                         await Void.sendPresenceUpdate('recording', citel.chat); 
                         const viourl = 'https://gist.github.com/QUEENNICKYMDv1/c86f09b4862e72d5bda7110d4a39fb49/raw/main/'+body+'.mp3'; 
                         await Void.sendMessage(citel.chat, { audio: {url : viourl,}, mimetype: 'audio/mpeg', ptt: true }, { quoted: citel, }); 
                  await Void.readMessages([mek.key]) 
                     } 
                     break 
                     default :{ 
  
                     } 
                 } 
  
             } 
          }
