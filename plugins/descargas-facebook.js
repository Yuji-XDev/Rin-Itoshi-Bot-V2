const aio = async (url) => {
  try {
    const response = await fetch("https://anydownloader.com/wp-json/aio-dl/video-data/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Referer": "https://anydownloader.com/",
        "Token": "5b64d1dc13a4b859f02bcf9e572b66ea8e419f4b296488b7f32407f386571a0d"
      },
      body: new URLSearchParams({ url }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const handler = async (m, { text, conn, args }) => {
  const rwait = '⏳';
  const done = '✅';
  const error = '⚠️';
  const msm = '❗';

  if (!args[0]) {
    return conn.reply(m.chat, `🎄 Por favor, ingresa un enlace de Facebook.`, m);
  }

  try {
    await m.react(rwait);

    const res = await aio(args[0]);

    if (!res || !res.url) {
      await m.react(error);
      return conn.reply(m.chat, `😕 No se pudo obtener el video.`, m);
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
        video: { url: res.url },
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
handler.register = true;
handler.coin = 2;

export default handler;