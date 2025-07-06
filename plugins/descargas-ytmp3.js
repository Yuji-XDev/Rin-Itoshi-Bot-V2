import yts from 'yt-search';
import fetch from 'node-fetch';

const handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) return m.reply(`❗ *Ingresa el título o link de un video de YouTube.*\n\n📌 *Ejemplo:*\n${usedPrefix + command} stay justin bieber`);

  await m.react('⏳');

  try {
    const search = await yts(text);
    if (!search.videos || !search.videos.length) {
      await m.react('❌');
      return m.reply('*❌ No se encontraron resultados.*');
    }

    const vid = search.videos[0];
    const { title, thumbnail, timestamp, url, author } = vid;

    const captext = `╭━━━⊷ *Descarga en proceso...*
┃📥 *Título:* ${title}
┃🕒 *Duración:* ${timestamp}
┃👤 *Autor:* ${author.name}
╰━━━━━⬣`;

    await conn.sendMessage(m.chat, {
      image: { url: thumbnail },
      caption: captext
    }, { quoted: m });


    const headers = {
      accept: "*/*",
      "accept-language": "es-PE,es;q=0.9",
      Referer: "https://id.ytmp3.mobi/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    };

    const initFetch = await fetch(`https://d.ymcdn.org/api/v1/init?p=y&23=1llum1n471&_=${Math.random()}`, { headers });
    const init = await initFetch.json();

    const id = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/|.*embed\/))([^&?/]+)/)?.[1];
    if (!id) throw new Error('❌ ID de video no válido.');

    const convertURL = `${init.convertURL}&v=${id}&f=mp4&_=${Math.random()}`;
    const convertFetch = await fetch(convertURL, { headers });
    const convert = await convertFetch.json();

 
    let info = {};
    for (let i = 0; i < 3; i++) {
      const progress = await fetch(convert.progressURL, { headers });
      info = await progress.json();
      if (info.progress === 3) break;
    }

    if (!convert.downloadURL) throw new Error('❌ No se pudo obtener el enlace de descarga.');

    await conn.sendMessage(m.chat, {
      document: { url: convert.downloadURL },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`,
      fileLength: 99999999,
      ptt: false, 
      contextInfo: {
        externalAdReply: {
          title: title,
          body: `${author.name} • ${timestamp}`,
          mediaType: 2,
          thumbnail: await (await fetch(thumbnail)).buffer(),
          mediaUrl: url,
          sourceUrl: url,
        }
      }
    }, { quoted: m });

    await m.react('✅');

  } catch (e) {
    console.error(e);
    await m.react('❌');
    m.reply('*⛔ Error al descargar o enviar el audio.*');
  }
};

handler.help = ['audio'].map(v => v + ' <texto o link>');
handler.tags = ['downloader'];
handler.command = ['audio'];

export default handler;