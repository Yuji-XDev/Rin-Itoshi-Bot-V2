import { fbdl } from 'ruhend-scraper';

const handler = async (m, { text, conn, args }) => {
  const rwait = '⏳';
  const done = '✅';
  const error = '⚠️';
  const msm = '❗';

  if (!args[0]) {
    return conn.reply(m.chat, `📌 Por favor, ingresa un enlace de Facebook.`, m);
  }

  try {
    await m.react(rwait);

    const res = await fbdl(args[0]);

    if (!res || !res.data || res.data.length === 0) {
      await m.react(error);
      return conn.reply(m.chat, `😕 No se encontraron resultados.`, m);
    }

    const videoData =
      res.data.find(i => i.resolution === "720p (HD)") ||
      res.data.find(i => i.resolution === "360p (SD)") ||
      res.data[0];

    if (!videoData || !videoData.url) {
      await m.react(error);
      return conn.reply(m.chat, `😕 No se encontró una resolución adecuada.`, m);
    }

  
    const title = res.title || "Título no disponible";
    const duration = res.duration || "Desconocida";
    const published = res.published || "No especificada";
    const likes = res.likes || res.reactions || "No disponible";
    const comments = res.comments || "No disponible";
    const shares = res.shares || "No disponible";
    const source = args[0];

    const caption = `
🎬 *${title}*
⏱️ *Duración:* ${duration}
📅 *Publicado:* ${published}

👍 *Me gusta:* ${likes}
💬 *Comentarios:* ${comments}
🔁 *Compartido:* ${shares}

🌐 *Enlace:* ${source}
`.trim();

    await conn.sendMessage(
      m.chat,
      {
        video: { url: videoData.url },
        caption,
        fileName: 'facebook.mp4',
        mimetype: 'video/mp4'
      },
      { quoted: m }
    );

    await m.react(done);

  } catch (e) {
    console.error(e);
    await m.react(error);
    return conn.reply(m.chat, `${msm} Ocurrió un error al procesar el enlace.`, m);
  }
};

handler.help = ['facebook', 'fb'];
handler.tags = ['descargas'];
handler.command = ['facebook', 'fb'];
//handler.group = true;
handler.register = true;
handler.coin = 2;

export default handler;