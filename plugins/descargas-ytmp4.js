import axios from 'axios';

const handler = async (m, { text, conn, usedPrefix, command }) => {
  const nombre = await conn.getName(m.sender)
  if (!text) return m.reply('Proporcióname el enlace de YouTube para que pueda ayudarte. 🎥');

  try {
    await m.react('🕓');

    const response = await axios.get(`https://ytdl.axeel.my.id/api/download/video/?url=${text}`);

    if (!response.data || !response.data.metadata) {
      return m.reply('No se pudo obtener los datos del enlace de YouTube. Asegúrate de que el enlace sea correcto. 😕');
    }

    const { metadata, downloads } = response.data;

    const videoUrl = downloads.url;
    const thumbnailUrl = metadata.thumbnail.url;

    await conn.sendMessage(m.chat, {
      video: {
        url: videoUrl
      },
      caption: `*• Título*: ${metadata.title}`,
    }, { quoted: m });

    await m.react('✅');

  } catch (error) {
    await m.react('✖️');
  }
};

handler.help = ['video'];
handler.tags = ['downloader'];
handler.command = ['video'];
export default handler;