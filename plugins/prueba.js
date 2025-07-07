import axios from 'axios';

const handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) return conn.reply(m.chat, `⚠️ *Ingresa el nombre del audio que deseas buscar.*\n\n📌 Ejemplo: ${usedPrefix + command} snowfall`, m);

  await m.react('🔎');

  try {
    const api = `http://optishield.zapto.org:34093/api/?type=ytdl&user=black.ofc&query=${encodeURIComponent(text)}&formato=audio&id=2`;
    const res = await axios.get(api);

    const { audio, titulo, canal, artista, descripcion, views, fecha, creador } = res.data;

   /* if (!audio || audio === 'Vuelve a Intentarlo') {
      return conn.reply(m.chat, '❌ No se pudo descargar el audio. Intenta con otro nombre o más tarde.', m);*/
    }

    const info = `
╭─〔 *🎵 AUDIO ENCONTRADO* 〕─⬣
│📌 *Título:* ${titulo}
│🎤 *Artista:* ${artista}
│📺 *Canal:* ${canal}
│🗓️ *Publicado:* ${fecha}
│👁️ *Vistas:* ${views}
│👤 *Extraído por:* ${creador}
╰──────────────⬣

📝 *Descripción:* 
${descripcion}
`.trim();

    await conn.sendMessage(m.chat, { audio: { url: audio }, fileName: `${titulo}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m });
    await conn.sendMessage(m.chat, { text: info }, { quoted: m });

  } catch (e) {
    console.error(e);
    conn.reply(m.chat, '⚠️ Ocurrió un error al intentar obtener el audio.', m);
  }
};

handler.command = ['ytaapi', 'playapi'];
handler.help = ['ytaapi <texto>'];
handler.tags = ['downloader'];

export default handler;