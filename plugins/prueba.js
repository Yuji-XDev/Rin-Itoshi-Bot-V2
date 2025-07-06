import axios from 'axios';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    return m.reply(`❗ *Debes proporcionar un enlace de YouTube:*\n\n📌 Ejemplo: *${usedPrefix + command} https://www.youtube.com/watch?v=VU1-vzuJNIs*`);
  }

  try {
    console.log('[URL proporcionada]:', text);
    const api = `https://api.dorratz.com/v3/ytmp3?url=${encodeURIComponent(text)}`;
    console.log('[Llamando API]:', api);

    const res = await axios.get(api, {
      headers: { 'Accept': 'application/json' }
    });

    console.log('[Respuesta API]:', res.data);

    if (!res.data?.result?.url) {
      throw new Error('No se pudo obtener el MP3.');
    }

    const { title, url, size, thumbnail } = res.data.result;

    await conn.sendMessage(m.chat, {
      audio: { url },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`,
      ptt: false,
      contextInfo: {
        externalAdReply: {
          title: "Descarga completada 🎶",
          body: title,
          mediaType: 2,
          thumbnailUrl: thumbnail || null,
          sourceUrl: text
        }
      }
    }, { quoted: m });

  } catch (e) {
    console.error('[Error]:', e);
    m.reply(`❌ Ocurrió un error al descargar el MP3.\n\n${e?.response?.data?.message || e.message}`);
  }
};

handler.command = /^ytmp3|yta|ytmusica$/i;
handler.help = ['ytmp3 <enlace>'];
handler.tags = ['downloader'];

export default handler;