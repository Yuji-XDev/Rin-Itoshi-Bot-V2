import axios from 'axios';

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!text) {
    return m.reply(`❗ *Debes proporcionar un enlace de YouTube:*\n\n📌 Ejemplo: *${usedPrefix + command} https://www.youtube.com/watch?v=VU1-vzuJNIs*`);
  }

  try {
    const api = `https://api.dorratz.com/v3/ytmp3?url=${encodeURIComponent(text)}`;
    const res = await axios.get(api);

    if (!res.data || !res.data.result || !res.data.result.url) {
      throw new Error('No se pudo obtener el MP3.');
    }

    const { title, url, size } = res.data.result;

    await conn.sendMessage(m.chat, {
      audio: { url: url },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`,
      ptt: false, // true si quieres enviarlo como audio de voz
      contextInfo: {
        externalAdReply: {
          title: "Descarga completada 🎶",
          body: title,
          mediaType: 2,
          thumbnailUrl: res.data.result.thumbnail || null,
          sourceUrl: text
        }
      }
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply(`❌ Ocurrió un error al descargar el MP3.\n\n${e.message}`);
  }
};

handler.command = /^ytmp3|yta|ytmusica$/i;
handler.help = ['ytmp3 <enlace>'];
handler.tags = ['downloader'];

export default handler;