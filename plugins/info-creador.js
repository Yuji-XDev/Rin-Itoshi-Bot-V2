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

// Código creado por Deylin
// https://github.com/Deylin-eliac 
// codigo creado para https://github.com/Deylin-eliac/Pikachu-bot 
// No quites créditos

import PhoneNumber from 'awesome-phonenumber';

let handler = async (m, { conn }) => {
  m.react('🧃');
  
const imageUrl = 'https://raw.githubusercontent.com/Deylin-Eliac/Pikachu-Bot/main/src/IMG-20250613-WA0194.jpg'
  const numCreador = '50433191934';
  const ownerJid = numCreador + '@s.whatsapp.net';
  const name = await conn.getName(ownerJid) || 'Deylin';
  const about = (await conn.fetchStatus(ownerJid).catch(() => {}))?.status || `Hola, mucho gusto. Soy Deylin.`;
  const empresa = 'Deylin - Servicios Tecnológicos';

  const vcard = `
BEGIN:VCARD
VERSION:3.0
N:;${name};;;
FN:${name}
ORG:${empresa};
TITLE:CEO & Fundador
TEL;waid=${numCreador}:${new PhoneNumber('+' + numCreador).getNumber('international')}
EMAIL:correo@empresa.com
URL:https://www.tuempresa.com
NOTE:${about}
ADR:;;Dirección de tu empresa;;;;
X-ABADR:ES
X-ABLabel:Dirección Web
X-ABLabel:Correo Electrónico
X-ABLabel:Teléfono de contacto
X-WA-BIZ-NAME:${name}
X-WA-BIZ-DESCRIPTION:${about}
END:VCARD`.trim();


  await conn.sendMessage(
    m.chat,
    {
      contacts: {
        displayName: name,
        contacts: [{ vcard }]
      },
      contextInfo: {
        mentionedJid: [m.sender],
        isForwarded: true,
        forwardingScore: 999,
        forwardedNewsletterMessageInfo: {
          newsletterJid: channelRD.id,
          newsletterName: channelRD.name,
          serverMessageId: -1,
        },
        externalAdReply: {
          title: textbot,
          body: dev,
          thumbnailUrl: imageUrl,
          sourceUrl: redes,
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true,
        },
      }
    },
    { quoted: m }
  );
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['owner', 'creator', 'creador', 'dueño'];

export default handler;