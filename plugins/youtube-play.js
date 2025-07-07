import yts from 'yt-search';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    return conn.reply(m.chat, `❗ Ingresa un título para buscar en YouTube.`, m);
  }

  try {
    const search = await yts(text);
    const videoInfo = search.all?.[0];

    if (!videoInfo) {
      return conn.reply(m.chat, '⚠️ No se encontró ningún video. Intenta con otro título.', m);
    }

    // Validaciones y valores por defecto
    const title = videoInfo.title || 'Título desconocido';
    const duration = videoInfo.timestamp || 'Duración desconocida';
    const views = typeof videoInfo.views === 'number' ? videoInfo.views.toLocaleString() : 'No disponible';
    const author = videoInfo.author?.name || 'Autor desconocido';
    const ago = videoInfo.ago || 'Desconocido';
    const url = videoInfo.url || '';
    const thumbnail = videoInfo.thumbnail || null;

    const body = `> ⌜🌹 𖥔  Y T - P L A Y 𖥔 🌸⌟
> ╭─⊹ 🍓 *ᎢᎥ́ᏆᏞᎾ:* ${title}
> ├─⊹ ⚡ *ᎠᏌᎡᎪᏟᎥᎾ́Ꮑ:* ${duration}
> ├─⊹ 📚 *ᏉᎥᎳᏚ:* ${views}
> ├─⊹ 🎨 *ᎪᏌᏆᎻᎾᎡ:* ${author}
> ├─⊹ 🐉 *ᏢᏌᏴᏞᎥᏟᎪᎠᎾ:* ${ago}
> ╰─⊹ 🔩 *ᎬᏁᏞᎪᏟᎬ:* ${url}`;

    await conn.sendMessage(
      m.chat,
      {
        image: { url: thumbnail },
        caption: body,
        footer: '💛 ᴱˡⁱᵍᵉ ᵘⁿᵃ ᵒᵖᶜⁱᵒⁿ ᵖᵃʳᵃ ᵈᵉˢᶜᵃʳᵍᵃʳ 🎄',
        buttons: [
          { buttonId: `${usedPrefix}ytmp3 ${url}`, buttonText: { displayText: '🎧 AUDIO // MP3' }, type: 1 },
          { buttonId: `${usedPrefix}ytmp4 ${url}`, buttonText: { displayText: '📽️ VIDEO // MP4' }, type: 1 },
        ],
        viewOnce: true,
        headerType: 4,
      },
      { quoted: m }
    );

    await m.react('✅');
  } catch (error) {
    console.error(error);
    return conn.reply(m.chat, `❗ Ocurrió un error: ${error.message}`, m);
  }
};

handler.command = ['play4'];
handler.tags = ['descargas'];
handler.limit = 6;

export default handler;