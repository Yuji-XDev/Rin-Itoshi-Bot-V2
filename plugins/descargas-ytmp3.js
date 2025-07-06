import yts from 'yt-search'
import fetch from 'node-fetch'

const handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) {
    return m.reply(`❗ *Ingresa un título de YouTube:*\n\n🎄 *Ejemplo:* ${usedPrefix + command} Stay Justin Bieber`)
  }

  await m.react('⏳')

  try {
    const search = await yts(text)
    if (!search.videos || !search.videos.length) {
      await m.react('❌')
      return m.reply('*✖️ No se encontraron resultados.*')
    }

    const vid = search.videos[0]
    const { title, thumbnail, timestamp, views, ago, url, author } = vid

    
    await conn.sendMessage(m.chat, {
      image: { url: thumbnail },
      caption: `╭━━━⊷ *Descarga en proceso...*
┃📥 *Título:* ${title}
┃🕒 *Duración:* ${timestamp}
┃👤 *Autor:* ${author.name}
╰━━━━━⬣`
    }, { quoted: m })

    const headers = {
      "accept": "*/*",
      "accept-language": "es-ES,es;q=0.9",
      "Referer": "https://id.ytmp3.mobi/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    }

    const initFetch = await fetch(`https://d.ymcdn.org/api/v1/init?p=y&23=1llum1n471&_=${Math.random()}`, { headers })
    const init = await initFetch.json()

    const id = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/|.*embed\/))([^&?/]+)/)?.[1]
    if (!id) throw new Error('No se encontró el ID del video.')

    const convertURL = `${init.convertURL}&v=${id}&f=mp4&_=${Math.random()}`
    const convertRes = await fetch(convertURL, { headers })
    const convert = await convertRes.json()

    let info = {}
    for (let i = 0; i < 3; i++) {
      const progress = await fetch(convert.progressURL, { headers })
      info = await progress.json()
      if (info.progress === 3) break
    }

    if (!convert.downloadURL) throw new Error('❌ No se pudo obtener el enlace de descarga.')

    // Enviar el audio con portada y diseño bonito
    await conn.sendMessage(m.chat, {
      audio: { url: convert.downloadURL },
      mimetype: 'audio/mp4',
      ptt: false,
      fileName: `${title}.mp3`,
      contextInfo: {
        externalAdReply: {
          title: title,
          body: `🎤 ${author.name}`,
          thumbnailUrl: thumbnail,
          sourceUrl: url,
          mediaType: 2,
          showAdAttribution: true,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m })

    await m.react('✅')

  } catch (e) {
    console.error(e)
    await m.react('❌')
    m.reply('⛔ *Ocurrió un error al procesar tu solicitud.*\n\nIntenta con otro título.')
  }
}

handler.help = ['audio *<nombre o link>*']
handler.tags = ['downloader']
handler.command = ['audio']

export default handler