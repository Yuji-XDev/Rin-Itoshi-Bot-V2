// codigo creado por Black.ofc
// no robes creaditos, XD

import fetch from 'node-fetch';

const handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!text) return m.reply(`*🌪️ Ingresa el nombre o link de un video de YouTube.*`);

  try {
    const api = `https://api.nekorinn.my.id/downloader/ytplay?q=${encodeURIComponent(text)}`;
    const res = await fetch(api);
    const json = await res.json();

    if (!json.status || !json.result || !json.result.downloadUrl) {
      return m.reply('*❌ No se pudo obtener el audio. Intenta con otro título.*');
    }

    const { title, channel, duration, cover, url } = json.result.metadata;
    const downloadUrl = json.result.downloadUrl;

    await conn.sendMessage(m.chat, {
      image: { url: cover },
      caption: `➤ 🌴 *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}\n➤ 🌪️ *Canal:* ${channel}\n➤ ⏱ *Duración:* ${duration}\n➤ 🏞️ *Link:* ${url}`,
      contextInfo: {
        externalAdReply: {
          title: title,
          body: '☄️ DESCARGAS - PLAY ⛩️',
          thumbnailUrl: cover,
          sourceUrl: url,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });

    await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, mimetype: 'audio/mpeg', fileName: `${title}.mp3` }, { quoted: fkontak });

  } catch (e) {
    console.error(e);
    m.reply('*⚠️ Ocurrió un error al procesar el video*.');
  }
};

handler.help = ['play'].map(v => v + ' <texto|url>');
handler.tags = ['downloader'];
handler.command = ['play'];

export default handler;