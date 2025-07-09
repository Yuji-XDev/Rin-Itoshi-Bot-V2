import fetch from 'node-fetch';

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) return m.reply(`📥 *Uso correcto:* ${usedPrefix + command} <url de YouTube>\n\n📌 *Ejemplo:* ${usedPrefix + command} https://youtube.com/watch?v=TdrL3QxjyVw`);

  try {
    const res = await fetch(`https://cloudkutube.eu/api/ytv?url=${encodeURIComponent(args[0])}&resolution=480`);
    if (!res.ok) throw await res.text();
    const json = await res.json();

    if (!json || !json.result || !json.result.url) return m.reply('❌ Error: No se pudo obtener el video.');

    const { title, thumbnail, size, url } = json.result;

    const fileSizeMB = parseFloat(size.replace('MB', '').trim());
    const isLarge = fileSizeMB > 30;

    await conn.sendMessage(m.chat, {
      image: { url: thumbnail },
      caption: `🎬 *Título:* ${title}\n📦 *Tamaño:* ${size}\n📥 *Resolución:* 480p\n\n⏳ Enviando archivo...`,
    }, { quoted: m });

    await conn.sendMessage(m.chat, {
      [isLarge ? 'document' : 'video']: { url },
      mimetype: 'video/mp4',
      fileName: `${title}.mp4`
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply('❌ Ocurrió un error al intentar descargar el video.');
  }
};

handler.help = ['yt480 <url>'];
handler.tags = ['downloader'];
handler.command = /^yt480$/i;

export default handler;