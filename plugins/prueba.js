let handler = async (m, { conn, args }) => {  
  let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender  
  let userData = global.db.data.users[userId] || {};  
  let exp = userData.exp || 0;  
  let coin = userData.coin || 0;  
  let level = userData.level || 0;  
  let role = userData.role || 'Sin Rango';  

  let name = await conn.getName(userId);  
  let _uptime = process.uptime() * 1000;  
  let uptime = clockString(_uptime);  
  let totalreg = Object.keys(global.db.data.users).length;  
  let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length;  

  let images = [
    'https://files.catbox.moe/nmseef.png',
    'https://files.catbox.moe/qnvpyq.jpg',
    'https://files.catbox.moe/w4hviq.png',
    'https://files.catbox.moe/7osb4d.jpg'
  ]
  let imgUrl = images[Math.floor(Math.random() * images.length)]  

  let txt = `
┏━━━━━━━━━━━━━━━┓
┃     🧃 𝑺𝑼𝑲𝑼𝑵𝑨 𝑩𝑶𝑻 𝑴𝑫 🍷     
┗━━━━━━━━━━━━━━━┛

╭─「 🎖️ 𝙄𝙉𝙁𝙊 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 」─╮
│ 👤 Nombre: ${name}
│ ⚡ Exp: ${exp}
│ 💰 Coins: ${coin}
│ 📈 Nivel: ${level}
│ 🏅 Rango: ${role}
╰────────────────────╯

╭─「 ⚙️ 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 」─╮
│ 🤖 Bot: ${bot}
│ 🔗 Creador: wa.link/z1w9sq
│ 🧍 Usuarios: ${totalreg}
│ 🌴 𝙏𝙞𝙥𝙤 𝙙𝙚 𝘽𝙤𝙩:  ${(conn.user.jid == global.conn.user.jid ? '`👑 𝐁𝐎𝐓 𝐎𝐅𝐈𝐂𝐈𝐀𝐋`' : '`🪄 𝐒𝐔𝐁 𝐁𝐎𝐓`')}
│ 🔮 Comandos: ${totalCommands}
│ ⏳ Uptime: ${uptime}
╰────────────────────╯

╭─「 🎛️ 𝙏𝙍𝘼𝙉𝙎𝙁𝙊𝙍𝙈𝘼𝘿𝙊𝙍 」─╮
│ 🖼️ .tourl <img>
│ 📦 .catbox
│ 🎧 .tomp3
│ 🎥 .tovideo
│ 🌀 .togifaud
│ 🔊 .tts <lang> <texto>
│ 🔊 .tts2
╰────────────────────╯

𖤐 𝑺𝒖𝒌𝒖𝒏𝒂 𝑩𝒐𝒕 𝒙 𝑩𝒍𝒂𝒄𝒌𖤐
`.trim();

  let imgBuffer = await fetch(imgUrl).then(res => res.buffer());  

  await conn.sendMessage(m.chat, {   
    text: txt,  
    image: imgBuffer,  
    contextInfo: {  
      mentionedJid: [m.sender, userId],  
      isForwarded: true,  
      forwardedNewsletterMessageInfo: {  
        newsletterJid: '120363401008003732@newsletter',  
        newsletterName: '⛩️ SUKUNA BOT MD 🌴',  
        serverMessageId: -1,  
      },  
      forwardingScore: 999,  
      externalAdReply: {  
        title: 'Sukuna Bot MD',  
        body: 'Sistema oficial desarrollado por Black',
        thumbnailUrl: imgUrl,  
        sourceUrl: redes,  
        mediaType: 1,  
        showAdAttribution: true,  
        renderLargerThumbnail: true,  
      },  
    },  
  }, { quoted: m });  
}  

handler.help = ['menu1'];  
handler.tags = ['main'];  
handler.command = ['menu1'];

export default handler;  

function clockString(ms) {  
  let seconds = Math.floor((ms / 1000) % 60);  
  let minutes = Math.floor((ms / (1000 * 60)) % 60);  
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);  
  return `${hours}H ${minutes}M ${seconds}S`;  
}