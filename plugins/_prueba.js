import fetch from 'node-fetch';

const handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!text) return m.reply(`📥 Ingresa el nombre o link de un video de YouTube.`);

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
      caption: `🎵 *Título:* ${title}\n📺 *Canal:* ${channel}\n⏱ *Duración:* ${duration}\n🔗 *Link:* ${url}`,
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

    await conn.sendFile(m.chat, downloadUrl, `${title}.mp4`, null, m, true);

  } catch (e) {
    console.error(e);
    m.reply('⚠️ Ocurrió un error al procesar el video.');
  }
};

handler.help = ['ytplay480'].map(v => v + ' <texto|url>');
handler.tags = ['downloader'];
handler.command = ['ytplay480'];

export default handler;