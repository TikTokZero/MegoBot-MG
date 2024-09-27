import { WAMessageStubType } from '@adiwajshing/baileys'

export async function before(m, { conn }) {
  if (!m.messageStubType || !m.isGroup) return
  let usuario = `@${m.sender.split`@`[0]}`
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  //let pp = gataMenu.getRandom()
 //   let apii = await this.getFile(pp)
  if (m.messageStubType == 21) {
    await this.sendMessage(m.chat, { text: `${usuario} اسم جديد للروم:\n\n*${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak }) 
  } else if (m.messageStubType == 22) {
    await this.sendMessage(m.chat, { text: `${usuario} صورة جديدة للروم`, mentions: [m.sender] }, { quoted: fkontak }) 
  } else if (m.messageStubType == 24) {
    await this.sendMessage(m.chat, { text: `${usuario} وصف جيد للروم:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak })
  } else if (m.messageStubType == 25) {
    await this.sendMessage(m.chat, { text: `🔒 حاليا *${m.messageStubParameters[0] == 'on' ? 'الادمن بس' : 'الجميع'}* يمكنكم تعديل معلومات المجموعة.`, mentions: [m.sender] }, { quoted: fkontak })
  } else if (m.messageStubType == 26) {
    await this.sendMessage(m.chat, { text: `الروم *${m.messageStubParameters[0] == 'on' ? 'مقفول 🔒' : 'مفتوح 🔓'}*\n ${m.messageStubParameters[0] == 'on' ? 'الادمن بس' : 'يلا'} انتشرو.`, mentions: [m.sender] }, { quoted: fkontak })
  /* } else if (m.messageStubType == 28) {
   conn.sendMessage(m.chat, { text: `${usuario} ELIMINO A @${m.messageStubParameters[0].split`@`[0]} 🫵`, mentions: [m.sender]}, { quoted: fkontak })  */
  } else if (m.messageStubType == 29) {
    await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} *لقد اصبحت زعيما*\n\n*ال ضافك ادمن*: ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })
  } else if (m.messageStubType == 30) {
    await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} *لم تعد زعيما تبأ لك كنت ادمن فاشلا يابن الوسخة 😂🥲*\n\n*ال شالك من  الادمن*: ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: fkontak })
  } else if (m.messageStubType == 72) {
    await this.sendMessage(m.chat, { text: `${usuario} لقد غيرت مدة الرسائل المؤقتة إلى*@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })
  } else if (m.messageStubType == 123) {
    await this.sendMessage(m.chat, { text: `${usuario} تعطيل  *الرسائل* المؤقتة..`, mentions: [m.sender] }, { quoted: fkontak })
  } else {
    console.log({
      messageStubType: m.messageStubType,
      messageStubParameters: m.messageStubParameters,
      type: WAMessageStubType[m.messageStubType], 
    });
  }
}
