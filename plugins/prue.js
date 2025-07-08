const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    return conn.reply(m.chat, `💥 *Ingresa un enlace de YouTube válido.*`, m);
  }

  const url = args[0];
  if (!url.startsWith('http')) {
    return conn.reply(m.chat, '❗ Enlace no válido.', m);
  }

  await m.react('⏳');

  try {
    const res = await fetch(`https://mode-api-sigma.vercel.app/?url=${encodeURIComponent(url)}`);
    const json = await res.json();

    if (!json.status || !json.video) {
      return conn.reply(m.chat, '⚠️ No se pudo descargar el video. Intenta con otro enlace.', m);
    }

    const video = json.video;

    await conn.sendMessage(m.chat, {
      video: { url: video.url || video.result || video.video },
      caption: `🎬 *Título:* ${video.title || 'Desconocido'}\n📥 *Resolución:* ${video.quality || 'Desconocida'}\n\n✅ *Descargado con éxito.*`
    }, { quoted: m });

    await m.react('✅');

  } catch (e) {
    console.error(e);
    await m.react('❌');
    return conn.reply(m.chat, '❌ Error al procesar el video. Intenta más tarde.', m);
  }
};

handler.command = /^ytmode$/i;
export default handler;