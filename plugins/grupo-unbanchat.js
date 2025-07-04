let handler = async (m, { conn, usedPrefix, command, args }) => {
let chat = global.db.data.chats[m.chat]
if (!(m.chat in global.db.data.chats)) {
return conn.reply(m.chat, `✧ ¡Este chat no está registrado!.`, m)
}
if (command === 'bot') {
if (args.length === 0) {
const estado = chat.isBanned ? '✗ Desactivado' : '✓ Activado'
const info = `⚡ *Un administrador puede activar o desactivar a rin itoshi utilizando:*

\`╭━━━━━━━━━━━━━━━━━━━╮\`
\`┃\` ⚙️ 𝗖𝗼𝗺𝗮𝗻𝗱𝗼𝘀 𝗗𝗶𝘀𝗽𝗼𝗻𝗶𝗯𝗹𝗲𝘀: ⚙️
\`┣━━━━━━━━━━━━━━━━━━━┫\`
\`┃\` 🪀 ${usedPrefix}𝗯𝗼𝘁 𝗼𝗻 – 𝒂𝒄𝒕𝒊𝒗𝒂𝒓
\`┃\` 🪀 ${usedPrefix}𝗯𝗼𝘁 𝗼𝗳𝗳 – 𝒅𝒆𝒔𝒂𝒄𝒕𝒊𝒗𝒂𝒓
\`┣━━━━━━━━━━━━━━━━━━━┫\`
\`┃\` 🌴 𝗘𝘀𝘁𝗮𝗱𝗼 𝗔𝗰𝘁𝘂𝗮𝗹: ${estado}
\`╰━━━━━━━━━━━━━━━━━━━╯\``
return conn.reply(m.chat, info, fkontak, rcanal);
  }
if (args[0] === 'off') {
if (chat.isBanned) {
return conn.reply(m.chat, `⭕ *𝐑𝐈𝐍 𝐈𝐓𝐎𝐒𝐇𝐈 YA ESTABA DESACTIVADO!.*`, m, rcanal);
}
chat.isBanned = true
return conn.reply(m.chat, `🏔️ *𝐑𝐈𝐍 𝐈𝐓𝐎𝐒𝐇𝐈 HA SIDO DESACTIVADO EN ESTE CHAT!.*`, m, rcanal);
} else if (args[0] === 'on') {
if (!chat.isBanned) {
return conn.reply(m.chat, `⭕ *𝐑𝐈𝐍 𝐈𝐓𝐎𝐒𝐇𝐈 YA ESTABA ACTIVO!.*`, m, rcanal);
}
chat.isBanned = false
return conn.reply(m.chat, `✅ *𝐑𝐈𝐍 𝐈𝐓𝐎𝐒𝐇𝐈 HA SIDO ACTIVADO EN ESTE CHAT!.*`, m, rcanal);
}}
}

handler.help = ['bot']
handler.tags = ['grupo']
handler.command = ['bot']
handler.admin = true

export default handler
