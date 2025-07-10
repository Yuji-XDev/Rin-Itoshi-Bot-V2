import fetch from 'node-fetch';

const handler = async (m, { conn, args, command }) => {
  if (!args[0]) return m.reply('*📥 Ingresa el enlace de un video de YouTube.*');

  const videoUrl = args[0];
  const quality = '480p'; // Puedes cambiar a 360p, 720p, etc.
  const apiKey = 'russellxz';

  const api = `https://api.neoxr.eu/api/youtube?url=${encodeURIComponent(videoUrl)}&type=video&quality=${quality}&apikey=${apiKey}`;

  try {
    m.react('⏳'); // Reacción de espera
    const res = await fetch(api);
    const json = await res.json();

    if (!json.status) throw new Error('❌ No se pudo obtener el video.');

    const result = json.result;
    const title = result.title || 'Sin título';
    const size = result.size || 'Desconocido';
    const thumb = result.thumbnail;
    const download = result.url;

    await conn.sendFile(m.chat, thumb, 'thumb.jpg', `📹 *${title}*\n📦 Tamaño: ${size}\n\n⬇️ Enviando video...`, m);

    await conn.sendFile(m.chat, download, `${title}.mp4`, null, m);

  } catch (e) {
    console.error(e);
    m.reply('⚠️ Error al descargar el video. Asegúrate de que el enlace sea válido y que la API esté funcionando.');
  }
};

handler.command = ['ytvideo', 'ytmp4'];
export default handler;