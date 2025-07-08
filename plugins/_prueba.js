import { mp3, mp4 } from '../lib/y2mate.js';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    return m.reply(`📥 *Uso correcto:*\n${usedPrefix + command} <enlace de YouTube>\n\n📌 *Ejemplo:*\n${usedPrefix + command} https://youtu.be/VIDEO_ID`);
  }

  // Validar enlace de YouTube
  if (!/(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/i.test(args[0])) {
    return m.reply('❌ *Enlace inválido de YouTube.*');
  }

  await m.react('🕒');

  try {
    const isAudio = command.includes('mp3');
    const info = isAudio ? await mp3(args[0]) : await mp4(args[0]);

    if (!info || !info.link) throw new Error('No se pudo generar el enlace de descarga.');

    let caption = `🎧 *DESCARGA YOUTUBE*\n\n`;
    caption += `📌 *Título:* ${info.title}\n`;
    caption += `📁 *Tamaño:* ${info.size}\n`;
    caption += `🎚️ *Calidad:* ${info.quality || 'Desconocida'}\n`;
    caption += `🎞️ *Tipo:* ${isAudio ? 'Audio (MP3)' : 'Video (MP4)'}\n`;
    caption += `🔗 *Enlace:* ${args[0]}`;

    if (isAudio) {
      await conn.sendMessage(m.chat, {
        audio: { url: info.link },
        mimetype: 'audio/mpeg',
        fileName: `${info.title}.mp3`,
        caption
      }, { quoted: m });
    } else {
      await conn.sendMessage(m.chat, {
        video: { url: info.link },
        mimetype: 'video/mp4',
        fileName: `${info.title}.mp4`,
        caption
      }, { quoted: m });
    }

    await m.react('✅');
  } catch (err) {
    console.error(err);
    await m.react('❌');
    m.reply(`❌ *Error:* ${err.message}`);
  }
};

handler.help = ['mp3', 'mp4'];
handler.tags = ['downloader'];
handler.command = /^(mp3|mp4)$/i;
handler.limit = true;

export default handler;