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
      
    let rinST = 'ۚ𑁯ׂ✦ ᳴ʚ ̶ ';
    let imgUrl = 'https://files.catbox.moe/35wxsf.jpg';  
    
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
╔═══════◍◦❈◦◍═══════╗
┃┏━━━━୨🌙୧━━━━┓
┃┃ 🍷 *「ＢＯＴ ＥＳＴＡＤＯ」* 
┃┃ ${(conn.user.jid == global.conn.user.jid ? '👑 𝗢𝗙𝗜𝗖𝗜𝗔𝗟' : '🪄 𝗦𝗨𝗕 𝗕𝗢𝗧')}
┃┗━━━━୨✨୧━━━━┛
╚═══════◍◦❈◦◍═══════╝

🌌 *☁️ ＣＯＭＡＮＤＯＳ-ＤＩＳＰＯＮＩＢＬＥＳ ☁️*
⌬⃝ 𖤐┊────✧────┊𖤐⌬⃝
🪐 𝙋𝙪𝙚𝙙𝙚𝙨 𝙘𝙧𝙚𝙖𝙧 𝙪𝙣 *𝙎𝙪𝙗-𝘽𝙤𝙩* 𝙪𝙨𝙖𝙣𝙙𝙤:
› 🪄 *#qr* o *#code*

