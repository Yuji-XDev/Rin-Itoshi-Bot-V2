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
      
    let sukuna = 'ۚ𑁯ׂ✦ ᳴ʚ ̶ ';
    let images = [
      'https://files.catbox.moe/nmseef.png',
      'https://files.catbox.moe/qnvpyq.jpg',
      'https://files.catbox.moe/w4hviq.png',
      'https://files.catbox.moe/7osb4d.jpg'
    ]
    let imgUrl = images[Math.floor(Math.random() * images.length)]  
    
    let txt = `╭─❍ 『 𝙷𝙾𝙻𝙰 』 ❍─
│ 𓆩💙𓆪 𝙷𝙤𝙡𝙖 @${userId.split('@')[0]}!
│ 𝑴𝒊 𝒏𝒐𝒎𝒃𝒓𝒆 𝒆𝒔 *${bot}* 💫
│ ୨୧ 𝒃𝒊𝒆𝒏𝒗𝒆𝒏𝒊𝒅𝒐 𝒂 𝒎𝒊 𝒎𝒆𝒏ú ✨
╰─────────────⬣

╭──「 🧠 𝗜𝗡𝗙𝗢 - 𝗕𝗢𝗧 🧙‍♂️ 」──╮
│📌 *CREADOR:* wa.link/z1w9sq
│🛡️ *MODO:* Privado - Solo leyendas entran...
│🌀 *BAILEYS:* Multi Device Network
│🧍 *REGISTRADOS:* ${totalreg} guerreros
│🎮 *COMANDOS:* ${totalCommands} desbloqueados
│🕒 *TIEMPO ACTIVO:* ${uptime}
╰─────────────────────╯

╭──「 🎖️ 𝗜𝗡𝗙𝗢 - 𝗨𝗦𝗘𝗥 」──╮
│👤 *Nombre:* ${name}
│⚡ *Exp:* ${exp}
│💰 *coins:* ${coin}
│📈 *Nivel:* ${level}
│🏅 *Rango:* ${role}
╰─────────────────────╯

‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
╭─────❍༓❍༓❍─────╮
  🌴 𝐄𝐒𝐓𝐀𝐃𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 🌪️
╰─────❍༓❍༓❍─────╯
╭─⊷ 𝙏𝙞𝙥𝙤 𝙙𝙚 𝘽𝙤𝙩
│ ${(conn.user.jid == global.conn.user.jid ? '👑 𝐁𝐎𝐓 𝐎𝐅𝐈𝐂𝐈𝐀𝐋' : '🪄 𝐒𝐔𝐁 𝐁𝐎𝐓')}
╰─────────────

*☁️ ＣＯＭＡＮＤＯＳ-ＤＩＳＰＯＮＩＢＬＥＳ ☁️*
⌬⃝ 𖤐┊────✧────┊𖤐⌬⃝
> 🪐 𝙋𝙪𝙚𝙙𝙚𝙨 𝙘𝙧𝙚𝙖𝙧 𝙪𝙣 *𝙎𝙪𝙗-𝘽𝙤𝙩* 𝙪𝙨𝙖𝙣𝙙𝙤:
> › 🪄 *#qr* o *#code*
⋆｡˚ ❃ ༘ ┈┈⏝┈┈ ❃ ˚｡⋆
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
🧃 ═✩═[𝐈𝐍𝐅𝐎-𝐁𝐎𝐓]═✩═ 🌪️
⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
${sukuna} .menu
${sukuna} .uptime
${sukuna} .script
${sukuna} .staff
${sukuna} .creador
${sukuna} .grupos
${sukuna} .estado
${sukuna} .infobot
${sukuna} .sug
${sukuna} .ping
${sukuna} .reportar *<text>*
${sukuna} .reglas
${sukuna} .speed
${sukuna} .sistema
${sukuna} .usuarios
${sukuna} .ds
${sukuna} .funciones
${sukuna} .editautoresponder
╰━❀⃝𖤐⃟∘⌬⃝꒷꒦꒷˚ ༘ ₊⸝⸝˚ 𖤐𝓈𝓊𝓀𝓊𝓃𝒶𖤐 ₊˚༘꒷꒦꒷⌬⃝  ∘⃝𖤐⃟❀━╯

⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
🧃 ═✩═[𝐌𝐄𝐍𝐔𝐒-𝐁𝐎𝐓]═✩═ 🌪️
⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
${sukuna} .menulist
${sukuna} .dev - *Menu owner*
${sukuna} .menuse - *Menu search*
${sukuna} .menudl - *Menu descargas*
${sukuna} .menulogos - *logos*
${sukuna} .menu18 - *Menu hot*
${sukuna} .menugp - *Menu grupo*
${sukuna} .menu2 - *Menu audios*
${sukuna} .menurpg - *Menu economia*
╰━❀⃝𖤐⃟∘⌬⃝꒷꒦꒷˚ ༘ ₊⸝⸝˚ 𖤐𝓈𝓊𝓀𝓊𝓃𝒶𖤐 ₊˚༘꒷꒦꒷⌬⃝  ∘⃝𖤐⃟❀━╯

⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
🧃 ═✩═[𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒]═✩═ 🌪️
⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
${sukuna} .animeinfo
${sukuna} .animesearch
${sukuna} .cuevana
${sukuna} .githubsearch
${sukuna} .searchhentai
${sukuna} .google *<búsqueda>*
${sukuna} .imagen *<query>*
${sukuna} .infoanime
${sukuna} .githubstalk *<query>*
${sukuna} .soundcloudsearch *<txt>*
${sukuna} .pinterest
${sukuna} .pornhubsearch
${sukuna} .spotifysearch *<texto>*
${sukuna} .ytsearch2 *<text>*
${sukuna} .npmjs
${sukuna} .gnula
${sukuna} .apksearch
${sukuna} .wikis
${sukuna} .tiktoksearch *<txt>*
${sukuna} .tweetposts
${sukuna} .xnxxs
${sukuna} .xvsearch
${sukuna} .yts
${sukuna} .fdroidsearch *<término>*
${sukuna} .happymodsearch *<búsqueda>*
${sukuna} .cinecalidadsearch *<búsqueda>*
${sukuna} .yahoosearch *<búsqueda>*
${sukuna} .movie *<término>*
╰━❀⃝𖤐⃟∘⌬⃝꒷꒦꒷˚ ༘ ₊⸝⸝˚ 𖤐𝓈𝓊𝓀𝓊𝓃𝒶𖤐 ₊˚༘꒷꒦꒷⌬⃝  ∘⃝𖤐⃟❀━╯

⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
🧃 ═✩═[𝐒𝐔𝐁 𝐁𝐎𝐓𝐒]═✩═ 🌪️
⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
${sukuna} .qr
${sukuna} .code
${sukuna} .token
${sukuna} .sockets
${sukuna} .deletesesion
${sukuna} .pausarai
╰━❀⃝𖤐⃟∘⌬⃝꒷꒦꒷˚ ༘ ₊⸝⸝˚ 𖤐𝓈𝓊𝓀𝓊𝓃𝒶𖤐 ₊˚༘꒷꒦꒷⌬⃝  ∘⃝𖤐⃟❀━╯

⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
🧃 ═✩═[ 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 ]═✩═  🌪️
⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
${sukuna} .fb2
${sukuna} .fdroid *<url>*
${sukuna} .fb
${sukuna} .sound
${sukuna} .gitclone *<url git>*
${sukuna} .gdrive
${sukuna} .ig
${sukuna} .sukunaiafire *<url>*
${sukuna} .mega
${sukuna} .apk *<nombre>*
${sukuna} .pinvid *<link>*
${sukuna} .apk2 *<busqueda>*
${sukuna} .npmdl
${sukuna} .tt2
${sukuna} .kwaidl
${sukuna} .likee *<url>*
${sukuna} .aplay2 • applemusic2
${sukuna} .capcut *<url>*
${sukuna} .play
${sukuna} .play2
${sukuna} .ytmp3doc
${sukuna} .ytmp4doc
${sukuna} .yta
${sukuna} .ytv
${sukuna} .mp3
${sukuna} .tiktokrandom
${sukuna} .spotify
${sukuna} .tiktokhd
${sukuna} .tiktoktrends
${sukuna} .snapchat *<link>*
${sukuna} .terabox
${sukuna} .tiktok *<url>*
${sukuna} .tiktokmp3 *<url>*
${sukuna} .tiktokimg *<url>*
${sukuna} .twitter *<url>*
${sukuna} .xvideosdl
${sukuna} .xnxxdl
${sukuna} .pindl
╰━❀⃝𖤐⃟∘⌬⃝꒷꒦꒷˚ ༘ ₊⸝⸝˚ 𖤐𝓈𝓊𝓀𝓊𝓃𝒶𖤐 ₊˚༘꒷꒦꒷⌬⃝  ∘⃝𖤐⃟❀━╯

⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
🧃 ═✩═[ 𝐅𝐔𝐍 ]═✩═ 🌪️
⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
${sukuna} .gay <@tag> | <nombre> 
${sukuna} .lesbiana <@tag> | <nombre> 
${sukuna} .pajero <@tag> | <nombre> 
${sukuna} .pajera <@tag> | <nombre> 
${sukuna} .puto <@tag> | <nombre> 
${sukuna} .puta <@tag> | <nombre> 
${sukuna} .manco <@tag> | <nombre> 
${sukuna} .manca <@tag> | <nombre> 
${sukuna} .rata <@tag> | <nombre>
${sukuna} .prostituta <@tag> | <nombre> 
${sukuna} .amigorandom
${sukuna} .jalamela
${sukuna} .simi
${sukuna} .chiste
${sukuna} .consejo
${sukuna} .doxear *<mension>*
${sukuna} .facto
${sukuna} .reto
${sukuna} .verdad
${sukuna} .prostituto *<@tag> | <nombre>*
${sukuna} .formarpareja
${sukuna} .formarpareja5
${sukuna} .frase
${sukuna} .huevo *@user*
${sukuna} .chupalo *<mencion>*
${sukuna} .aplauso *<mencion>*
${sukuna} .marron *<mencion>*
${sukuna} .suicidar
${sukuna} .iqtest <mencion>*
${sukuna} .meme
${sukuna} .morse
${sukuna} .nombreninja *<texto>*
${sukuna} .paja
${sukuna} .personalidad *<mencion>*
${sukuna} .pregunta 
${sukuna} .piropo 
${sukuna} .zodiac *2002 02 25*
${sukuna} .ship 
${sukuna} .sorte 
${sukuna} .top *[texto]*
${sukuna} .formartrio *<mencion>*
${sukuna} .tt 
╰━❀⃝𖤐⃟∘⌬⃝꒷꒦꒷˚ ༘ ₊⸝⸝˚ 𖤐𝓈𝓊𝓀𝓊𝓃𝒶𖤐 ₊˚༘꒷꒦꒷⌬⃝  ∘⃝𖤐⃟❀━╯

⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
🧃 ═✩═[ 𝐆𝐀𝐌𝐄 ]═✩═ 🌪️
⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
${sukuna} .ahorcado
${sukuna} .delxo
${sukuna} .genio *<pregunta>*
${sukuna} .math *<mode>*
${sukuna} .ppt 
${sukuna} .pvp
${sukuna} .sopa
${sukuna} .acertijo
${sukuna} .ttt
╰━❀⃝𖤐⃟∘⌬⃝꒷꒦꒷˚ ༘ ₊⸝⸝˚ 𖤐𝓈𝓊𝓀𝓊𝓃𝒶𖤐 ₊˚༘꒷꒦꒷⌬⃝  ∘⃝𖤐⃟❀━╯

⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
🧃 ═✩═[ 𝐀𝐍𝐈𝐌𝐄 ]═✩═  🌪️
⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
${sukuna} .angry/enojado @tag
${sukuna} .bath/bañarse @tag
${sukuna} .bite/morder @tag
${sukuna} .bleh/lengua @tag
${sukuna} .blush/sonrojarse @tag
${sukuna} .bored/aburrido @tag
${sukuna} .nights/noches
${sukuna} .dias/days
${sukuna} .coffe/cafe @tag
${sukuna} .cry/llorar @tag
${sukuna} .cuddle/acurrucarse @tag
${sukuna} .dance/bailar @tag
${sukuna} .drunk/borracho @tag
${sukuna} .eat/comer @tag
${sukuna} .messi
${sukuna} .cr7
${sukuna} .facepalm/palmada @tag
${sukuna} .happy/feliz @tag
${sukuna} .hello/hola @tag
${sukuna} .hug/abrazar @tag
${sukuna} .kill/matar @tag
${sukuna} .kiss2/besar2 @tag
${sukuna} .kiss/besar @tag
${sukuna} .laugh/reirse @tag
${sukuna} .lick/lamer @tag
${sukuna} .love2/enamorada @tag
${sukuna} .patt/acariciar @tag
${sukuna} .poke/picar @tag
${sukuna} .pout/pucheros @tag
${sukuna} .ppcouple
${sukuna} .preg/embarazar @tag
${sukuna} .punch/golpear @tag
${sukuna} .run/correr @tag
${sukuna} .sad/triste @tag
${sukuna} .scared/asustada @tag
${sukuna} .seduce/seducir @tag
${sukuna} .shy/timida @tag
${sukuna} .slap/bofetada @tag
${sukuna} .sleep/dormir @tag
${sukuna} .smoke/fumar @tag
${sukuna} .think/pensando @tag
${sukuna} .undress/encuerar @tag
${sukuna} .waifu
╰━❀⃝𖤐⃟∘⌬⃝꒷꒦꒷˚ ༘ ₊⸝⸝˚ 𖤐𝓈𝓊𝓀𝓊𝓃𝒶𖤐 ₊˚༘꒷꒦꒷⌬⃝  ∘⃝𖤐⃟❀━╯

⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
🧃 ═✩═[ 𝐏𝐄𝐑𝐅𝐈𝐋 ]═✩═  🌪️
⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
${sukuna} .reg
${sukuna} .unreg
${sukuna} .profile
${sukuna} .marry *[mension / etiquetar]*
${sukuna} .divorce
${sukuna} .setgenre *<text>*
${sukuna} .delgenre
${sukuna} .setbirth *<text>*
${sukuna} .delbirth
${sukuna} .setdesc *<text>*
${sukuna} .deldesc
╰━❀⃝𖤐⃟∘⌬⃝꒷꒦꒷˚ ༘ ₊⸝⸝˚ 𖤐𝓈𝓊𝓀𝓊𝓃𝒶𖤐 ₊˚༘꒷꒦꒷⌬⃝  ∘⃝𖤐⃟❀━╯

⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
🧃 ═✩═[ 𝐒𝐓𝐀𝐋𝐊 ]═✩═  🌪️
⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
${sukuna} .tiktokstalk *<usuario>*
${sukuna} .kwaistalk *<usuario>*
${sukuna} .telegramstalk *<nombre_usuario>*
${sukuna} .youtubestalk *<nombre de usuario>*
${sukuna} .instagramstalk *<usuario>*
╰━❀⃝𖤐⃟∘⌬⃝꒷꒦꒷˚ ༘ ₊⸝⸝˚ 𖤐𝓈𝓊𝓀𝓊𝓃𝒶𖤐 ₊˚༘꒷꒦꒷⌬⃝  ∘⃝𖤐⃟❀━╯

⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
🧃 ═✩═[ 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 ]═✩═  🌪️
⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
${sukuna} .comprarpremium
${sukuna} .premium
${sukuna} .vip
${sukuna} .spamwa <number>|<mesage>|<no of messages>
╰━❀⃝𖤐⃟∘⌬⃝꒷꒦꒷˚ ༘ ₊⸝⸝˚ 𖤐𝓈𝓊𝓀𝓊𝓃𝒶𖤐 ₊˚༘꒷꒦꒷⌬⃝  ∘⃝𖤐⃟❀━╯

⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
🧃 ═✩═[ 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀 ]═✩═  🌪️
⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
${sukuna} .aventura
${sukuna} .baltop
${sukuna} .bank / bal
${sukuna} .cazar 
${sukuna} .codigo *<cantida de coins>*
${sukuna} .canjear *<código>*
${sukuna} .cartera
${sukuna} .apostar *<cantidad>*
${sukuna} .cf
${sukuna} .cofre
${sukuna} .crimen
${sukuna} .daily
${sukuna} .depositar 
${sukuna} .explorar
${sukuna} .gremio
${sukuna} .regalo
${sukuna} .halloween
${sukuna} .heal
${sukuna} .inventario 
${sukuna} .mensual
${sukuna} .mazmorra
${sukuna} .minar
${sukuna} .navidad
${sukuna} .retirar
${sukuna} .robar
${sukuna} .robarxp
${sukuna} .ruleta *<cantidad> <color>*
${sukuna} .buyall
${sukuna} .buy
${sukuna} .protituirse
${sukuna} .work
${sukuna} .pay / transfer 
${sukuna} .semanal
${sukuna} .levelup
${sukuna} .lvl @user
${sukuna} .slot *<apuesta>*
╰━❀⃝𖤐⃟∘⌬⃝꒷꒦꒷˚ ༘ ₊⸝⸝˚ 𖤐𝓈𝓊𝓀𝓊𝓃𝒶𖤐 ₊˚༘꒷꒦꒷⌬⃝  ∘⃝𖤐⃟❀━╯

⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
🧃 ═✩═[ 𝐆𝐀𝐂𝐇𝐀 ]═✩═  🌪️
⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
${sukuna} .rw
${sukuna} .reclamar 
${sukuna} .harem
${sukuna} .waifuimage
${sukuna} .charinfo
${sukuna} .topwaifus *[pagina]*
${sukuna} .regalar *<nombre del personaje> @usuario*
${sukuna} .vote *<personaje>*
╰━❀⃝𖤐⃟∘⌬⃝꒷꒦꒷˚ ༘ ₊⸝⸝˚ 𖤐𝓈𝓊𝓀𝓊𝓃𝒶𖤐 ₊˚༘꒷꒦꒷⌬⃝  ∘⃝𖤐⃟❀━╯

⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
🧃 ═✩═[ 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 ]═✩═  🌪️
⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
${sukuna} .sticker *<img>*
${sukuna} .sticker *<url>*
${sukuna} .setmeta
${sukuna} .delmeta
${sukuna} .bratvid *<texto>*
${sukuna} .pfp *@user*
${sukuna} .qc
${sukuna} .toimg *(reply)*
${sukuna} .brat
${sukuna} .bratvid *<texto>*
${sukuna} .emojimix  *<emoji+emoji>*
${sukuna} .wm *<packname>|<author>*
╰━❀⃝𖤐⃟∘⌬⃝꒷꒦꒷˚ ༘ ₊⸝⸝˚ 𖤐𝓈𝓊𝓀𝓊𝓃𝒶𖤐 ₊˚༘꒷꒦꒷⌬⃝  ∘⃝𖤐⃟❀━╯

⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
🧃 ═✩═[ 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 ]═✩═  🌪️
⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
${sukuna} .letra *<texto>*
${sukuna} .fake
${sukuna} .hd
${sukuna} .detectar
${sukuna} .clima *<ciudad/país>*
${sukuna} .join
${sukuna} .nuevafotochannel
${sukuna} .nosilenciarcanal
${sukuna} .silenciarcanal
${sukuna} .noseguircanal
${sukuna} .seguircanal 
${sukuna} .avisoschannel 
${sukuna} .resiviravisos 
${sukuna} .inspect 
${sukuna} .inspeccionar 
${sukuna} .eliminarfotochannel 
${sukuna} .reactioneschannel 
${sukuna} .reaccioneschannel 
${sukuna} .nuevonombrecanal 
${sukuna} .nuevadescchannel
${sukuna} .setavatar
${sukuna} .setbanner
${sukuna} .seticono
${sukuna} .setmoneda
${sukuna} .setname nombre1/nombre2
${sukuna} .cal *<ecuacion>*
${sukuna} .horario
${sukuna} .read
${sukuna} .traducir <idoma>
${sukuna} .say
${sukuna} .whatmusic <audio/video>
${sukuna} .paisinfo
${sukuna} .ssweb
${sukuna} .tamaño *<cantidad>*
${sukuna} .document *<audio/video>*
${sukuna} .translate
${sukuna} .up
${sukuna} .enhance
${sukuna} .wikipedia
╰━❀⃝𖤐⃟∘⌬⃝꒷꒦꒷˚ ༘ ₊⸝⸝˚ 𖤐𝓈𝓊𝓀𝓊𝓃𝒶𖤐 ₊˚༘꒷꒦꒷⌬⃝  ∘⃝𖤐⃟❀━╯

⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
🧃 ═✩═[ 𝐎𝐍 / 𝐎𝐅𝐅 ]═✩═  🌪️
⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
${sukuna} .welcome
${sukuna} .bienvenida
${sukuna} .antiprivado
${sukuna} .antiprivate
${sukuna} .restrict
${sukuna} .restringir
${sukuna} .antibot
${sukuna} .antibots
${sukuna} .autoaceptar
${sukuna} .aceptarauto
${sukuna} .autorechazar
${sukuna} .rechazarauto
${sukuna} .autoresponder
${sukuna} .autorespond
${sukuna} .antisubbots
${sukuna} .antibot2
${sukuna} .modoadmin
${sukuna} .soloadmin
${sukuna} .reaction
${sukuna} .reaccion
${sukuna} .nsfw
${sukuna} .modohorny
${sukuna} .antispam
${sukuna} .jadibotmd
${sukuna} .modejadibot
${sukuna} .subbots
${sukuna} .detect
${sukuna} .avisos
${sukuna} .antilink
${sukuna} .audios
${sukuna} .antiver
${sukuna} .antiocultar
${sukuna} .antilink2
${sukuna} .antiarabe
╰━❀⃝𖤐⃟∘⌬⃝꒷꒦꒷˚ ༘ ₊⸝⸝˚ 𖤐𝓈𝓊𝓀𝓊𝓃𝒶𖤐 ₊˚༘꒷꒦꒷⌬⃝  ∘⃝𖤐⃟❀━╯

⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
🧃 ═✩═[ 𝐆𝐑𝐔𝐏𝐎𝐒 ]═✩═  🌪️
⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
${sukuna} .admins
${sukuna} .agregar
${sukuna} .advertencia <@user>
${sukuna} .delwarn
${sukuna} .grupo abrir / cerrar
${sukuna} .group open / close
${sukuna} .delete
${sukuna} .demote <@user>
${sukuna} .promote <@user>
${sukuna} .encuesta <text|text2>
${sukuna} .kickfantasmas
${sukuna} .gpbanner
${sukuna} .gpdesc
${sukuna} .gpname
${sukuna} .hidetag
${sukuna} .infogrupo
${sukuna} .kickall
${sukuna} .kick <@user>
${sukuna} .kicknum
${sukuna} .listonline
${sukuna} .link
${sukuna} .listadv
${sukuna} .mute
${sukuna} .unmute
${sukuna} .config
${sukuna} .restablecer
${sukuna} .setbye
${sukuna} .setwelcome
${sukuna} .testwelcome
${sukuna} .setemoji <emoji>
${sukuna} .invocar *<mensaje opcional>*
╰━❀⃝𖤐⃟∘⌬⃝꒷꒦꒷˚ ༘ ₊⸝⸝˚ 𖤐𝓈𝓊𝓀𝓊𝓃𝒶𖤐 ₊˚༘꒷꒦꒷⌬⃝  ∘⃝𖤐⃟❀━╯

⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
🧃 ═✩═[ 𝐍𝐒𝐅𝐖 ]═✩═  🌪️
⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
${sukuna} .sixnine/69 @tag
${sukuna} .anal/culiar @tag
${sukuna} .blowjob/mamada @tag
${sukuna} .boobjob/rusa @tag
${sukuna} .cum/leche @tag
${sukuna} .fap/paja @tag
${sukuna} .follar @tag
${sukuna} .fuck/coger @tag
${sukuna} .footjob/pies @tag
${sukuna} .fuck2/coger2 @tag
${sukuna} .grabboobs/agarrartetas @tag
${sukuna} .grop/manosear @tag
${sukuna} .penetrar @user
${sukuna} .lickpussy/coño @tag
${sukuna} .r34 <tag>
${sukuna} .sexo/sex @tag
${sukuna} .spank/nalgada @tag
${sukuna} .suckboobs/chupartetas @tag
${sukuna} .violar/perra @tag
${sukuna} .lesbianas/tijeras @tag
${sukuna} .pack
${sukuna} .tetas
${sukuna} .undress/encuerar
╰━❀⃝𖤐⃟∘⌬⃝꒷꒦꒷˚ ༘ ₊⸝⸝˚ 𖤐𝓈𝓊𝓀𝓊𝓃𝒶𖤐 ₊˚༘꒷꒦꒷⌬⃝  ∘⃝𖤐⃟❀━╯

⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
🧃 ═✩═[ 𝐎𝐖𝐍𝐄𝐑 ]═✩═  🌪️
⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
${sukuna} .addcoins *<@user>*
${sukuna} .addowner / delowner
${sukuna} .addprem [@user] <days>
${sukuna} .añadirxp
${sukuna} .copia
${sukuna} .autoadmin
${sukuna} .banuser <@tag> <razón>
${sukuna} .banlist
${sukuna} .bcgc
${sukuna} .block / unblock
${sukuna} .blocklist
${sukuna} .chetar *@user* / *<número>*
${sukuna} .cleartmp
${sukuna} .creargc
${sukuna} .deletefile
${sukuna} .delprem <@user>
${sukuna} .deschetar *@user* / *<número>*
${sukuna} .dsowner
${sukuna} =>
${sukuna} >
${sukuna} .fetch
${sukuna} .getplugin
${sukuna} .grouplist
${sukuna} .salir
${sukuna} .let
${sukuna} .prefix [prefix]
${sukuna} .quitarcoin *<@user>* / all
${sukuna} .quitarxp *<@user>*
${sukuna} .resetprefix
${sukuna} .restablecerdatos
${sukuna} .restart / reiniciar
${sukuna} .reunion
${sukuna} .savefile <ruta/nombre>
${sukuna} .saveplugin
${sukuna} .setcmd *<texto>*
${sukuna} .delcmd
${sukuna} .listcmd
${sukuna} .setimage
${sukuna} .setstatus <teks>
${sukuna} .spam2
${sukuna} .unbanuser <@tag>
${sukuna} .ip <alamat ip>
${sukuna} .update / fix
╰━❀⃝𖤐⃟∘⌬⃝꒷꒦꒷˚ ༘ ₊⸝⸝˚ 𖤐𝓈𝓊𝓀𝓊𝓃𝒶𖤐 ₊˚༘꒷꒦꒷⌬⃝  ∘⃝𖤐⃟❀━╯

⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
🧃 ═✩═[ 𝐈𝐀 - 𝐀𝐈 ]═✩═  🌪️
⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
${sukuna} .dalle
${sukuna} .demo *<texto>*
${sukuna} .flux *<texto>*
${sukuna} .gemini
${sukuna} .ia
${sukuna} .llama
╰━❀⃝𖤐⃟∘⌬⃝꒷꒦꒷˚ ༘ ₊⸝⸝˚ 𖤐𝓈𝓊𝓀𝓊𝓃𝒶𖤐 ₊˚༘꒷꒦꒷⌬⃝  ∘⃝𖤐⃟❀━╯

⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
🧃 ═✩═[ 𝐓𝐑𝐀𝐍𝐒𝐅𝐎𝐑𝐌𝐀𝐃𝐎𝐑 ]═✩═  🌪️
⋆｡˚ ❃ ༘ ┈┈┈┈⏝┈┈┈┈ ❃ ˚｡⋆
${sukuna} .tourl <imagen>
${sukuna} .catbox
${sukuna} .tourl3
${sukuna} .togifaud
${sukuna} .tomp3
${sukuna} .tovideo
${sukuna} .tts <lang> <teks>
${sukuna} .tts2
╰━❀⃝𖤐⃟∘⌬⃝꒷꒦꒷˚ ༘ ₊⸝⸝˚ 𖤐𝓈𝓊𝓀𝓊𝓃𝒶𖤐 ₊˚༘꒷꒦꒷⌬⃝  ∘⃝𖤐⃟❀━╯

© ${textbot}`.trim();  
    
    let imgBuffer = await fetch(imgUrl).then(res => res.buffer());  

    await conn.sendMessage(m.chat, {   
        text: txt,  
        image: imgBuffer,  
        contextInfo: {  
            mentionedJid: [m.sender, userId],  
            isForwarded: true,  
            forwardedNewsletterMessageInfo: {  
                newsletterJid: '120363401008003732@newsletter',  
                newsletterName: '⚡ SUKUNA BOT MD | 𝘾𝙃𝘼𝙉𝙉𝙀𝙇 ⭐',  
                serverMessageId: -1,  
            },  
            forwardingScore: 999,  
            externalAdReply: {  
                title: botname,  
                body: textbot,  
                thumbnailUrl: imgUrl,  
                sourceUrl: redes,  
                mediaType: 1,  
                showAdAttribution: true,  
                renderLargerThumbnail: true,  
            },  
        },  
    }, { quoted: m });  
}  
  
handler.help = ['menu'];  
handler.tags = ['main'];  
handler.command = ['menu', 'menú', 'help', 'allmenú', 'allmenu', 'menucompleto'];
  
export default handler;  

function clockString(ms) {  
    let seconds = Math.floor((ms / 1000) % 60);  
    let minutes = Math.floor((ms / (1000 * 60)) % 60);  
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);  
    return `${hours}H ${minutes}M ${seconds}S`;  
}