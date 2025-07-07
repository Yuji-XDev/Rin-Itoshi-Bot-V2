import { igdl } from 'ruhend-scraper';

const handler = async (m, { text, conn, args }) => {
  const url = args[0];
  if (!url) return conn.reply(m.chat, `*🥀 Ingresa un enlace válido de Facebook.*`, m);

  await m.react('🕒');

  let videoData;
  try {
    const res = await igdl(url);
    const result = res.data;

    if (!result || result.length === 0) {
      await m.react('❌');
      return conn.reply(m.chat, `🚫 No se encontraron resultados para ese enlace.`, m);
    }

    videoData = result.find(i => i.resolution === "720p (HD)") || result.find(i => i.resolution === "360p (SD)");

    if (!videoData) {
      await m.react('⚠️');
      return conn.reply(m.chat, `📉 No se encontró una calidad adecuada (720p o 360p).`, m);
    }
  } catch (e) {
    console.error('[ruhend-scraper] Error:', e.message);
    await m.react('❌');
    return conn.reply(m.chat, `❌ Error al obtener el video. Asegúrate de que el enlace sea válido y público.`, m);
  }

  try {
    await conn.sendMessage(m.chat, {
      video: { url: videoData.url },
      caption: `\`\`\`◜Facebook - Download◞\`\`\`\n\n> 🏞️ *Calidad:* ${data.resolution}
> ☄️ *Enlace:* ${args[0]}

⟢🌲 Aquí tienes: 🌪️
⟢🏞️ ¡Disfruta!`,
      fileName: 'facebook_video.mp4',
      mimetype: 'video/mp4'
    }, { quoted: m });

    await m.react('✅');
  } catch (e) {
    console.error('[sendMessage] Error:', e.message);
    await m.react('❌');
    return conn.reply(m.chat, `👻 Error al enviar el video. Intenta con otro enlace.`, m);
  }
};

handler.help = ['facebook', 'fb'];
handler.tags = ['descargas'];
handler.command = ['facebook', 'fb'];
handler.group = true;
//handler.register = true;
handler.coin = 2;

export default handler;