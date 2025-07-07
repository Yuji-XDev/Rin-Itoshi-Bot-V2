import axios from 'axios';

const handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) {
    return conn.reply(m.chat, `❗ *Debes proporcionar un enlace de YouTube:*\n\n🎈 *Ejemplo:* ${usedPrefix + command} https://www.youtube.com/watch?v=abc123`, m);
  }

  try {
    let res = await axios.get(`https://api.vreden.my.id/api/ytmp3?url=${encodeURIComponent(text)}`);
    let result = res.data?.result;

    if (!result || !result.url) {
      return conn.reply(m.chat, '❗ No se pudo obtener el audio. Verifica el enlace.', m);
    }

    let title = result.title || 'Audio de YouTube';
    let duration = result.duration || 'Desconocida';
    let audioUrl = result.url;
    let thumb = result.thumb;


    await conn.sendMessage(m.chat, {
      image: { url: thumb },
      caption: `╭━━〔 🎧 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 - 𝗠𝗣𝟯 〕━━⬣\n┃🎵 *Título:* ${title}\n┃⏱️ *Duración:* ${duration}\n┃🌐 YouTube.com\n╰━━━━━━━━━━━━⬣`,
    }, { quoted: m });

 
    await conn.sendMessage(m.chat, {
      audio: { url: audioUrl },
      fileName: `${title}.mp3`,
      mimetype: 'audio/mpeg',
      ptt: false
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    conn.reply(m.chat, '❌ Error al procesar el audio. Intenta con otro enlace.', m);
  }
};

handler.command = /^ytaudio$/i;
export default handler;