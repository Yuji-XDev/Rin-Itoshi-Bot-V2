import db from '../lib/database.js'
import fs from 'fs'
import PhoneNumber from 'awesome-phonenumber'
import { createHash } from 'crypto'  
import fetch from 'node-fetch'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { conn, text, usedPrefix, command }) {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let mentionedJid = [who]
  let pp = await conn.profilePictureUrl(who, 'image').catch((_) => 'https://files.catbox.moe/xr2m6u.jpg')
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) return m.reply(`➤ ⌬ \`ＡＶＩＳＯ\` ⌬
🚫 Ya estás registrado...
¿Quieres reiniciar tu progreso?
  
⛩️ Usa *#unreg* para borrar tu registro y volver a empezar.`)
  if (!Reg.test(text)) return m.reply(`╭❌ 𝙀𝙍𝙍𝙊𝙍 𝘿𝙀 𝙁𝙊𝙍𝙈𝘼𝙏𝙊 ❌
☄️ Debes escribirlo así:
*${usedPrefix + command} Nombre.Edad*

💥 Ejemplo válido:
*${usedPrefix + command} ${name2}.18*`)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) return m.reply(`*『✦』El nombre no puede estar vacío.*`)
  if (!age) return m.reply(`*『✦』La edad no puede estar vacía.*`)
  if (name.length >= 100) return m.reply(`*『✦』El nombre es demasiado largo.*`)
  age = parseInt(age)
  if (age > 1000) return m.reply(`*『✦』Wow el abuelo quiere jugar al bot.*`)
  if (age < 5) return m.reply(`*『✦』hay un abuelo bebé jsjsj.*`)
  user.name = name + '✓'.trim()
  user.age = age
  user.regTime = + new Date      
  user.registered = true
  global.db.data.users[m.sender].coin += 40
  global.db.data.users[m.sender].exp += 300
  global.db.data.users[m.sender].joincount += 20
  let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 20)
let regbot += `╭𖥔 ❍ 𝗥 𝗘 𝗚 𝗜 𝗦 𝗧 𝗥 𝗔 𝗗 𝗢 ❍ 𖥔╮\n`
regbot += `┊🎉 ¡𝙍𝙚𝙜𝙞𝙨𝙩𝙧𝙤 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙖𝙙𝙤! 🎉\n`
regbot += `┊\n`
regbot += `┊☆ 📛 \`Nombre:\` *${name}*\n`
regbot += `┊☆ 🌪️ \`Edad:\` *${age} años*\n`
regbot += `┊\n`
regbot += `┊ 🎁 ＲＥＣＯＭＰＥＮＳＡＳ:\n`
regbot += `┊☆ 💥 \`Coins:\` +40\n`
regbot += `┊☆ ✨ \`Exp:\` +300\n`
regbot += `┊☆ 🪙 \`Tokens:\` +20\n`
regbot += `╰──────────────────────╯\n`
regbot += `> ⛩️ ${dev}`
await m.react('📩')

await conn.sendMessage(m.chat, {
        text: regbot,
        contextInfo: {
            externalAdReply: {
                title: 'ּ໋۪֔⛩️⣴ ⵿ּׄ🫧 ⃝̸̶⵿ᩫᰰᮬ 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 𝐕𝐄𝐑𝐈𝐅𝐈𝐂𝐀𝐃𝐎🎄᮫๋໋֢᳝ꨪᰰ⃟ુ᭡̵໋࡙ᮬ',
                body: ' . ݁ ּ ּ۪ ࣭֔𔓕⃘᜔𑵅᮫ּ߲֧߲۪۪〫֔࠭🌧️ꨩּֽ֪۪۪〫ࣳׄ꩖ּ߲߲֧۪۪߲߲࣪𝐁𝐲: 𓆩𝑺𝒉𝒂֟፝𝑫𝒐𝒘•𝒄𝒐𝒓𝒆𓆪',
                thumbnailUrl: pp,
                sourceUrl: channel,
                mediaType: 1,
                showAdAttribution: true,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });    
}; 
handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar'] 

export default handler
