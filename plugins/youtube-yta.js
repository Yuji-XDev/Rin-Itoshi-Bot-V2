/*import fetch from 'node-fetch';

let handler = async (m, { conn, args, command, usedPrefix}) => {
  const text = args.join(" ");
  if (!text) {
    return m.reply(
      `*❌ Por favor, ingresa un título o URL de YouTube.*`
);
}
  await m.react('⌛');

  try {
    const res = await fetch(`https://api.nekorinn.my.id/downloader/spotifyplay?q=${encodeURIComponent(text)}`);
    const json = await res.json();

    if (!json.status ||!json.result?.downloadUrl) {
      return m.reply(
        `😨 *No se encontró resultado para:* ${text}`
);
}

    const { title, artist, duration, cover, url} = json.result.metadata;
    const audio = json.result.downloadUrl;

    await conn.sendMessage(m.chat, {
      image: { url: cover},
      caption: `➤ 🌴 *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}
➤ 🌲 *𝙰𝚁𝚃𝙸𝚂𝚃𝙰:* ${artist}
➤ ⏱️ *𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽:* ${duration}

> 🎧 𝑬𝒔𝒕𝒐𝒚 𝒑𝒓𝒐𝒄𝒆𝒔𝒂𝒏𝒅𝒐 𝒕𝒖 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂....`
}, { quoted: m});

  
    await conn.sendMessage(m.chat, {
      audio: { url: audio},
      mimetype: 'audio/mp4',
      ptt: false,
      fileName: `${title}.mp3`
}, { quoted: fkontak});

    await m.react('✅');

} catch (e) {
    console.error(e);
    return m.reply(
      `❌ No se pudo obtener el audio. Intenta con otro título o más tarde.`
);
}
};

handler.help = ['play1','play'];
handler.tags = ['descargas'];
handler.command = ['play1','play']
//handler.register = true;

export default handler;
*/


// codigo creado por Black.ofc

import fetch from 'node-fetch';

const handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!text) return m.reply(`*🌪️ Ingresa el nombre o link de un video de YouTube.*`);

  try {
    const api = `https://api.nekorinn.my.id/downloader/ytplay?q=${encodeURIComponent(text)}`;
    const res = await fetch(api);
    const json = await res.json();

    if (!json.status || !json.result || !json.result.downloadUrl) {
      return m.reply('❌ No se pudo obtener el video. Intenta con otro título o revisa la API.');
    }

    const { title, channel, duration, cover, url } = json.result.metadata;
    const downloadUrl = json.result.downloadUrl;

    await conn.sendMessage(m.chat, {
      image: { url: cover },
      caption: `➤ 🌴 *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}\n➤ 🌪️ *Canal:* ${channel}\n➤ ⏱ *Duración:* ${duration}\n➤ 🏞️ *Link:* ${url}`,
      contextInfo: {
        externalAdReply: {
          title: title,
          body: channel,
          thumbnailUrl: cover,
          sourceUrl: url,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });

    await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, mimetype: 'audio/mpeg', fileName: `${title}.mp3` }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply('⚠️ Ocurrió un error al procesar el video.');
  }
};

handler.help = ['play'].map(v => v + ' <texto|url>');
handler.tags = ['downloader'];
handler.command = ['play'];

export default handler;