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
      
    let luffyST = 'ۚ𑁯ׂ✦ ᳴ʚ ̶ ';
    let canal = 'https://whatsapp.com/channel/0029VbAtbPA84OmJSLiHis2U';
    let imgUrl = 'https://files.catbox.moe/35wxsf.jpg';  
    
    let txt = `╭─❍ 『 𝙷𝙾𝙻𝙰 』 ❍─
│ 𓆩💙𓆪 𝙷𝙤𝙡𝙖 @${userId.split('@')[0]}!
│ 𝑴𝒊 𝒏𝒐𝒎𝒃𝒓𝒆 𝒆𝒔 *${bot}* 💫
│ ୨୧ 𝒃𝒊𝒆𝒏𝒗𝒆𝒏𝒊𝒅𝒐 𝒂 𝒎𝒊 𝒎𝒆𝒏ú ✨
╰─────────────⬣

╭──「 🧠 𝗜𝗡𝗙𝗢 - 𝗕𝗢𝗧 🧙‍♂️ 」──╮
│📌 *CREADOR:* wa.me/qr/5B6AGA5YNOUZI1
│🛡️ *MODO:* Privado - Solo leyendas entran...
│🌀 *BAILEYS:* Multi Device Network
│🧍 *REGISTRADOS:* ${totalreg} guerreros
│🎮 *COMANDOS:* ${totalCommands} desbloqueados
│🕒 *TIEMPO ACTIVO:* ${uptime}
│📣 *CANAL OFICIAL:* ${canal}
╰─────────────────────╯

╭──「 🎖️ 𝗣𝗘𝗥𝗙𝗜𝗟 - 𝗨𝗦𝗘𝗥 」──╮
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

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[𝐈𝐍𝐅𝐎-𝐁𝐎𝐓]═✩═ 💛
┆֪࣪  ╚═══════════════════╝
┆ ${luffyST} .menu
┆ ${luffyST} .uptime
┆ ${luffyST} .script
┆ ${luffyST} .staff
┆ ${luffyST} .creador
┆ ${luffyST} .grupos
┆ ${luffyST} .estado
┆ ${luffyST} .infobot
┆ ${luffyST} .sug
┆ ${luffyST} .ping
┆ ${luffyST} .reportar *<text>*
┆ ${luffyST} .reglas
┆ ${luffyST} .speed
┆ ${luffyST} .sistema
┆ ${luffyST} .usuarios
┆ ${luffyST} .ds
┆ ${luffyST} .funciones
┆ ${luffyST} .editautoresponder
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[𝐌𝐄𝐍𝐔𝐒-𝐁𝐎𝐓]═✩═ 💛
┆֪࣪  ╚═══════════════════╝
┆ ${luffyST} .dev - *Menu owner*
┆ ${luffyST} .menuse - *Menu search*
┆ ${luffyST} .menudl - *Menu descargas*
┆ ${luffyST} .menulogos - *logos*
┆ ${luffyST} .menu18 - *Menu hot*
┆ ${luffyST} .menugp - *Menu grupo*
┆ ${luffyST} .menu2 - *Menu audios*
┆ ${luffyST} .menurpg - *Menu economia*
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒]═✩═ 💛
┆֪࣪  ╚═══════════════════╝
┆ ${luffyST} .animeinfo
┆ ${luffyST} .animesearch
┆ ${luffyST} .cuevana
┆ ${luffyST} .githubsearch
┆ ${luffyST} .searchhentai
┆ ${luffyST} .google *<búsqueda>*
┆ ${luffyST} .imagen *<query>*
┆ ${luffyST} .infoanime
┆ ${luffyST} .githubstalk *<query>*
┆ ${luffyST} .soundcloudsearch *<txt>*
┆ ${luffyST} .pinterest
┆ ${luffyST} .pornhubsearch
┆ ${luffyST} .spotifysearch *<texto>*
┆ ${luffyST} .ytsearch2 *<text>*
┆ ${luffyST} .npmjs
┆ ${luffyST} .gnula
┆ ${luffyST} .apksearch
┆ ${luffyST} .wikis
┆ ${luffyST} .tiktoksearch *<txt>*
┆ ${luffyST} .tweetposts
┆ ${luffyST} .xnxxs
┆ ${luffyST} .xvsearch
┆ ${luffyST} .yts
┆ ${luffyST} .fdroidsearch *<término>*
┆ ${luffyST} .happymodsearch *<búsqueda>*
┆ ${luffyST} .cinecalidadsearch *<búsqueda>*
┆ ${luffyST} .yahoosearch *<búsqueda>*
┆ ${luffyST} .movie *<término>*
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[𝐒𝐔𝐁 𝐁𝐎𝐓𝐒]═✩═ 💛
┆֪࣪  ╚═══════════════════╝
┆ ${luffyST} .qr
┆ ${luffyST} .code
┆ ${luffyST} .token
┆ ${luffyST} .sockets
┆ ${luffyST} .deletesesion
┆ ${luffyST} .pausarai
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${luffyST} .aniluffySTl
┆ ${luffyST} .fb
┆ ${luffyST} .sound
┆ ${luffyST} .gitclone *<url git>*
┆ ${luffyST} .gdrive
┆ ${luffyST} .ig
┆ ${luffyST} .luffySTiafire *<url>*
┆ ${luffyST} .mega
┆ ${luffyST} .apk *<nombre>*
┆ ${luffyST} .pinvid *<link>*
┆ ${luffyST} .apk2 *<busqueda>*
┆ ${luffyST} .npmdl
┆ ${luffyST} .tt2
┆ ${luffyST} .kwaidl
┆ ${luffyST} .likee *<url>*
┆ ${luffyST} .aplay2 • applemusic2
┆ ${luffyST} .capcut *<url>*
┆ ${luffyST} .play
┆ ${luffyST} .play2
┆ ${luffyST} .ytmp3doc
┆ ${luffyST} .ytmp4doc
┆ ${luffyST} .yta
┆ ${luffyST} .ytv
┆ ${luffyST} .mp3
┆ ${luffyST} .tiktokrandom
┆ ${luffyST} .spotify
┆ ${luffyST} .tiktokhd
┆ ${luffyST} .tiktoktrends
┆ ${luffyST} .snapchat *<link>*
┆ ${luffyST} .terabox
┆ ${luffyST} .tiktok *<url>*
┆ ${luffyST} .tiktokmp3 *<url>*
┆ ${luffyST} .tiktokimg *<url>*
┆ ${luffyST} .twitter *<url>*
┆ ${luffyST} .xvideosdl
┆ ${luffyST} .xnxxdl
┆ ${luffyST} .pindl
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐅𝐔𝐍 ]═✩═ 💛
┆֪࣪  ╚═══════════════════╝
┆ ${luffyST} .gay <@tag> | <nombre> 
┆ ${luffyST} .lesbiana <@tag> | <nombre> 
┆ ${luffyST} .pajero <@tag> | <nombre> 
┆ ${luffyST} .pajera <@tag> | <nombre> 
┆ ${luffyST} .puto <@tag> | <nombre> 
┆ ${luffyST} .puta <@tag> | <nombre> 
┆ ${luffyST} .manco <@tag> | <nombre> 
┆ ${luffyST} .manca <@tag> | <nombre> 
┆ ${luffyST} .rata <@tag> | <nombre>
┆ ${luffyST} .prostituta <@tag> | <nombre> 
┆ ${luffyST} .amigorandom
┆ ${luffyST} .jalamela
┆ ${luffyST} .simi
┆ ${luffyST} .chiste
┆ ${luffyST} .consejo
┆ ${luffyST} .doxear *<mension>*
┆ ${luffyST} .facto
┆ ${luffyST} .reto
┆ ${luffyST} .verdad
┆ ${luffyST} .prostituto *<@tag> | <nombre>*
┆ ${luffyST} .formarpareja
┆ ${luffyST} .formarpareja5
┆ ${luffyST} .frase
┆ ${luffyST} .huevo *@user*
┆ ${luffyST} .chupalo *<mencion>*
┆ ${luffyST} .aplauso *<mencion>*
┆ ${luffyST} .marron *<mencion>*
┆ ${luffyST} .suicidar
┆ ${luffyST} .iqtest <mencion>*
┆ ${luffyST} .meme
┆ ${luffyST} .morse
┆ ${luffyST} .nombreninja *<texto>*
┆ ${luffyST} .paja
┆ ${luffyST} .personalidad *<mencion>*
┆ ${luffyST} .pregunta 
┆ ${luffyST} .piropo 
┆ ${luffyST} .zodiac *2002 02 25*
┆ ${luffyST} .ship 
┆ ${luffyST} .sorte 
┆ ${luffyST} .top *[texto]*
┆ ${luffyST} .formartrio *<mencion>*
┆ ${luffyST} .tt 
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐆𝐀𝐌𝐄 ]═✩═ 💛
┆֪࣪  ╚═══════════════════╝
┆ ${luffyST} .ahorcado
┆ ${luffyST} .delxo
┆ ${luffyST} .genio *<pregunta>*
┆ ${luffyST} .math *<mode>*
┆ ${luffyST} .ppt 
┆ ${luffyST} .pvp
┆ ${luffyST} .sopa
┆ ${luffyST} .acertijo
┆ ${luffyST} .ttt
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐀𝐍𝐈𝐌𝐄 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${luffyST} .angry/enojado @tag
┆ ${luffyST} .bath/bañarse @tag
┆ ${luffyST} .bite/morder @tag
┆ ${luffyST} .bleh/lengua @tag
┆ ${luffyST} .blush/sonrojarse @tag
┆ ${luffyST} .bored/aburrido @tag
┆ ${luffyST} .nights/noches
┆ ${luffyST} .dias/days
┆ ${luffyST} .coffe/cafe @tag
┆ ${luffyST} .cry/llorar @tag
┆ ${luffyST} .cuddle/acurrucarse @tag
┆ ${luffyST} .dance/bailar @tag
┆ ${luffyST} .drunk/borracho @tag
┆ ${luffyST} .eat/comer @tag
┆ ${luffyST} .messi
┆ ${luffyST} .cr7
┆ ${luffyST} .facepalm/palmada @tag
┆ ${luffyST} .happy/feliz @tag
┆ ${luffyST} .hello/hola @tag
┆ ${luffyST} .hug/abrazar @tag
┆ ${luffyST} .kill/matar @tag
┆ ${luffyST} .kiss2/besar2 @tag
┆ ${luffyST} .kiss/besar @tag
┆ ${luffyST} .laugh/reirse @tag
┆ ${luffyST} .lick/lamer @tag
┆ ${luffyST} .love2/enamorada @tag
┆ ${luffyST} .patt/acariciar @tag
┆ ${luffyST} .poke/picar @tag
┆ ${luffyST} .pout/pucheros @tag
┆ ${luffyST} .ppcouple
┆ ${luffyST} .preg/embarazar @tag
┆ ${luffyST} .punch/golpear @tag
┆ ${luffyST} .run/correr @tag
┆ ${luffyST} .sad/triste @tag
┆ ${luffyST} .scared/asustada @tag
┆ ${luffyST} .seduce/seducir @tag
┆ ${luffyST} .shy/timida @tag
┆ ${luffyST} .slap/bofetada @tag
┆ ${luffyST} .sleep/dormir @tag
┆ ${luffyST} .smoke/fumar @tag
┆ ${luffyST} .think/pensando @tag
┆ ${luffyST} .undress/encuerar @tag
┆ ${luffyST} .waifu
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐏𝐄𝐑𝐅𝐈𝐋 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${luffyST} .reg
┆ ${luffyST} .unreg
┆ ${luffyST} .profile
┆ ${luffyST} .marry *[mension / etiquetar]*
┆ ${luffyST} .divorce
┆ ${luffyST} .setgenre *<text>*
┆ ${luffyST} .delgenre
┆ ${luffyST} .setbirth *<text>*
┆ ${luffyST} .delbirth
┆ ${luffyST} .setdesc *<text>*
┆ ${luffyST} .deldesc
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐒𝐓𝐀𝐋𝐊 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${luffyST} .tiktokstalk *<usuario>*
┆ ${luffyST} .kwaistalk *<usuario>*
┆ ${luffyST} .telegramstalk *<nombre_usuario>*
┆ ${luffyST} .youtubestalk *<nombre de usuario>*
┆ ${luffyST} .instagramstalk *<usuario>*
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${luffyST} .comprarpremium
┆ ${luffyST} .premium
┆ ${luffyST} .vip
┆ ${luffyST} .spamwa <number>|<mesage>|<no of messages>
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${luffyST} .aventura
┆ ${luffyST} .baltop
┆ ${luffyST} .bank / bal
┆ ${luffyST} .cazar 
┆ ${luffyST} .codigo *<cantida de coins>*
┆ ${luffyST} .canjear *<código>*
┆ ${luffyST} .cartera
┆ ${luffyST} .apostar *<cantidad>*
┆ ${luffyST} .cf
┆ ${luffyST} .cofre
┆ ${luffyST} .crimen
┆ ${luffyST} .daily
┆ ${luffyST} .depositar 
┆ ${luffyST} .explorar
┆ ${luffyST} .gremio
┆ ${luffyST} .regalo
┆ ${luffyST} .halloween
┆ ${luffyST} .heal
┆ ${luffyST} .inventario 
┆ ${luffyST} .mensual
┆ ${luffyST} .mazmorra
┆ ${luffyST} .minar
┆ ${luffyST} .navidad
┆ ${luffyST} .retirar
┆ ${luffyST} .robar
┆ ${luffyST} .robarxp
┆ ${luffyST} .ruleta *<cantidad> <color>*
┆ ${luffyST} .buyall
┆ ${luffyST} .buy
┆ ${luffyST} .protituirse
┆ ${luffyST} .work
┆ ${luffyST} .pay / transfer 
┆ ${luffyST} .semanal
┆ ${luffyST} .levelup
┆ ${luffyST} .lvl @user
┆ ${luffyST} .slot *<apuesta>*
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐆𝐀𝐂𝐇𝐀 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${luffyST} .rw
┆ ${luffyST} .reclamar 
┆ ${luffyST} .harem
┆ ${luffyST} .waifuimage
┆ ${luffyST} .charinfo
┆ ${luffyST} .topwaifus *[pagina]*
┆ ${luffyST} .regalar *<nombre del personaje> @usuario*
┆ ${luffyST} .vote *<personaje>*
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${luffyST} .sticker *<img>*
┆ ${luffyST} .sticker *<url>*
┆ ${luffyST} .setmeta
┆ ${luffyST} .delmeta
┆ ${luffyST} .bratvid *<texto>*
┆ ${luffyST} .pfp *@user*
┆ ${luffyST} .qc
┆ ${luffyST} .toimg *(reply)*
┆ ${luffyST} .brat
┆ ${luffyST} .bratvid *<texto>*
┆ ${luffyST} .emojimix  *<emoji+emoji>*
┆ ${luffyST} .wm *<packname>|<author>*
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${luffyST} .letra *<texto>*
┆ ${luffyST} .fake
┆ ${luffyST} .hd
┆ ${luffyST} .detectar
┆ ${luffyST} .clima *<ciudad/país>*
┆ ${luffyST} .join
┆ ${luffyST} .nuevafotochannel
┆ ${luffyST} .nosilenciarcanal
┆ ${luffyST} .silenciarcanal
┆ ${luffyST} .noseguircanal
┆ ${luffyST} .seguircanal 
┆ ${luffyST} .avisoschannel 
┆ ${luffyST} .resiviravisos 
┆ ${luffyST} .inspect 
┆ ${luffyST} .inspeccionar 
┆ ${luffyST} .eliminarfotochannel 
┆ ${luffyST} .reactioneschannel 
┆ ${luffyST} .reaccioneschannel 
┆ ${luffyST} .nuevonombrecanal 
┆ ${luffyST} .nuevadescchannel
┆ ${luffyST} .setavatar
┆ ${luffyST} .setbanner
┆ ${luffyST} .seticono
┆ ${luffyST} .setmoneda
┆ ${luffyST} .setname nombre1/nombre2
┆ ${luffyST} .cal *<ecuacion>*
┆ ${luffyST} .horario
┆ ${luffyST} .read
┆ ${luffyST} .traducir <idoma>
┆ ${luffyST} .say
┆ ${luffyST} .whatmusic <audio/video>
┆ ${luffyST} .paisinfo
┆ ${luffyST} .ssweb
┆ ${luffyST} .tamaño *<cantidad>*
┆ ${luffyST} .document *<audio/video>*
┆ ${luffyST} .translate
┆ ${luffyST} .up
┆ ${luffyST} .enhance
┆ ${luffyST} .wikipedia
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐎𝐍 / 𝐎𝐅𝐅 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${luffyST} .welcome
┆ ${luffyST} .bienvenida
┆ ${luffyST} .antiprivado
┆ ${luffyST} .antiprivate
┆ ${luffyST} .restrict
┆ ${luffyST} .restringir
┆ ${luffyST} .antibot
┆ ${luffyST} .antibots
┆ ${luffyST} .autoaceptar
┆ ${luffyST} .aceptarauto
┆ ${luffyST} .autorechazar
┆ ${luffyST} .rechazarauto
┆ ${luffyST} .autoresponder
┆ ${luffyST} .autorespond
┆ ${luffyST} .antisubbots
┆ ${luffyST} .antibot2
┆ ${luffyST} .modoadmin
┆ ${luffyST} .soloadmin
┆ ${luffyST} .reaction
┆ ${luffyST} .reaccion
┆ ${luffyST} .nsfw
┆ ${luffyST} .modohorny
┆ ${luffyST} .antispam
┆ ${luffyST} .jadibotmd
┆ ${luffyST} .modejadibot
┆ ${luffyST} .subbots
┆ ${luffyST} .detect
┆ ${luffyST} .avisos
┆ ${luffyST} .antilink
┆ ${luffyST} .audios
┆ ${luffyST} .antiver
┆ ${luffyST} .antiocultar
┆ ${luffyST} .antilink2
┆ ${luffyST} .antiarabe
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐆𝐑𝐔𝐏𝐎𝐒 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${luffyST} .admins
┆ ${luffyST} .agregar
┆ ${luffyST} .advertencia <@user>
┆ ${luffyST} .delwarn
┆ ${luffyST} .grupo abrir / cerrar
┆ ${luffyST} .group open / close
┆ ${luffyST} .delete
┆ ${luffyST} .demote <@user>
┆ ${luffyST} .promote <@user>
┆ ${luffyST} .encuesta <text|text2>
┆ ${luffyST} .kickfantasmas
┆ ${luffyST} .gpbanner
┆ ${luffyST} .gpdesc
┆ ${luffyST} .gpname
┆ ${luffyST} .hidetag
┆ ${luffyST} .infogrupo
┆ ${luffyST} .kick <@user>
┆ ${luffyST} .kicknum
┆ ${luffyST} .listonline
┆ ${luffyST} .link
┆ ${luffyST} .listadv
┆ ${luffyST} .mute
┆ ${luffyST} .unmute
┆ ${luffyST} .config
┆ ${luffyST} .restablecer
┆ ${luffyST} .setbye
┆ ${luffyST} .setwelcome
┆ ${luffyST} .testwelcome
┆ ${luffyST} .setemoji <emoji>
┆ ${luffyST} .invocar *<mensaje opcional>*
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐍𝐒𝐅𝐖 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${luffyST} .sixnine/69 @tag
┆ ${luffyST} .anal/culiar @tag
┆ ${luffyST} .blowjob/mamada @tag
┆ ${luffyST} .boobjob/rusa @tag
┆ ${luffyST} .cum/leche @tag
┆ ${luffyST} .fap/paja @tag
┆ ${luffyST} .follar @tag
┆ ${luffyST} .fuck/coger @tag
┆ ${luffyST} .footjob/pies @tag
┆ ${luffyST} .fuck2/coger2 @tag
┆ ${luffyST} .grabboobs/agarrartetas @tag
┆ ${luffyST} .grop/manosear @tag
┆ ${luffyST} .penetrar @user
┆ ${luffyST} .lickpussy/coño @tag
┆ ${luffyST} .r34 <tag>
┆ ${luffyST} .sexo/sex @tag
┆ ${luffyST} .spank/nalgada @tag
┆ ${luffyST} .suckboobs/chupartetas @tag
┆ ${luffyST} .violar/perra @tag
┆ ${luffyST} .lesbianas/tijeras @tag
┆ ${luffyST} .pack
┆ ${luffyST} .tetas
┆ ${luffyST} .undress/encuerar
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐎𝐖𝐍𝐄𝐑 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${luffyST} .addcoins *<@user>*
┆ ${luffyST} .addowner / delowner
┆ ${luffyST} .addprem [@user] <days>
┆ ${luffyST} .añadirxp
┆ ${luffyST} .copia
┆ ${luffyST} .autoadmin
┆ ${luffyST} .banuser <@tag> <razón>
┆ ${luffyST} .banlist
┆ ${luffyST} .bcgc
┆ ${luffyST} .block / unblock
┆ ${luffyST} .blocklist
┆ ${luffyST} .chetar *@user* / *<número>*
┆ ${luffyST} .cleartmp
┆ ${luffyST} .creargc
┆ ${luffyST} .deletefile
┆ ${luffyST} .delprem <@user>
┆ ${luffyST} .deschetar *@user* / *<número>*
┆ ${luffyST} .dsowner
┆ ${luffyST} =>
┆ ${luffyST} >
┆ ${luffyST} .fetch
┆ ${luffyST} .getplugin
┆ ${luffyST} .grouplist
┆ ${luffyST} .salir
┆ ${luffyST} .let
┆ ${luffyST} .prefix [prefix]
┆ ${luffyST} .quitarcoin *<@user>* / all
┆ ${luffyST} .quitarxp *<@user>*
┆ ${luffyST} .resetprefix
┆ ${luffyST} .restablecerdatos
┆ ${luffyST} .restart / reiniciar
┆ ${luffyST} .reunion
┆ ${luffyST} .savefile <ruta/nombre>
┆ ${luffyST} .saveplugin
┆ ${luffyST} .setcmd *<texto>*
┆ ${luffyST} .delcmd
┆ ${luffyST} .listcmd
┆ ${luffyST} .setimage
┆ ${luffyST} .setstatus <teks>
┆ ${luffyST} .spam2
┆ ${luffyST} .unbanuser <@tag>
┆ ${luffyST} .ip <alamat ip>
┆ ${luffyST} .update / fix
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐈𝐀 - 𝐀𝐈 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${luffyST} .dalle
┆ ${luffyST} .demo *<texto>*
┆ ${luffyST} .flux *<texto>*
┆ ${luffyST} .gemini
┆ ${luffyST} .ia
┆ ${luffyST} .llama
╰▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭╯

    ֪╔═══════════════════╗
╭╼.  🧃 ═✩═[ 𝐓𝐑𝐀𝐍𝐒𝐅𝐎𝐑𝐌𝐀𝐃𝐎𝐑 ]═✩═  💛
┆֪࣪  ╚═══════════════════╝
┆ ${luffyST} .tourl <imagen>
┆ ${luffyST} .catbox
┆ ${luffyST} .tourl3
┆ ${luffyST} .togifaud
┆ ${luffyST} .tomp3
┆ ${luffyST} .tovideo
┆ ${luffyST} .tts <lang> <teks>
┆ ${luffyST} .tts2
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
                newsletterName: '⚡ 𝙇𝙐𝙁𝙁𝙔  𝘽𝙊𝙏 𝙈𝘿 | 𝘾𝙃𝘼𝙉𝙉𝙀𝙇 ⭐',  
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