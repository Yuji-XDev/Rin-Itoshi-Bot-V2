import yts from 'yt-search';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    return conn.reply(m.chat, `*❗ Ingresa un título para buscar en YouTube.*`, m, rcanal);
  }

  try {
    const search = await yts(text);
    const videoInfo = search.all?.[0];

    if (!videoInfo) {
      return conn.reply(m.chat, '⚠️ No se encontró ningún video. Intenta con otro título.', m);
    }

  
    const title = videoInfo.title || 'Título desconocido';
    const duration = videoInfo.timestamp || 'Duración desconocida';
    const views = typeof videoInfo.views === 'number' ? videoInfo.views.toLocaleString() : 'No disponible';
    const author = videoInfo.author?.name || 'Autor desconocido';
    const ago = videoInfo.ago || 'Desconocido';
    const url = videoInfo.url || '';
    const thumbnail = videoInfo.thumbnail || null;

    const body = `⌜⚔️ 𝙎𝙐𝙆𝙐𝙉𝘼 𝙔𝙏-𝙋𝙇𝘼𝙔 🌑⌟
╭━━━❖━═┈➤
┃✨ *𝙏𝙞́𝙩𝙪𝙡𝙤:* ${title}
┃🕰️ *𝘿𝙪𝙧𝙖𝙘𝙞𝙤́𝙣:* ${duration}
┃📊 *𝙑𝙞𝙨𝙩𝙖𝙨:* ${views}
┃🎤 *𝘼𝙪𝙩𝙤𝙧:* ${author}
┃📅 *𝙋𝙪𝙗𝙡𝙞𝙘𝙖𝙙𝙤:* ${ago}
┃🔗 *𝙀𝙣𝙡𝙖𝙘𝙚:* ${url}
╰━━━━━⊰🍷⊱━━━━━`;

    await conn.sendMessage(
      m.chat,
      {
        image: { url: thumbnail },
        caption: body,
        footer: '💛 ᴱˡⁱᵍᵉ ᵘⁿᵃ ᵒᵖᶜⁱᵒⁿ ᵖᵃʳᵃ ᵈᵉˢᶜᵃʳᵍᵃʳ 🎄  \n╰───► ᴬᵘᵈⁱᵒ 🎧 | ➍𝟠𝟢ᵖ ➍𝟠𝟢ᵖ ᵛⁱᵈᵉᵒ 🎥',
        buttons: [
          { buttonId: `${usedPrefix}ytmp3 ${url}`, buttonText: { displayText: '🎧 𓆩 𝗔𝗨𝗗𝗜𝗢 · 𝗠𝗣𝟯 𓆪' }, type: 1 },
          { buttonId: `${usedPrefix}ytv ${url}`, buttonText: { displayText: '📽️ 𓆩 𝗩𝗜𝗗𝗘𝗢 · 𝗠𝗣𝟰 𓆪' }, type: 1 },
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

handler.command = ['play2'];
handler.tags = ['descargas'];
//handler.limit = 6;

export default handler;