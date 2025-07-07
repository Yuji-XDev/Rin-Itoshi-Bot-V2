import axios from 'axios';
import fetch from 'node-fetch';

const isValidYouTubeUrl = (url) => {
  const ytRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w\-]{11}(&.*)?$/;
  return ytRegex.test(url);
};

// Función para obtener audio de vreden.my.id
async function getAudioFromVreden(url) {
  const res = await axios.get(`https://api.vreden.my.id/api/ytmp3?url=${encodeURIComponent(url)}`);
  if (!res.data?.result?.url) throw new Error('No result from Vreden');
  return res.data.result;
}

// Función para obtener audio de dorratz.com (fallback)
async function getAudioFromDorratz(url) {
  const res = await axios.get(`https://api.dorratz.com/ytmp3?url=${encodeURIComponent(url)}`);
  if (!res.data?.result?.url) throw new Error('No result from Dorratz');
  return res.data.result;
}

const handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text || !isValidYouTubeUrl(text)) {
    return conn.reply(
      m.chat,
      `❗ *Debes proporcionar un enlace válido de YouTube:*\n\n📌 *Ejemplo:* ${usedPrefix + command} https://www.youtube.com/watch?v=abc123`,
      m
    );
  }

  let result = null;

  try {
    result = await getAudioFromVreden(text);
  } catch {
    try {
      result = await getAudioFromDorratz(text);
    } catch {
      return conn.reply(m.chat, ' No se pudo obtener el audio con ninguna API. Intenta más tarde.', m);
    }
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

  await conn.sendMessage(m.chat, {
    image: { url: thumb },
    caption: `╭━━〔 🎧 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 - 𝗠𝗣𝟯 〕━━⬣\n┃🎵 *Título:* ${title}\n┃⏱️ *Duración:* ${duration}\n╰━━━━━━━━━━━━⬣`,
  }, { quoted: m });

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
};

handler.command = /^ytaudio$/i;
export default handler;