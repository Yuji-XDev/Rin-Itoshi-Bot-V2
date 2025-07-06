import axios from 'axios';

let handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) {
    return m.reply(`❗ *Debes ingresar el nombre de una app para buscar en Play Store*\n\n📌 *Ejemplo:* \n${usedPrefix + command} WhatsApp`);
  }

  try {
    const res = await axios.get(`https://api.dorratz.com/playstore?query=${encodeURIComponent(text)}`);
    const results = res.data;

    if (!results || results.length === 0) {
      return m.reply('❌ No se encontraron resultados para tu búsqueda.');
    }

    let texto = `📱 *Resultados de Play Store para:* _${text}_\n\n`;
    for (let app of results.slice(0, 5)) {
      texto += `📌 *Nombre:* ${app.nombre || 'desconocido'}\n`;
      texto += `🧑‍💻 *Desarrollador:* ${app.desarrollador || 'desconocido'}\n`;
      texto += `⭐ *Rating:* ${app.Número_de_calificación || 'desconocido'} (${app.rating || 'desconocido'})\n`;
      texto += `🔗 *Enlace:* ${app.enlace || 'desconocido'}\n\n`;
    }

    await conn.sendMessage(m.chat, {
      text: texto.trim(),
      contextInfo: {
        externalAdReply: {
          title: results[0].nombre,
          body: results[0].desarrollador,
          thumbnailUrl: results[0].img,
          mediaType: 1,
          renderLargerThumbnail: true,
          sourceUrl: results[0].enlace
        }
      }
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    m.reply('❌ Ocurrió un error al obtener los resultados.');
  }
};

handler.command = /^playstore$/i;
export default handler;