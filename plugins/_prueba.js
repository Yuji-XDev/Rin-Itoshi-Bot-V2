import fetch from 'node-fetch';

const handler = async (m, { text, conn, args, usedPrefix, command }) => {
  const url = args[0];
  if (!url || !url.includes('youtube.com') && !url.includes('youtu.be')) {
    return m.reply(`❌ Ingresa un enlace de YouTube válido.\n\nEjemplo: ${usedPrefix + command} https://youtu.be/dQw4w9WgXcQ`);
  }

  try {
    const apiUrl = `https://api.koboo.my.id/api/download/youtube?url=${encodeURIComponent(url)}&format=480`;
    const res = await fetch(apiUrl);
    const json = await res.json();

    if (json.status !== 200 || !json.result || json.result.status === false) {
      return m.reply(`⚠️ Error al procesar el video:\n${json.result?.error || 'Error desconocido.'}`);
    }

    const result = json.result;
    await conn.sendFile(m.chat, result.url, 'video.mp4', `🎬 *Título:* ${result.title || 'Desconocido'}\n📥 *Tamaño:* ${result.size || 'N/A'}`, m);
  } catch (e) {
    console.error(e);
    m.reply('❌ Ocurrió un error al descargar el video.');
  }
};

handler.command = /^yt480|youtube480$/i;
export default handler;