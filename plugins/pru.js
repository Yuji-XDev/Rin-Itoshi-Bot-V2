const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    return conn.reply(m.chat, `🌐 *Ingresa un enlace válido de Facebook.*\n\nEjemplo:\n${usedPrefix + command} https://www.facebook.com/share/v/12DoEUCoFji/`, m);
  }

  try {
    const res = await fetch(`https://api.dorratz.com/fbvideo?url=${args[0]}`);
    const json = await res.json();

    if (!json || !Array.isArray(json) || json.length === 0) {
      return conn.reply(m.chat, '⚠️ No se encontraron videos o la API falló.', m);
    }

    const listSections = [{
      title: "🧩 Selecciona la resolución",
      rows: json.map((video, index) => ({
        title: video.resolution,
        description: `🎞️ Video disponible en ${video.resolution}`,
        rowId: `${usedPrefix + command}dl ${encodeURIComponent(video.url)}`
      }))
    }];

    const listMessage = {
      text: `🎥 *Resultados de Facebook*`,
      footer: `Selecciona una resolución para descargar el video.`,
      title: `📦 Video Detectado`,
      buttonText: "📥 Descargar resolución",
      sections: listSections
    };

    return conn.sendMessage(m.chat, listMessage, { quoted: m });

  } catch (e) {
    console.error(e);
    return conn.reply(m.chat, '❌ Error al procesar el video. Intenta con otro enlace.', m);
  }
};

// Handler para descargar el video directamente desde la URL
handler.before = async (m, { conn, args, command }) => {
  if (command === 'fb' && args[0]?.startsWith('https://') && args[0].includes('token=')) {
    try {
      await conn.sendMessage(m.chat, { video: { url: args[0] }, caption: '✅ Video descargado exitosamente.' }, { quoted: m });
      return !0;
    } catch (e) {
      console.error(e);
      return conn.reply(m.chat, '⚠️ No se pudo enviar el video. Es posible que sea demasiado grande.', m);
    }
  }
  return !1;
};

handler.command = /^yfb$/i;
export default handler;