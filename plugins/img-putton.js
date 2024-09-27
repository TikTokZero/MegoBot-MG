//بابلو بيحبكم 🤭❤️
//اهينك اذا تغير المصدر
//قناه المصدر
//https://whatsapp.com/channel/0029VapvokVCHDyj6inRiP3T

import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `️ *${usedPrefix + command} سوكونا*`
const prohibited = ['نيك', 'بنات', 'بز', 'سكس' ,'كس']
if (prohibited.some(word => m.text.toLowerCase().includes(word))) return m.reply('يلا يمتناك ينجس من هنا الصور محظورة 😂 والله لاقول لبابلو المطور بتاعي🥲)      
try {
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendButton(m.chat, `الصوره المطلوبه : ${text}`, wm, link, [['صوره كمان', `/صوره ${text}`]], null, null, m,)

} catch (e) {
console.log(`error`)
console.log(e)
handler.money = false
}}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(صوره|صورة|img)$/i
handler.money = 50
export default handler
