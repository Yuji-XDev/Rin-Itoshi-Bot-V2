/*// codigo creado por Black.ofc
// no robes creaditos, XD

import fetch from 'node-fetch';

const handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!text) return m.reply(`*🌪️ Ingresa el nombre o link de un video de YouTube.*`);

  try {
    const api = `https://api.nekorinn.my.id/downloader/ytplay?q=${encodeURIComponent(text)}`;
    const res = await fetch(api);
    const json = await res.json();

    if (!json.status || !json.result || !json.result.downloadUrl) {
      return m.reply('❌ No se pudo obtener el video. Intenta con otro título o revisa la API.');
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
    m.reply('⚠️ Ocurrió un error al procesar el video.');
  }
};

handler.help = ['play'].map(v => v + ' <texto|url>');
handler.tags = ['downloader'];
handler.command = ['play'];

export default handler;*/


import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  if (!text) return m.reply(`*👻 Ingresa el nombre o link de un video de YouTube.*`);

  try {
 
    const infoAPI = `https://api.nekorinn.my.id/downloader/ytplay?q=${encodeURIComponent(text)}`;
    const infoRes = await fetch(infoAPI);
    const infoJson = await infoRes.json();

    if (!infoJson.status || !infoJson.result) return m.reply('⚠️ No se encontró información del video.');

    const info = infoJson.result;
    const metadata = info.metadata || {};
    const views = metadata.views || 'desconocido';
    const published = metadata.published || 'desconocido';

    
    const audioAPI = `https://api.nekorinn.my.id/downloader/ytplay-savetube?q=${encodeURIComponent(text)}`;
    const audioRes = await fetch(audioAPI);
    const audioJson = await audioRes.json();

    if (!audioJson.status || !audioJson.result) return m.reply('⚠️ No se pudo obtener el enlace de descarga.');

    const { title, channel, duration, cover, url } = audioJson.result.metadata;
    const audioUrl = audioJson.result.downloadUrl;

    const mensaje = `🎧 *${title}*\n\n` +
                    `📺 Canal: ${channel}\n` +
                    `⏱️ Duración: ${duration}\n` +
                    `📅 Publicado: ${published}\n` +
                    `👁️ Vistas: ${views}\n` +
                    `🔗 URL: ${url}`;

  
    await conn.sendFile(m.chat, cover, 'thumbnail.jpg', mensaje, m);

    
    await conn.sendFile(m.chat, audioUrl, `${title}.mp3`, null, m, false, {
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`,
      asDocument: false
    });

  } catch (e) {
    console.error(e);
    m.reply('❌ Ocurrió un error al procesar la solicitud.');
  }
};

handler.command = ['play'];
export default handler;