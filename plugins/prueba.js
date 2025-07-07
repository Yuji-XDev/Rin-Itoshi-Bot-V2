import axios from 'axios';
import fetch from 'node-fetch';

const isValidYouTubeUrl = (url) => {
  const ytRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w\-]{11}(&.*)?$/;
  return ytRegex.test(url);
};

const handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text || !isValidYouTubeUrl(text)) {
    return conn.reply(
      m.chat,
      `❗ *Debes proporcionar un enlace válido de YouTube:*\n\n📌 *Ejemplo:* ${usedPrefix + command} https://www.youtube.com/watch?v=abc123`,
      m
    );
  }

  try {
    const res = await axios.get(`https://api.vreden.my.id/api/ytmp3?url=${encodeURIComponent(text)}`);

    const result = res.data?.result;
    if (!result || !result.url) {
      return conn.reply(m.chat, '❌ No se pudo obtener el audio. La API respondió incorrectamente.', m);
    }

    const title = result.title || 'Audio de YouTube';
    const duration = result.duration || 'Desconocida';
    const audioUrl = result.url;
    const thumb = result.thumb;

    let thumbBuffer = null;
    if (thumb) {
      try {
        thumbBuffer = await (await fetch(thumb)).buffer();
      } catch {
        thumbBuffer = null;
      }
    }

    // Enviar imagen con info
    await conn.sendMessage(m.chat, {
      image: { url: thumb },
      caption: `╭━━〔 🎧 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 - 𝗠𝗣𝟯 〕━━⬣\n┃🎵 *Título:* ${title}\n┃⏱️ *Duración:* ${duration}\n╰━━━━━━━━━━━━⬣`,
    }, { quoted: m });

    // Enviar audio
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
          thumbnail: thumbBuffer,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });

  } catch (e) {
    console.error('[❌ ERROR EN YTAUDIO]', e.response?.data || e.message || e);
    conn.reply(m.chat, '❌ *Error al procesar el audio.*\n🔁 Intenta nuevamente con otro enlace o más tarde.', m);
  }
};

handler.command = /^ytaudio$/i;
export default handler;