/*let handler = async (m, { conn }) => {
  const creatorNumber = '51969214380';
  const creatorName = '⚡ THE BLACK 🍁';
  const github = 'https://github.com/the-27';
  const imageUrl = 'https://files.catbox.moe/embijg.jpg';
  const userId = m.sender;

  // 💼 Tarjeta de contacto vCard
  const vcard = `
BEGIN:VCARD
VERSION:3.0
N:;${creatorName};;;
FN:${creatorName}
TEL;type=CELL;type=VOICE;waid=${creatorNumber}:${creatorNumber}
END:VCARD`.trim();

  
  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: creatorName,
      contacts: [{ vcard }]
    }
  }, { quoted: m });

  
  const text = `
┏━━『 👑 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 - 𝐁𝐎𝐓 』━━┓
┃
┃ 💎 *Nombre:* ${creatorName}
┃ 📞 *Número:* wa.me/${creatorNumber}
┃ 🌐 *GitHub:* ${github}
┃
┗━━━━━━━━━━━━━━━━━━━━┛
✨ ᴇɴʟᴀᴄᴇs ᴜ́ᴛɪʟᴇs • ɪɴꜰᴏʀᴍᴀᴄɪᴏ́ɴ`;

  
  await conn.sendMessage(m.chat, {
    text,
    contextInfo: {
      mentionedJid: [userId],
      externalAdReply: {
        title: '✧ Información del creador ✧',
        body: creatorName,
        thumbnailUrl: imageUrl,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true,
        sourceUrl: `https://wa.me/${creatorNumber}`
      }
    }
  }, { quoted: m });
};

handler.help = ['creador', 'owner'];
handler.tags = ['info'];
handler.command = ['owner', 'creator', 'creador', 'dueño'];

export default handler;*/

const handler = async (m, { conn, usedPrefix, command }) => {
  const vcard = `
BEGIN:VCARD
VERSION:3.0
N:Black.OFC;;;
FN:Black.OFC
TEL;type=CELL;type=VOICE;waid=51969214380:+51 969 214 380
END:VCARD
  `.trim();

  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: "Black.OFC",
      contacts: [{ vcard }]
    }
  }, { quoted: m });
};

handler.command = ['creador', 'owner', 'black'];
handler.tags = ['info'];
handler.help = ['creador'];

export default handler;