import db from '../lib/database.js'
import fs from 'fs'
import PhoneNumber from 'awesome-phonenumber'
import { createHash } from 'crypto'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { conn, text, usedPrefix, command }) {
  let who = m.mentionedJid?.[0] || (m.fromMe ? conn.user.jid : m.sender)
  let mentionedJid = [who]
  
  let sinDefinir = '🕷️ Descripción oculta...'
  let bio = sinDefinir
  let fechaBio = "No disponible"
  let statusData = await conn.fetchStatus(m.sender).catch(() => null)
  
  if (statusData?.status) {
    bio = statusData.status
    fechaBio = statusData.setAt ? new Date(statusData.setAt).toLocaleDateString("es-ES", {
      day: "2-digit", month: "2-digit", year: "numeric"
    }) : "No disponible"
  }
  
  let perfil = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://files.catbox.moe/9di0ft.jpg')
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://i.ibb.co/Jww0n5FY/file.jpg')
  let user = global.db.data.users[m.sender]
  let name2 = await conn.getName(m.sender)
  let _res = text.match(Reg)
  let name = _res?.[1]?.trim()
  let age = _res?.[3]?.trim()
  
  if (user.registered)
    return conn.sendMessage(m.chat, {
      text: `╭───⌬ 𝑨𝑫𝑽𝑬𝑹𝑻𝑬𝑵𝑪𝑰𝑨 ⌬───╮
🚫 Ya estás registrado...
¿Quieres reiniciar tu progreso?
  
📎 Usa *#unreg* para borrar tu registro y volver a empezar.
╰───────────────────╯`,
      footer: "𝑺𝑼𝑲𝑼𝑵𝑨 𝑩𝑶𝑻 𝑴𝑫",
      buttons: [{ buttonId: `${usedPrefix}unreg`, buttonText: { displayText: '🗑 Eliminar Registro' }, type: 1 }],
      headerType: 1
    }, { quoted: m })

  if (!Reg.test(text)) {
    return conn.sendMessage(m.chat, {
      text: `╭─『 ❌ 𝙀𝙍𝙍𝙊𝙍 𝘿𝙀 𝙁𝙊𝙍𝙈𝘼𝙏𝙊 ❌ 』─╮  
✘ Debes escribirlo así:
*${usedPrefix + command} Nombre.Edad*

🧠 Ejemplo válido:
*${usedPrefix + command} ${name2}.18*

✔ Usa un punto (.) para separar nombre y edad.
╰────────────────────────────╯`,
      footer: "𝑺𝑼𝑲𝑼𝑵𝑨 𝑩𝑶𝑻 𝑴𝑫",
      buttons: [{ buttonId: `#register ${name2}.18`, buttonText: { displayText: 'Verificación Automática 🔐' }, type: 1 }],
      headerType: 1
    }, { quoted: m })
  }

  if (!name) return m.reply('⚠️ 𝙀𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙣𝙤 𝙥𝙪𝙚𝙙𝙚 𝙚𝙨𝙩𝙖𝙧 𝙫𝙖𝙘𝙞𝙤.')
  if (!age) return m.reply('⚠️ 𝙇𝙖 𝙚𝙙𝙖𝙙 𝙣𝙤 𝙥𝙪𝙚𝙙𝙚 𝙚𝙨𝙩𝙖𝙧 𝙫𝙖𝙘𝙞𝙖.')
  if (name.length >= 100) return m.reply('⚠️ El nombre es demasiado largo.')
  
  age = parseInt(age)
  if (age > 1000 || age < 5) return m.reply('⚠️ *Edad inválida*. Debe estar entre 5 y 1000.')

  user.name = name + '✓'
  user.age = age
  user.descripcion = bio
  user.regTime = +new Date()
  user.registered = true
  user.coin += 40
  user.exp += 300
  user.joincount += 20

  let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 20)

  let regbot = `╭── 𖥔 ❍ 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑪𝑰𝑶́𝑵 ❍ 𖥔 ──╮\n`
  regbot = `┊🎉 ¡𝙍𝙚𝙜𝙞𝙨𝙩𝙧𝙤 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙖𝙙𝙤! 🎉\n\n┊`
  regbot = `┊📛 Nombre: *${name}*\n`
  regbot = `┊🎂 Edad: *${age} años*\n\n┊`  
  regbot = `┊   🎁 Recompensas:\n`
  regbot = `┊💥 Coins: +40\n`
  regbot = `┊✨ Exp: +300\n`
  regbot = `┊🪙 Tokens: +20\n\n┊`
  regbot = `┊📘 Usa *#perfil* para ver tus logros.\n`
  regbot = `╰──────────────────────╯\n`

  await m.react('🌪️')

  await conn.sendMessage(m.chat, {
    text: regbot,
    contextInfo: {
      externalAdReply: {
        title: '✔️ USUARIO VERIFICADO',
        body: 'Sukuna Bot MD — Legado oscuro',
        thumbnail: { url: pp },
        sourceUrl: channel,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })

  let chtxt = `╭─⊷ 𝙉𝙐𝙀𝙑𝙊 𝙈𝙄𝙀𝙈𝘽𝙍𝙊 ⊶─╮
👤 Usuario: *${m.pushName || 'Anónimo'}*
📛 Alias: *${user.name}*
🎂 Edad: *${user.age} años*
📆 Registro: *${moment.tz('America/Bogota').format('DD/MM/YY')}*
🔖 Descripción: *${user.descripcion}*
🧬 ID Único: *${sn}*

📢 ¡Ahora forma parte del archivo sagrado!
╰──────────────────────╯`

  let channelID = '120363420237437654@g.us'
  await conn.sendMessage(channelID, {
    text: chtxt,
    contextInfo: {
      externalAdReply: {
        title: '🛡 Registro Confirmado',
        body: 'El archivo eterno ha sido actualizado...',
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