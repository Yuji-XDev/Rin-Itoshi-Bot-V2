/*import fetch from 'node-fetch';

let handler = async (m, { conn, args, text, command }) => {
  if (!text) {
    return m.reply(`${xdownload} *Por favor, ingresa una URL válida de YouTube.*`);
  }

  if (!/^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\//i.test(text)) {
    return m.reply('⚠️ *El enlace proporcionado no parece ser de YouTube.*');
  }

  m.react('⏳');

  try {
    const res = await fetch(`https://api.neoxr.eu/api/youtube?url=${encodeURIComponent(text)}&type=video&quality=480p&apikey=GataDios`);
    const json = await res.json();

    if (!json.status || !json.data?.url) {
      return m.reply('*✖️ No se pudo obtener el video. Intenta con otro enlace.*');
    }

    await conn.sendMessage(m.chat, {
      video: { url: json.data.url },
      mimetype: 'video/mp4',
      caption: `🎈 `,
    }, { quoted: m });

    m.react('✅');
  } catch (error) {
    console.error(error);
    m.reply('*✖️ Ocurrió un error al procesar tu solicitud.*');
    m.react('✖️');
  }
};

handler.command = handler.help = ['ytv'];
handler.tags = ['downloader'];

export default handler;*/


import fetch from 'node-fetch';

let handler = async (m, { conn, args, text, command }) => {
  if (!text) {
    return m.reply('⚠️ *Por favor, ingresa una URL válida de YouTube.*');
  }

  if (!/^https?:\/\/(www\.)?(youtube\.com|youtu\.be)\//i.test(text)) {
    return m.reply('⚠️ *El enlace proporcionado no parece ser de YouTube.*');
  }

  m.react('⏳');

  try {
    const res = await fetch(`https://api.neoxr.eu/api/youtube?url=${encodeURIComponent(text)}&type=video&quality=480p&apikey=GataDios`);
    const json = await res.json();

    if (!json.status || !json.data?.url) {
      return m.reply('*✖️ No se pudo obtener el video. Intenta con otro enlace.*');
    }

    await conn.sendMessage(m.chat, {
      video: { url: json.data.url },
      mimetype: 'video/mp4',
      caption: `╭━━🎬 *YOUTUBE VIDEO DOWNLOADER* ━━⬣
┃📌 *Título:* ${json.data.title || 'No disponible'}
┃📺 *Canal:* ${json.data.channel || 'No disponible'}
┃📅 *Publicado:* ${json.data.published || 'No disponible'}
┃⏱️ *Duración:* ${json.data.duration || 'No disponible'}
┃📥 *Calidad:* 480p
┃🔗 *Enlace:* ${text}
╰━━━━━━━━━━━━━━━━━━━━⬣

✅ *Descarga completa con éxito.*  
🔥 _By Sukuna Bot MD_ 🔥`,
    }, { quoted: m });

    m.react('✅');
  } catch (error) {
    console.error(error);
    m.reply('*✖️ Ocurrió un error al procesar tu solicitud.*');
    m.react('✖️');
  }
};

handler.command = handler.help = ['ytv'];
handler.tags = ['downloader'];

export default handler;