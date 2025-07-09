import fetch from 'node-fetch';
import { sticker } from '../lib/sticker.js';

const handler = async (m, { conn }) => {
  try {
    const res = await fetch('https://api.dorratz.com/v2/sticker-s?q=anime');
    const json = await res.json();

    const stickers = json['Url de la pegatina'];

    if (!stickers || stickers.length === 0) {
      return m.reply('❌ No se encontraron stickers.');
    }

  
    const aleatorios = stickers.sort(() => Math.random() - 0.5).slice(0, 5);

    for (const url of aleatorios) {
      const stiker = await sticker(false, url, json['título'], json['CreatorPack']);
      if (stiker) {
        await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, { asSticker: true });
        await new Promise(r => setTimeout(r, 1000)); // Espera 1 segundo entre envíos
      } else {
        await m.reply('⚠️ Uno de los stickers no pudo ser generado.');
      }
    }
  } catch (e) {
    console.error(e);
    m.reply('❌ Error al obtener los stickers.');
  }
};

handler.command = ['animepack', 'stickanime'];
handler.tags = ['sticker'];
handler.help = ['animepack'];

export default handler;