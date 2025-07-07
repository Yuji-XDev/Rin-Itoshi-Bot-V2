import axios from 'axios';

const handler = async (m, { text, conn, usedPrefix, command }) => {
  const nombre = await conn.getName(m.sender);

  if (!text) {
    return m.reply('❗ Proporcióname el enlace de YouTube para que pueda ayudarte. 🎵');
  }

  try {
    await m.react('🕓');

    const response = await axios.get(`https://ytdl.axeel.my.id/api/download/audio/?url=${text}`);

    if (!response.data || !response.data.metadata || !response.data.downloads?.url) {
      return m.reply('⚠️ No se pudo obtener los datos del enlace de YouTube. Asegúrate de que el enlace sea correcto. 😕');
    }

    const { downloads } = response.data;
    const audioUrl = downloads.url;
    const titulo = downloads.title || 'audio';

    await conn.sendMessage(m.chat, {
      audio: { url: audioUrl },
      fileName: `${titulo}.mp3`,
      mimetype: 'audio/mp4'
    }, { quoted: m });

    await m.react('✅');

  } catch (error) {
    console.error('Error en comando fgdlmp3:', error);
    await m.react('✖️');
    m.reply('❌ Ocurrió un error al intentar procesar el enlace. Intenta nuevamente más tarde.');
  }
};

handler.command = ['fgdlmp3'];
export default handler;