import db from '../lib/database.js'
import fs from 'fs'
import PhoneNumber from 'awesome-phonenumber'
import { createHash } from 'crypto'  
import fetch from 'node-fetch'
import moment from 'moment-timezone'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { conn, text, usedPrefix, command }) {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let mentionedJid = [who]

  let sinDefinir = '🥳 Es privada'
  let bio = sinDefinir
  let fechaBio = "Fecha no disponible"
  let statusData = await conn.fetchStatus(m.sender).catch(() => null)

  if (statusData && statusData.status !== null) {
    bio = statusData.status || sinDefinir
    fechaBio = statusData.setAt ? new Date(statusData.setAt).toLocaleDateString("es-ES", {
      day: "2-digit", month: "2-digit", year: "numeric"
    }) : "Fecha no disponible"
  }

  let perfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://files.catbox.moe/9di0ft.jpg')
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://i.ibb.co/Jww0n5FY/file.jpg')

  let user = global.db.data.users[m.sender]
  let name2 = await conn.getName(m.sender)

  let _res = text.match(Reg)
  let name = _res?.[1]?.trim()
  let age = _res?.[3]?.trim()

  if (user.registered) {
    return conn.sendMessage(m.chat, {
      text: `ೋ🌸『 𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙊 𝘿𝙀𝙏𝙀𝘾𝙏𝘼𝘿𝙊 』🌸ೋ
『✦』✨ 𝚈𝚊 𝚎𝚜𝚝𝚊́𝚜 𝚛𝚎𝚐𝚒𝚜𝚝𝚛𝚊𝚍𝚘/a en mi sistema 💾

📝 ¿𝙌𝙪𝙞𝙚𝙧𝙚𝙨 𝙚𝙢𝙥𝙚𝙯𝙖𝙧 𝙙𝙚 𝙘𝙚𝙧𝙤?

🗑️ Usa el comando especial para *eliminar tu registro* y volver a registrarte 🧙‍♂️`,
      footer: "ʀɪɴ ɪᴛᴏsʜɪ ʙᴏᴛ ᴠ²",
      buttons: [{ buttonId: `${usedPrefix}unreg`, buttonText: { displayText: '🌿 𝐔𝐍𝐑𝐄𝐆' }, type: 1 }],
      headerType: 1
    }, { quoted: m });
  }

  if (!Reg.test(text)) {
    return conn.sendMessage(m.chat, {
      text: `╔═『📚✦ 𝙁𝙊𝙍𝙈𝘼𝙏𝙊 𝙄𝙉𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝙊 ✦📚』═╗

🚫 ¡Ups! Parece que escribiste mal el comando...

⭐ 𝙐𝙎𝙊 𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝙊:
*${usedPrefix + command} nombre.edad*

🧁 𝙀𝙅𝙀𝙈𝙋𝙇𝙊:
*${usedPrefix + command} ${name2}.18*

🥀 Usa un punto (.) para separar tu nombre y tu edad.
╚══════⊹🌷⊹═══════⊹🌷⊹══════╝`,
      footer: "ʀɪɴ ɪᴛᴏsʜɪ ʙᴏᴛ ᴠ2",
      buttons: [{ buttonId: `#register ${name2}.18`, buttonText: { displayText: '⋆🍓 𝐕𝐄𝐑𝐈𝐅𝐈𝐂𝐀𝐑' }, type: 1 }],
      headerType: 1
    }, { quoted: m });
  }

  if (!name) return m.reply(`『✦』𝑬𝒍 𝒏𝒐𝒎𝒃𝒓𝒆 𝒏𝒐 𝒑𝒖𝒆𝒅𝒆 𝒆𝒔𝒕𝒂𝒓 𝒗𝒂𝒄𝒊𝒐.`)
  if (!age) return m.reply(`『✦』𝑳𝒂 𝒆𝒅𝒂𝒅 𝒏𝒐 𝒑𝒖𝒆𝒅𝒆 𝒆𝒔𝒕𝒂𝒓 𝒗𝒂𝒄𝒊𝒂.`)
  if (name.length >= 100) return m.reply(`『✦』El nombre es demasiado largo.`)
  age = parseInt(age)
  if (age > 1000 || age < 5) return m.reply(`『✦』 *ʟᴀ ᴇᴅᴀᴅ ɪɴɢʀᴇsᴀᴅᴀ ᴇs ɪɴᴄᴏʀʀᴇᴄᴛᴀ*.`)

  user.name = name.trim() + '✓'
  user.age = age
  user.descripcion = bio
  user.regTime = +new Date()
  user.registered = true
  global.db.data.users[m.sender].coin += 40
  global.db.data.users[m.sender].exp += 300
  global.db.data.users[m.sender].joincount += 20

  let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 20)

  let regbot = `╭─╼⃝🦋⃟⃟𓂃 ִֶָ 𖥔﹏﹏﹏﹏﹏﹏𖥔 𖧧 🦋⃟⃝╾─╮  
🌟✨ 𝓤𝓷 𝓷𝓾𝓮𝓿𝓸 𝓮𝓼𝓽𝓮𝓵𝓪𝓻 𝓼𝓮 𝓾𝓷𝓮... ✨🌟  
   𓏲⋆🌸 ¡𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙊 𝙀𝙓𝙄𝙏𝙊𝙎𝙊! 🌸⋆𓏲  
╰─╼⃝🦋⃟⃟𖥔﹏﹏﹏﹏﹏﹏﹏﹏𖥔⃟🦋⃟⃝╾─╯  

🎈 𝓟𝓻𝓸𝓯𝓲𝓵 𝓭𝓮𝓼𝓫𝓵𝓸𝓺𝓾𝓮𝓪𝓭𝓸 🎄
┊💖 𝙉𝙊𝙈𝘽𝙍𝙀: *${name}*  
┊🍭 𝙀𝘿𝘼𝘿: *${age} años*

꒰ 🎁 𝑹𝑬𝑪𝑶𝑴𝑷𝑬𝑵𝑺𝑨𝑺 🎁 ꒱  
➤ 💎 𝗖𝗼𝗶𝗻𝘀: *40*  
➤ 📚 𝗘𝘅𝗽: *300*  
➤ 🪙 𝗧𝗼𝗸𝗲𝗻𝘀: *20*

💌 𝑻𝒊𝒑 𝒅𝒆𝒍 𝑹𝒆𝒊𝒏𝒐:  
╰➤ Usa *#perfil* para ver tu progreso y logros 🕊️🌷`

  await m.react('📩')

  await conn.sendMessage(m.chat, {
    text: regbot,
    contextInfo: {
      externalAdReply: {
        title: '୧⍤⃝⋆⌣⋆ 𝑼𝒔𝒖𝒂𝒓𝒊𝒐 𝑽𝒆𝒓𝒆𝒇𝒊𝒄𝒂𝒅𝒐 ❛░⃟ ⃟°˟',
        body: '🐉 ʀɪɴ ɪᴛᴏsʜɪ ʙᴏᴛ ᴠ⅔ 👽👾',
        thumbnail: { url: pp },
        sourceUrl: channel,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })

  let chtxt = `
╭───︶꒷꒦꒷˚ ༘ ₊⸝⸝˚ ꒰🌹꒱ ˚₊꒷︶───╮ 
│  🪄✨ 𝙉𝙐𝙀𝙑𝙊 𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙊 ✨🪄
╰───︶꒷꒦꒷˚ ༘ ₊⸝⸝˚ ꒰🕊️꒱ ˚₊꒷︶───╯

🧩 𝙄𝘿𝙀𝙉𝙏𝙄𝘿𝘼𝘿 𝙐́𝙉𝙄𝘾𝘼:
┊👤 𝙐𝙎𝙀𝙍: *${m.pushName || 'Anónimo'}*
┊📛 𝙑𝙀𝙍𝙄𝙁𝙄𝘾𝘼𝘿𝙊 𝘾𝙊𝙈𝙊: *${user.name}*

🔥 𝘿𝘼𝙏𝙊𝙎 𝘿𝙀 𝙄𝙉𝙂𝙍𝙀𝙎𝙊:
┊🎂 𝙀𝘿𝘼𝘿: *${user.age} años*
┊📝 𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊́𝙉: *${user.descripcion}*
┊📆 𝙁𝙀𝘾𝙃𝘼: *${moment.tz('America/Bogota').format('DD/MM/YY')}*
┊📄 𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙊 #: *${sn}*
┊⚔️ ¡Estás oficialmente en el juego!
╰─⊰ 🧿 Bienvenido al archivo sagrado ⊱─╯`

  let channelID = '120363420237437654@g.us'
  await conn.sendMessage(channelID, {
    text: chtxt,
    contextInfo: {
      externalAdReply: {
        title: "【 📚 📚 REGISTRO CONFIRMADO 🛑 】",
        body: '🔮 ¡Un nuevo alma ha sido marcada en el archivo eterno!',
        thumbnail: { url: perfil },
        sourceUrl: redes,
        mediaType: 1,
        showAdAttribution: false,
        renderLargerThumbnail: false
      }
    }
  }, { quoted: null })
}

handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar']

export default handler