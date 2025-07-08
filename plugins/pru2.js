const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    return conn.reply(m.chat, `✿ Ingresa un enlace de Facebook.\n\nEjemplo: *${usedPrefix + command} https://www.facebook.com/...*`, m);
  }

  try {
    await m.react('⏳');
    let url = args[0];
    let res = await fetch(`https://api.dorratz.com/v3/fb2?url=${encodeURIComponent(url)}`);
    let json = await res.json();

    if (!json.hd && !json.sd) {
      return conn.reply(m.chat, '⚠️ No se pudo obtener el video. Intenta con otro enlace.', m);
    }

    let videoUrl = json.hd || json.sd;
    let title = json.title || 'Video de Facebook';
    let thumbnail = json.thumbnail;

    await conn.sendMessage(m.chat, {
      video: { url: videoUrl },
      caption: `📹 *${title}*`,
      fileName: `facebook.mp4`,
      mimetype: 'video/mp4',
      jpegThumbnail: await (await fetch(thumbnail)).buffer()
    }, { quoted: m });

    await m.react('✅');
  } catch (e) {
    console.error(e);
    await m.react('❌');
    conn.reply(m.chat, '❌ Error al obtener el video. Intenta más tarde o con otro enlace.', m);
  }
};

handler.command = /^facebook2|fb2$/i;
export default handler;