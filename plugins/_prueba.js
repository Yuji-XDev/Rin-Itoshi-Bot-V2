import fetch from 'node-fetch';
import { sticker } from '../lib/sticker.js';

const handler = async (m, { conn }) => {
  try {
    const res = await fetch('https://api.dorratz.com/v2/sticker-s?q=anime');
    const json = await res.json();

    const stickers = json['Url de la pegatina'];
    const titulo = json['título'] || 'Anime';
    const creador = json['creador'] || 'DIEGO-OFC';

    if (!stickers || !Array.isArray(stickers) || stickers.length === 0) {
      return m.reply('❌ No se encontraron stickers.');
    }

    const aleatorios = stickers.sort(() => Math.random() - 0.5).slice(0, 5);

    for (const url of aleatorios) {
      try {
        const stiker = await sticker(false, url, titulo, creador);
        if (stiker) {
          await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, { asSticker: true });
        } else {
          await m.reply('⚠️ No se pudo generar uno de los stickers.');
        }
        await new Promise(r => setTimeout(r, 1000)); // Espera 1 segundo entre cada envío
      } catch (err) {
        console.error('Error generando o enviando sticker:', err);
      }
    }
  } catch (e) {
    console.error('Error general:', e);
    m.reply('❌ Error al obtener los stickers.');
  }
};

handler.command = ['animepack', 'stickanime'];
handler.tags = ['sticker'];
handler.help = ['animepack'];

export default handler;