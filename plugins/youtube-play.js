import yts from 'yt-search';

const handler = async (m, { conn, text, usedPrefix, command}) => {
  if (!text) {
    return conn.reply(m.chat, `*${emoji} Ingresa un título para buscar en YouTube.*`, m, fake);
  }

  try {
    const search = await yts(text);
    const videoInfo = search.all?.[0];

    if (!videoInfo) {
      return conn.reply(m.chat, '⚠︎ Ocurrió un error al buscar el video. Inténtalo de nuevo más tarde.', m);
  }

    const body = `> ✦┉┉❲ 🌹 \`Y\` \`T\` - \`P\` \`L\` \`A\` \`Y\` 🌸 ❳
> ┋ 🍓 *Título:* ${videoInfo.title}
> ┋ ⚡ *Duración:* ${videoInfo.timestamp}
> ┋ 📚 *Vistas:* ${videoInfo.views.toLocaleString()}
> ┋ 🎨 *Autor:* ${videoInfo.author.name}
> ┋ 🐉 *Publicado:* ${videoInfo.ago}
> ┋ 🔩 *Enlace:* ${videoInfo.url}
        🌴 ʀɪɴ ɪᴛᴏsʜɪ ʙᴏᴛ ᴍᴅ by ⚡
                      🌹 ᴛʜᴇ ʙʟᴀᴄᴋ.ᴏғᴄ 🌱`;

    await conn.sendMessage(
      m.chat,
      {
        image: { url: videoInfo.thumbnail},
        caption: body,
        footer: '✨ ᴱˡⁱᵍᵉ ᵘⁿᵃ ᵒᵖᶜⁱᵒⁿ ᵖᵃʳᵃ ᵈᵉˢᶜᵃʳᵍᵃʳ ⭐',
        buttons: [
          { buttonId: `${usedPrefix}yta ${videoInfo.url}`, buttonText: { displayText: '🎧 AUDIO // MP3'}, type: 1},
          { buttonId: `${usedPrefix}ytv ${videoInfo.url}`, buttonText: { displayText: '📽️ VIDEO // MP4'}, type: 1},
        ],
        viewOnce: true,
        headerType: 4,
      },
      { quoted: m}
    );

    await m.react('✅'); // Reacción de éxito
  } catch (error) {
    console.error(error);
    return conn.reply(m.chat, `❗ Ocurrió un error: ${error.message}`, m);
 }
};

handler.command = ['play3'];
handler.tags = ['descargas'];
//handler.group = true;
handler.limit = 6;

export default handler;
