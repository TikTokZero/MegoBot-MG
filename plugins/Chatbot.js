let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^بابلو$/i.test(m.text)) { 
 responses = [ 
 'قلبو 🧚‍♀️🐤💈'
 ]; 
 } else if (/^بوووت|بوووووووووت|بوت$/i.test(m.text)) { 
     responses = [ 
'اسمي بابلو يقلبي 😴    اامرني'
     ]; 
   } else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
 }else if (/^تست$/i.test(m.text)) { 
     responses = [ 
       'اهو عايش لسة ماموتش كلنا هنموت ياحبيبي😂',  
     ];
 }
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;
