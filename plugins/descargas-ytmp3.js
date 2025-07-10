// codigo creado por Black.ofc 💥
// no robes creaditos

import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`*⛩️ Ingresa un link de YouTube 🌲*`);

  try {

    await conn.sendMessage(m.chat, { react: { text: '⏱️', key: m.key }});

    const api = `https://api.nekorinn.my.id/downloader/ytplay?q=${encodeURIComponent(text)}`;
    const res = await fetch(api);
    const json = await res.json();

    if (!json.status || !json.result || !json.result.downloadUrl) {
      return m.reply('❌ No se pudo obtener el audio. Intenta con otro título o revisa la API.');
    }

    const { title, channel, duration, cover } = json.result.metadata;
    const downloadUrl = json.result.downloadUrl;
    const sourceUrl = json.result.metadata.url || text;

    let thumb;
    try {
      const thumbRes = await conn.getFile(cover);
      thumb = thumbRes?.data;
    } catch {
      thumb = null;
    }

    await conn.sendMessage(m.chat, {
      audio: { url: downloadUrl },
      mimetype: 'audio/mpeg',
      ptt: false,
      contextInfo: {
        externalAdReply: {
          title: title,
          body: `YOUTUBE • MP3`,
          mediaUrl: sourceUrl,
          sourceUrl: sourceUrl,
          thumbnail: thumb,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: fkontak });


    await conn.sendMessage(m.chat, { react: { text: '✔️', key: m.key }});

  } catch (e) {
    console.error(e);
    m.reply('⚠️ Ocurrió un error al procesar el audio. Intenta de nuevo.');

    await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key }});
  }
};

handler.help = ['ytmp3'].map(v => v + ' <nombre o link>');
handler.tags = ['downloader'];
handler.command = ['ytmp3', 'yta'];

export default handler;