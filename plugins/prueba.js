import axios from 'axios';
import fetch from 'node-fetch'; // IMPORTANTE: ¡Esto era lo que faltaba!

const handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) {
    return conn.reply(m.chat, `❗ *Debes proporcionar un enlace de YouTube:*\n\n📌 *Ejemplo:* ${usedPrefix + command} https://www.youtube.com/watch?v=abc123`, m);
  }

  try {
    const res = await axios.get(`https://api.vreden.my.id/api/ytmp3?url=${url}`);

    const result = res.data?.result;
    if (!result || !result.url) {
      return conn.reply(m.chat, '❌ No se pudo obtener el audio. La API respondió incorrectamente.', m);
    }

    const title = result.title || 'Audio de YouTube';
    const duration = result.duration || 'Desconocida';
    const audioUrl = result.url;
    const thumb = result.thumb;

    // Imagen con detalles
    await conn.sendMessage(m.chat, {
      image: { url: thumb },
      caption: `╭━━〔 🎧 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 - 𝗠𝗣𝟯 〕━━⬣\n┃🎵 *Título:* ${title}\n┃⏱️ *Duración:* ${duration}\n╰━━━━━━━━━━━━⬣`,
    }, { quoted: m });

    // Audio con tarjeta enriquecida
    await conn.sendMessage(m.chat, {
      audio: { url: audioUrl },
      fileName: `${title}.mp3`,
      mimetype: 'audio/mpeg',
      ptt: false,
      contextInfo: {
        externalAdReply: {
          title: title,
          body: 'YouTube Music',
          mediaUrl: text,
          sourceUrl: text,
          thumbnail: thumb ? await (await fetch(thumb)).buffer() : null,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });

  } catch (e) {
    console.error('[❌ ERROR EN YTAUDIO]', e);
    conn.reply(m.chat, '❌ *Error al procesar el audio.*\n🔁 Intenta nuevamente con otro enlace o más tarde.', m);
  }
};

handler.command = /^ytaudio$/i;
export default handler;