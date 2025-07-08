import { ytmp3, ytmp4 } from '../lib/y2mate.js';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) return m.reply(`📥 *Uso correcto:* ${usedPrefix + command} <url de YouTube>\n\n📌 *Ejemplo:* ${usedPrefix + command} https://youtu.be/VIDEO_ID`);

  // Validar URL de YouTube
  if (!/(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/i.test(args[0])) {
    return m.reply('❌ *Enlace de YouTube no válido.*');
  }

  await m.react('⏳');

  try {
    const type = /mp3|audio/i.test(command) ? 'audio' : 'video';
    const result = type === 'audio' ? await ytmp3(args[0]) : await ytmp4(args[0]);

    if (!result || !result.link) throw new Error('No se pudo obtener el enlace de descarga.');

    const caption = `🎬 *DESCARGA YOUTUBE*\n\n` +
                    `🔤 *Título:* ${result.title}\n` +
                    `📦 *Tamaño:* ${result.size}\n` +
                    `💡 *Calidad:* ${result.quality || 'N/A'}\n` +
                    `🎧 *Tipo:* ${type === 'audio' ? 'MP3 (audio)' : 'MP4 (video)'}\n` +
                    `🔗 *Enlace:* ${args[0]}`;

    if (type === 'audio') {
      await conn.sendMessage(m.chat, {
        audio: { url: result.link },
        mimetype: 'audio/mpeg',
        fileName: `${result.title}.mp3`,
        caption
      }, { quoted: m });
    } else {
      await conn.sendMessage(m.chat, {
        video: { url: result.link },
        mimetype: 'video/mp4',
        fileName: `${result.title}.mp4`,
        caption
      }, { quoted: m });
    }

    await m.react('✅');
  } catch (e) {
    console.error(e);
    await m.react('❌');
    m.reply(`❌ *Error:* ${e.message}`);
  }
};

handler.help = ['ytmp3', 'ytmp4', 'youtubedl'];
handler.tags = ['downloader'];
handler.command = /^(ytmp3|ytmp4|youtubedl)$/i;
handler.limit = true;

export default handler;