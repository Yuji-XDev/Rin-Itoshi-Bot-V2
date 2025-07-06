/*import axios from 'axios';

const handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) {
    return conn.reply(m.chat, `❗ *Debes ingresar el enlace de un video de Facebook:*\n\n📌 *Ejemplo:* ${usedPrefix + command} https://www.facebook.com/share/v/12DoEUCoFji/`, m);
  }

  try {
    // PRIMER INTENTO: API Dorratz
    const dorratz = await axios.get(`https://api.dorratz.com/fbvideo?url=${encodeURIComponent(text)}`);
    const { title, video, thumbnail } = dorratz.data;

    await conn.sendMessage(m.chat, {
      video: { url: video.hd || video.sd },
      caption: `🎬 *${title || 'Video de Facebook'}*`,
      jpegThumbnail: await (await axios.get(thumbnail, { responseType: 'arraybuffer' })).data
    }, { quoted: m });

  } catch (e1) {
    console.log('[Dorratz Error]', e1.message);

    try {
      // SEGUNDO INTENTO: Rapidcdn (desde ejemplo dado)
      const res = await axios.get(`https://api.dorratz.com/fbvideo?url=${encodeURIComponent(text)}`);
      const { url, resolution, thumbnail } = res.data[0]; // Usa el primero

      await conn.sendMessage(m.chat, {
        video: { url },
        caption: `🎬 *Video descargado en calidad ${resolution}*`,
        jpegThumbnail: await (await axios.get(thumbnail, { responseType: 'arraybuffer' })).data
      }, { quoted: m });

    } catch (e2) {
      console.log('[RapidCDN Error]', e2.message);
      return conn.reply(m.chat, '❌ No se pudo descargar el video de Facebook con ninguna de las APIs disponibles.', m);
    }
  }
};

handler.help = ["facebook"];
handler.command = ["fb", "facebook"];
handler.tags = ["download"];

export default handler;*/

import axios from 'axios';

const handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) {
    return conn.reply(m.chat, `❗ *Debes ingresar el enlace de un video de Facebook:*\n\n📌 *Ejemplo:* ${usedPrefix + command} https://www.facebook.com/share/v/12DoEUCoFji/`, m);
  }

 
  await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  try {
    
    const dorratz = await axios.get(`https://api.dorratz.com/fbvideo?url=${encodeURIComponent(text)}`);
    const { title, video, thumbnail } = dorratz.data;

    await conn.sendMessage(m.chat, {
      video: { url: video.hd || video.sd },
      caption: `🎬 *${title || 'Video de Facebook'}*`,
      jpegThumbnail: await (await axios.get(thumbnail, { responseType: 'arraybuffer' })).data
    }, { quoted: m });

    
    return conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

  } catch (e1) {
    console.log('[Dorratz Error]', e1.message);

    try {
      
      const res = await axios.get(`https://api.dorratz.com/fbvideo?url=${encodeURIComponent(text)}`);
      const { url, resolution, thumbnail } = res.data[0];

      await conn.sendMessage(m.chat, {
        video: { url },
        caption: `🎬 *Video descargado en calidad ${resolution}*`,
        jpegThumbnail: await (await axios.get(thumbnail, { responseType: 'arraybuffer' })).data
      }, { quoted: m });

 
      return conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (e2) {
      console.log('[RapidCDN Error]', e2.message);

      await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
      return conn.reply(m.chat, '❌ No se pudo descargar el video de Facebook con ninguna de las APIs disponibles.', m);
    }
  }
};

handler.help = ["facebook"];
handler.command = ["fb", "facebook"];
handler.tags = ["download"];

export default handler;