☁️ ¡Activa tu magia y lleva el control! ☁️
⋆｡˚ ❃ ༘ ┈┈⏝┈┈ ❃ ˚｡⋆
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[𝐈𝐍𝐅𝐎-𝐁𝐎𝐓]═✩═ 💛
┆֪࣪  ╚═══════════════════╝
┆ ${rinST} .menu
┆ ${rinST} .uptime
┆ ${rinST} .script
┆ ${rinST} .staff
┆ ${rinST} .creador
┆ ${rinST} .grupos
┆ ${rinST} .estado
┆ ${rinST} .infobot
┆ ${rinST} .sug
┆ ${rinST} .ping
┆ ${rinST} .reportar *<text>*
┆ ${rinST} .reglas
┆ ${rinST} .speed
┆ ${rinST} .sistema
┆ ${rinST} .usuarios
┆ ${rinST} .ds
┆ ${rinST} .funciones
┆ ${rinST} .editautoresponder
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[𝐌𝐄𝐍𝐔𝐒-𝐁𝐎𝐓]═✩═ 💛
┆֪࣪  ╚═══════════════════╝
┆ ${rinST} .dev - *Menu owner*
┆ ${rinST} .menuse - *Menu search*
┆ ${rinST} .menudl - *Menu descargas*
┆ ${rinST} .menulogos - *logos*
┆ ${rinST} .menu18 - *Menu hot*
┆ ${rinST} .menugp - *Menu grupo*
┆ ${rinST} .menu2 - *Menu audios*
┆ ${rinST} .menurpg - *Menu economia*
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒]═✩═ 💛
┆֪࣪  ╚═══════════════════╝
┆ ${rinST} .animeinfo
┆ ${rinST} .animesearch
┆ ${rinST} .cuevana
┆ ${rinST} .githubsearch
┆ ${rinST} .searchhentai
┆ ${rinST} .google *<búsqueda>*
┆ ${rinST} .imagen *<query>*
┆ ${rinST} .infoanime
┆ ${rinST} .githubstalk *<query>*
┆ ${rinST} .soundcloudsearch *<txt>*
┆ ${rinST} .pinterest
┆ ${rinST} .pornhubsearch
┆ ${rinST} .spotifysearch *<texto>*
┆ ${rinST} .ytsearch2 *<text>*
┆ ${rinST} .npmjs
┆ ${rinST} .gnula
┆ ${rinST} .apksearch
┆ ${rinST} .wikis
┆ ${rinST} .tiktoksearch *<txt>*
┆ ${rinST} .tweetposts
┆ ${rinST} .xnxxs
┆ ${rinST} .xvsearch
┆ ${rinST} .yts
┆ ${rinST} .fdroidsearch *<término>*
┆ ${rinST} .happymodsearch *<búsqueda>*
┆ ${rinST} .cinecalidadsearch *<búsqueda>*
┆ ${rinST} .yahoosearch *<búsqueda>*
┆ ${rinST} .movie *<término>*
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[𝐒𝐔𝐁 𝐁𝐎𝐓𝐒]═✩═ 💛
┆֪࣪  ╚═══════════════════╝
┆ ${rinST} .qr
┆ ${rinST} .code
┆ ${rinST} .token
┆ ${rinST} .sockets
┆ ${rinST} .deletesesion
┆ ${rinST} .pausarai
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${rinST} .anirinSTl
┆ ${rinST} .fb
┆ ${rinST} .sound
┆ ${rinST} .gitclone *<url git>*
┆ ${rinST} .gdrive
┆ ${rinST} .ig
┆ ${rinST} .rinSTiafire *<url>*
┆ ${rinST} .mega
┆ ${rinST} .apk *<nombre>*
┆ ${rinST} .pinvid *<link>*
┆ ${rinST} .apk2 *<busqueda>*
┆ ${rinST} .npmdl
┆ ${rinST} .tt2
┆ ${rinST} .kwaidl
┆ ${rinST} .likee *<url>*
┆ ${rinST} .aplay2 • applemusic2
┆ ${rinST} .capcut *<url>*
┆ ${rinST} .play
┆ ${rinST} .play2
┆ ${rinST} .ytmp3doc
┆ ${rinST} .ytmp4doc
┆ ${rinST} .yta
┆ ${rinST} .ytv
┆ ${rinST} .mp3
┆ ${rinST} .tiktokrandom
┆ ${rinST} .spotify
┆ ${rinST} .tiktokhd
┆ ${rinST} .tiktoktrends
┆ ${rinST} .snapchat *<link>*
┆ ${rinST} .terabox
┆ ${rinST} .tiktok *<url>*
┆ ${rinST} .tiktokmp3 *<url>*
┆ ${rinST} .tiktokimg *<url>*
┆ ${rinST} .twitter *<url>*
┆ ${rinST} .xvideosdl
┆ ${rinST} .xnxxdl
┆ ${rinST} .pindl
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐅𝐔𝐍 ]═✩═ 💛
┆֪࣪  ╚═══════════════════╝
┆ ${rinST} .gay <@tag> | <nombre> 
┆ ${rinST} .lesbiana <@tag> | <nombre> 
┆ ${rinST} .pajero <@tag> | <nombre> 
┆ ${rinST} .pajera <@tag> | <nombre> 
┆ ${rinST} .puto <@tag> | <nombre> 
┆ ${rinST} .puta <@tag> | <nombre> 
┆ ${rinST} .manco <@tag> | <nombre> 
┆ ${rinST} .manca <@tag> | <nombre> 
┆ ${rinST} .rata <@tag> | <nombre>
┆ ${rinST} .prostituta <@tag> | <nombre> 
┆ ${rinST} .amigorandom
┆ ${rinST} .jalamela
┆ ${rinST} .simi
┆ ${rinST} .chiste
┆ ${rinST} .consejo
┆ ${rinST} .doxear *<mension>*
┆ ${rinST} .facto
┆ ${rinST} .reto
┆ ${rinST} .verdad
┆ ${rinST} .prostituto *<@tag> | <nombre>*
┆ ${rinST} .formarpareja
┆ ${rinST} .formarpareja5
┆ ${rinST} .frase
┆ ${rinST} .huevo *@user*
┆ ${rinST} .chupalo *<mencion>*
┆ ${rinST} .aplauso *<mencion>*
┆ ${rinST} .marron *<mencion>*
┆ ${rinST} .suicidar
┆ ${rinST} .iqtest <mencion>*
┆ ${rinST} .meme
┆ ${rinST} .morse
┆ ${rinST} .nombreninja *<texto>*
┆ ${rinST} .paja
┆ ${rinST} .personalidad *<mencion>*
┆ ${rinST} .pregunta 
┆ ${rinST} .piropo 
┆ ${rinST} .zodiac *2002 02 25*
┆ ${rinST} .ship 
┆ ${rinST} .sorte 
┆ ${rinST} .top *[texto]*
┆ ${rinST} .formartrio *<mencion>*
┆ ${rinST} .tt 
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐆𝐀𝐌𝐄 ]═✩═ 💛
┆֪࣪  ╚═══════════════════╝
┆ ${rinST} .ahorcado
┆ ${rinST} .delxo
┆ ${rinST} .genio *<pregunta>*
┆ ${rinST} .math *<mode>*
┆ ${rinST} .ppt 
┆ ${rinST} .pvp
┆ ${rinST} .sopa
┆ ${rinST} .acertijo
┆ ${rinST} .ttt
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐀𝐍𝐈𝐌𝐄 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${rinST} .angry/enojado @tag
┆ ${rinST} .bath/bañarse @tag
┆ ${rinST} .bite/morder @tag
┆ ${rinST} .bleh/lengua @tag
┆ ${rinST} .blush/sonrojarse @tag
┆ ${rinST} .bored/aburrido @tag
┆ ${rinST} .nights/noches
┆ ${rinST} .dias/days
┆ ${rinST} .coffe/cafe @tag
┆ ${rinST} .cry/llorar @tag
┆ ${rinST} .cuddle/acurrucarse @tag
┆ ${rinST} .dance/bailar @tag
┆ ${rinST} .drunk/borracho @tag
┆ ${rinST} .eat/comer @tag
┆ ${rinST} .messi
┆ ${rinST} .cr7
┆ ${rinST} .facepalm/palmada @tag
┆ ${rinST} .happy/feliz @tag
┆ ${rinST} .hello/hola @tag
┆ ${rinST} .hug/abrazar @tag
┆ ${rinST} .kill/matar @tag
┆ ${rinST} .kiss2/besar2 @tag
┆ ${rinST} .kiss/besar @tag
┆ ${rinST} .laugh/reirse @tag
┆ ${rinST} .lick/lamer @tag
┆ ${rinST} .love2/enamorada @tag
┆ ${rinST} .patt/acariciar @tag
┆ ${rinST} .poke/picar @tag
┆ ${rinST} .pout/pucheros @tag
┆ ${rinST} .ppcouple
┆ ${rinST} .preg/embarazar @tag
┆ ${rinST} .punch/golpear @tag
┆ ${rinST} .run/correr @tag
┆ ${rinST} .sad/triste @tag
┆ ${rinST} .scared/asustada @tag
┆ ${rinST} .seduce/seducir @tag
┆ ${rinST} .shy/timida @tag
┆ ${rinST} .slap/bofetada @tag
┆ ${rinST} .sleep/dormir @tag
┆ ${rinST} .smoke/fumar @tag
┆ ${rinST} .think/pensando @tag
┆ ${rinST} .undress/encuerar @tag
┆ ${rinST} .waifu
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐏𝐄𝐑𝐅𝐈𝐋 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${rinST} .reg
┆ ${rinST} .unreg
┆ ${rinST} .profile
┆ ${rinST} .marry *[mension / etiquetar]*
┆ ${rinST} .divorce
┆ ${rinST} .setgenre *<text>*
┆ ${rinST} .delgenre
┆ ${rinST} .setbirth *<text>*
┆ ${rinST} .delbirth
┆ ${rinST} .setdesc *<text>*
┆ ${rinST} .deldesc
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐒𝐓𝐀𝐋𝐊 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${rinST} .tiktokstalk *<usuario>*
┆ ${rinST} .kwaistalk *<usuario>*
┆ ${rinST} .telegramstalk *<nombre_usuario>*
┆ ${rinST} .youtubestalk *<nombre de usuario>*
┆ ${rinST} .instagramstalk *<usuario>*
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${rinST} .comprarpremium
┆ ${rinST} .premium
┆ ${rinST} .vip
┆ ${rinST} .spamwa <number>|<mesage>|<no of messages>
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${rinST} .aventura
┆ ${rinST} .baltop
┆ ${rinST} .bank / bal
┆ ${rinST} .cazar 
┆ ${rinST} .codigo *<cantida de coins>*
┆ ${rinST} .canjear *<código>*
┆ ${rinST} .cartera
┆ ${rinST} .apostar *<cantidad>*
┆ ${rinST} .cf
┆ ${rinST} .cofre
┆ ${rinST} .crimen
┆ ${rinST} .daily
┆ ${rinST} .depositar 
┆ ${rinST} .explorar
┆ ${rinST} .gremio
┆ ${rinST} .regalo
┆ ${rinST} .halloween
┆ ${rinST} .heal
┆ ${rinST} .inventario 
┆ ${rinST} .mensual
┆ ${rinST} .mazmorra
┆ ${rinST} .minar
┆ ${rinST} .navidad
┆ ${rinST} .retirar
┆ ${rinST} .robar
┆ ${rinST} .robarxp
┆ ${rinST} .ruleta *<cantidad> <color>*
┆ ${rinST} .buyall
┆ ${rinST} .buy
┆ ${rinST} .protituirse
┆ ${rinST} .work
┆ ${rinST} .pay / transfer 
┆ ${rinST} .semanal
┆ ${rinST} .levelup
┆ ${rinST} .lvl @user
┆ ${rinST} .slot *<apuesta>*
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐆𝐀𝐂𝐇𝐀 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${rinST} .rw
┆ ${rinST} .reclamar 
┆ ${rinST} .harem
┆ ${rinST} .waifuimage
┆ ${rinST} .charinfo
┆ ${rinST} .topwaifus *[pagina]*
┆ ${rinST} .regalar *<nombre del personaje> @usuario*
┆ ${rinST} .vote *<personaje>*
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${rinST} .sticker *<img>*
┆ ${rinST} .sticker *<url>*
┆ ${rinST} .setmeta
┆ ${rinST} .delmeta
┆ ${rinST} .bratvid *<texto>*
┆ ${rinST} .pfp *@user*
┆ ${rinST} .qc
┆ ${rinST} .toimg *(reply)*
┆ ${rinST} .brat
┆ ${rinST} .bratvid *<texto>*
┆ ${rinST} .emojimix  *<emoji+emoji>*
┆ ${rinST} .wm *<packname>|<author>*
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${rinST} .letra *<texto>*
┆ ${rinST} .fake
┆ ${rinST} .hd
┆ ${rinST} .detectar
┆ ${rinST} .clima *<ciudad/país>*
┆ ${rinST} .join
┆ ${rinST} .nuevafotochannel
┆ ${rinST} .nosilenciarcanal
┆ ${rinST} .silenciarcanal
┆ ${rinST} .noseguircanal
┆ ${rinST} .seguircanal 
┆ ${rinST} .avisoschannel 
┆ ${rinST} .resiviravisos 
┆ ${rinST} .inspect 
┆ ${rinST} .inspeccionar 
┆ ${rinST} .eliminarfotochannel 
┆ ${rinST} .reactioneschannel 
┆ ${rinST} .reaccioneschannel 
┆ ${rinST} .nuevonombrecanal 
┆ ${rinST} .nuevadescchannel
┆ ${rinST} .setavatar
┆ ${rinST} .setbanner
┆ ${rinST} .seticono
┆ ${rinST} .setmoneda
┆ ${rinST} .setname nombre1/nombre2
┆ ${rinST} .cal *<ecuacion>*
┆ ${rinST} .horario
┆ ${rinST} .read
┆ ${rinST} .traducir <idoma>
┆ ${rinST} .say
┆ ${rinST} .whatmusic <audio/video>
┆ ${rinST} .paisinfo
┆ ${rinST} .ssweb
┆ ${rinST} .tamaño *<cantidad>*
┆ ${rinST} .document *<audio/video>*
┆ ${rinST} .translate
┆ ${rinST} .up
┆ ${rinST} .enhance
┆ ${rinST} .wikipedia
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐎𝐍 / 𝐎𝐅𝐅 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${rinST} .welcome
┆ ${rinST} .bienvenida
┆ ${rinST} .antiprivado
┆ ${rinST} .antiprivate
┆ ${rinST} .restrict
┆ ${rinST} .restringir
┆ ${rinST} .antibot
┆ ${rinST} .antibots
┆ ${rinST} .autoaceptar
┆ ${rinST} .aceptarauto
┆ ${rinST} .autorechazar
┆ ${rinST} .rechazarauto
┆ ${rinST} .autoresponder
┆ ${rinST} .autorespond
┆ ${rinST} .antisubbots
┆ ${rinST} .antibot2
┆ ${rinST} .modoadmin
┆ ${rinST} .soloadmin
┆ ${rinST} .reaction
┆ ${rinST} .reaccion
┆ ${rinST} .nsfw
┆ ${rinST} .modohorny
┆ ${rinST} .antispam
┆ ${rinST} .jadibotmd
┆ ${rinST} .modejadibot
┆ ${rinST} .subbots
┆ ${rinST} .detect
┆ ${rinST} .avisos
┆ ${rinST} .antilink
┆ ${rinST} .audios
┆ ${rinST} .antiver
┆ ${rinST} .antiocultar
┆ ${rinST} .antilink2
┆ ${rinST} .antiarabe
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐆𝐑𝐔𝐏𝐎𝐒 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${rinST} .admins
┆ ${rinST} .agregar
┆ ${rinST} .advertencia <@user>
┆ ${rinST} .delwarn
┆ ${rinST} .grupo abrir / cerrar
┆ ${rinST} .group open / close
┆ ${rinST} .delete
┆ ${rinST} .demote <@user>
┆ ${rinST} .promote <@user>
┆ ${rinST} .encuesta <text|text2>
┆ ${rinST} .kickfantasmas
┆ ${rinST} .gpbanner
┆ ${rinST} .gpdesc
┆ ${rinST} .gpname
┆ ${rinST} .hidetag
┆ ${rinST} .infogrupo
┆ ${rinST} .kickall
┆ ${rinST} .kick <@user>
┆ ${rinST} .kicknum
┆ ${rinST} .listonline
┆ ${rinST} .link
┆ ${rinST} .listadv
┆ ${rinST} .mute
┆ ${rinST} .unmute
┆ ${rinST} .config
┆ ${rinST} .restablecer
┆ ${rinST} .setbye
┆ ${rinST} .setwelcome
┆ ${rinST} .testwelcome
┆ ${rinST} .setemoji <emoji>
┆ ${rinST} .invocar *<mensaje opcional>*
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐍𝐒𝐅𝐖 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${rinST} .sixnine/69 @tag
┆ ${rinST} .anal/culiar @tag
┆ ${rinST} .blowjob/mamada @tag
┆ ${rinST} .boobjob/rusa @tag
┆ ${rinST} .cum/leche @tag
┆ ${rinST} .fap/paja @tag
┆ ${rinST} .follar @tag
┆ ${rinST} .fuck/coger @tag
┆ ${rinST} .footjob/pies @tag
┆ ${rinST} .fuck2/coger2 @tag
┆ ${rinST} .grabboobs/agarrartetas @tag
┆ ${rinST} .grop/manosear @tag
┆ ${rinST} .penetrar @user
┆ ${rinST} .lickpussy/coño @tag
┆ ${rinST} .r34 <tag>
┆ ${rinST} .sexo/sex @tag
┆ ${rinST} .spank/nalgada @tag
┆ ${rinST} .suckboobs/chupartetas @tag
┆ ${rinST} .violar/perra @tag
┆ ${rinST} .lesbianas/tijeras @tag
┆ ${rinST} .pack
┆ ${rinST} .tetas
┆ ${rinST} .undress/encuerar
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐎𝐖𝐍𝐄𝐑 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${rinST} .addcoins *<@user>*
┆ ${rinST} .addowner / delowner
┆ ${rinST} .addprem [@user] <days>
┆ ${rinST} .añadirxp
┆ ${rinST} .copia
┆ ${rinST} .autoadmin
┆ ${rinST} .banuser <@tag> <razón>
┆ ${rinST} .banlist
┆ ${rinST} .bcgc
┆ ${rinST} .block / unblock
┆ ${rinST} .blocklist
┆ ${rinST} .chetar *@user* / *<número>*
┆ ${rinST} .cleartmp
┆ ${rinST} .creargc
┆ ${rinST} .deletefile
┆ ${rinST} .delprem <@user>
┆ ${rinST} .deschetar *@user* / *<número>*
┆ ${rinST} .dsowner
┆ ${rinST} =>
┆ ${rinST} >
┆ ${rinST} .fetch
┆ ${rinST} .getplugin
┆ ${rinST} .grouplist
┆ ${rinST} .salir
┆ ${rinST} .let
┆ ${rinST} .prefix [prefix]
┆ ${rinST} .quitarcoin *<@user>* / all
┆ ${rinST} .quitarxp *<@user>*
┆ ${rinST} .resetprefix
┆ ${rinST} .restablecerdatos
┆ ${rinST} .restart / reiniciar
┆ ${rinST} .reunion
┆ ${rinST} .savefile <ruta/nombre>
┆ ${rinST} .saveplugin
┆ ${rinST} .setcmd *<texto>*
┆ ${rinST} .delcmd
┆ ${rinST} .listcmd
┆ ${rinST} .setimage
┆ ${rinST} .setstatus <teks>
┆ ${rinST} .spam2
┆ ${rinST} .unbanuser <@tag>
┆ ${rinST} .ip <alamat ip>
┆ ${rinST} .update / fix
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐈𝐀 - 𝐀𝐈 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${rinST} .dalle
┆ ${rinST} .demo *<texto>*
┆ ${rinST} .flux *<texto>*
┆ ${rinST} .gemini
┆ ${rinST} .ia
┆ ${rinST} .llama
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐓𝐑𝐀𝐍𝐒𝐅𝐎𝐑𝐌𝐀𝐃𝐎𝐑 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${rinST} .tourl <imagen>
┆ ${rinST} .catbox
┆ ${rinST} .tourl3
┆ ${rinST} .togifaud
┆ ${rinST} .tomp3
┆ ${rinST} .tovideo
┆ ${rinST} .tts <lang> <teks>
┆ ${rinST} .tts2
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

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