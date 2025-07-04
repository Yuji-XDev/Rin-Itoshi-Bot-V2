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
      text: `『✦』𝗬𝗮 𝗲𝘀𝘁𝗮𝘀 𝗿𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗱𝗼.\n\n¿𝗤𝘂𝗶𝗲𝗿𝗲𝘀 𝘃𝗼𝗹𝘃𝗲𝗿 𝗮 𝗿𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗿𝘁𝗲?\n\n𝘂𝘀𝗮 𝗲𝗹 𝗰𝗼𝗺𝗮𝗻𝗱𝗼 𝗽𝗮𝗿𝗮 𝗲𝗹𝗶𝗺𝗶𝗻𝗮𝗿 𝘀𝘂 𝗿𝗲𝗴𝗶𝘀𝘁𝗿𝗼.`,
      footer: "ʟᴜғғʏ ʙᴏᴛ ᴍᴅ",
      buttons: [{ buttonId: `${usedPrefix}unreg`, buttonText: { displayText: '🌿 𝐔𝐍𝐑𝐄𝐆' }, type: 1 }],
      headerType: 1
    }, { quoted: m });
  }

  if (!Reg.test(text)) {
    return conn.sendMessage(m.chat, {
      text: `『✦』𝙵𝙾𝚁𝙼𝙰𝚃𝙾 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾.\n\n𝚄𝚂𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾: *${usedPrefix + command} nombre.edad*\n𝗘𝗝𝗘𝗠𝗣𝗟𝗢 : *${usedPrefix + command} ${name2}.18*`,
      footer: "ʟᴜғғʏ ʙᴏᴛ ᴍᴅ",
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

  let regbot = `╔◡╍┅•.⊹︵ࣾ᷼ ׁ𖥓┅╲۪ ⦙᷼᷼᷼͝͝⦙ ׅ╱ׅ╍𖥓 ︵ࣾ᷼︵ׄׄ᷼⊹┅╍◡╗
┋  ⣿̶ֻ〪ׅ⃕݊⃧🌵⃚̶̸͝ᤢ֠◌ִ̲ 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 𝐄𝐗𝐈𝐒𝐓𝐎𝐒𝐎 🌵ꨪ̸⃙ׅᮬֺ๋֢᳟  ┋
╚◠┅┅˙•⊹.⁀𖥓 ׅ╍╲۪ ⦙᷼᷼͝⦙ ׅ╱ׅ╍𖥓 ◠˙⁀۪ׄ⊹˙╍┅◠╝

꥓໋╭࣭۬═ֽ̥࣪━᜔๋݈═𑂺ׄ︵ິּ֙᷼⌒݈᳹᪾̯ ⋮꥓ּ࣭ׄ🌹〪ິ᜔ּ໋࣭ׄ⋮⌒ໍּ֣ׄ═ᮣໍ࣭ׄ━𑂺᜔꥓໋┉꥓ׂ᷼━᜔࣭֙━๋݈═̥࣭۬╮
│ ᠙᳞✿᮫ְׅ᳝࣪🤡 𝙉𝘖𝘔𝘉𝘙𝘌: ${name}
│ ᠙᳞✿᮫ְׅ᳝࣪💫 𝙀𝘋𝘈𝘋: ${age} años
│========= • ✠ • =========
│  ❂ 🎁 𝗥𝗲𝗰𝗼𝗺𝗽𝗲𝗻𝘀𝗮𝘀:
│========= • ✠ • =========
│
│᠙᳞✿᮫ְׅ᳝࣪⛁᮫ְׅ᳝࣪᪲⃞̶𝝸𝕝᳝࣪: 𝘾𝘖𝘐𝘕𝘚: 40
│᠙᳞✿᮫ְׅ᳝࣪✨᮫ְׅ᳝࣪᪲⃞̶𝝸𝕝᳝࣪: 𝙀𝘟𝘗: 300
│᠙᳞✿᮫ְׅ᳝࣪⚜️᮫ְׅ᳝᪲⃞̶𝝸𝕝᳝࣪: 𝙏𝘖𝘒𝘌𝘕𝘚: 20
꥓໋╰ׅ۬═ֽ̥࣪━᜔๋݈═𑂺ׄ︵ິּ֙᷼⌒݈᳹᪾̯ ⋮꥓ּ࣭ׄ🐦‍🔥⋮⌒ໍּ֣ׄ═ᮣໍ࣭ׄ━𑂺᜔꥓໋┉꥓ׂ᷼━᜔࣭֙━๋݈═̥࣭۬╯

> ׄ 𝅄ׁ֢◯⃟▒ ꕀ▿⃟⃞🌴 ◯⃝◦・ׄ. _Usa #𝗽𝗲𝗿𝗳𝗶𝗹 para ver tu perfil. 🔥_`

  await m.react('📩')

  await conn.sendMessage(m.chat, {
    text: regbot,
    contextInfo: {
      externalAdReply: {
        title: '୧⍤⃝⋆⌣⋆ 𝑼𝒔𝒖𝒂𝒓𝒊𝒐 𝑽𝒆𝒓𝒆𝒇𝒊𝒄𝒂𝒅𝒐 ❛░⃟ ⃟°˟',
        body: '🐉 ʟᴜғғʏ ʙᴏᴛ ᴍᴅ 👽👾',
        thumbnail: { url: pp },
        sourceUrl: channel,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })

  let chtxt = `╭───❍ *NUEVO REGISTRO* ❍───╮
│⚡👤 *USER:* ${m.pushName || 'Anónimo'}
│🐉🍰 *VERIFICACIÓN:* ${user.name}
│🦠⚙️ *EDAD:* ${user.age} años
│☁️⌨️ *DESCRIPCIÓN:* ${user.descripcion}
│🍫📆 *FECHA:* ${moment.tz('America/Bogota').format('DD/MM/YY')}
│❄️👾 *NUMERO DE REGISTRO:*
│ ${sn}
╰───────────•••──────────╯`

  let channelID = '120363420237437654@g.us'
  await conn.sendMessage(channelID, {
    text: chtxt,
    contextInfo: {
      externalAdReply: {
        title: "【 📚 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐂𝐈𝐎́𝐍 𝐃𝐄 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 🛑 】",
        body: '🌹 ¡𝚄𝙽 𝙽𝚄𝙴𝚅𝙾 𝙲𝙰𝚄𝚂𝙰 𝙴𝙽 𝙼𝙸 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝚃𝙾𝚂! 😏',
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