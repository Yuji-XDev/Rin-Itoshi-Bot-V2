let handler = async (m, { conn, usedPrefix, command, args }) => {
let chat = global.db.data.chats[m.chat]
if (!(m.chat in global.db.data.chats)) {
return conn.reply(m.chat, `✧ ¡Este chat no está registrado!.`, m)
}
if (command === 'bot') {
if (args.length === 0) {
const estado = chat.isBanned ? '✗ Desactivado' : '✓ Activado'
const info = `╭━━━━━━━━━━━━━━━━━━━━━━━╮
┃     ⚙️ 𝗣𝗔𝗡𝗘𝗟 𝗗𝗘 𝗖𝗢𝗡𝗧𝗥𝗢𝗟
┃
┃ 🧩 *Solo los administradores pueden ejecutar estos comandos:*
┃
┣━━✦ *Comandos Disponibles* ✦━━
┃ 🟢 ${usedPrefix}bot on ➤ ᴀᴄᴛɪᴠᴀʀ
┃ 🔴 ${usedPrefix}bot off ➤ ᴅᴇꜱᴀᴄᴛɪᴠᴀʀ
┃
┣━━✦ *Estado Actual* ✦━━
┃ 📡 ${estado}
┃
╰━━━━━━━━━━━━━━━━━━━━━━━╯`
return conn.reply(m.chat, info, fkontak, rcanal);
  }
if (args[0] === 'off') {
if (chat.isBanned) {
return conn.reply(m.chat, `⭕ *SUKUNA YA ESTABA DESACTIVADO!.*`, m, rcanal);
}
chat.isBanned = true
return conn.reply(m.chat, `🏔️ *SUKUNA HA SIDO DESACTIVADO EN ESTE CHAT!.*`, m, rcanal);
} else if (args[0] === 'on') {
if (!chat.isBanned) {
return conn.reply(m.chat, `⭕ *SUKUNA YA ESTABA ACTIVO!.*`, m, rcanal);
}
chat.isBanned = false
return conn.reply(m.chat, `✅ *SUKUNA HA SIDO ACTIVADO EN ESTE CHAT!.*`, m, rcanal);
}}
}

handler.help = ['bot']
handler.tags = ['grupo']
handler.command = ['bot']
handler.admin = true

export default handler
