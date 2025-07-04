import yts from 'yt-search'
import fetch from 'node-fetch'

const handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) {
    return m.reply(`*${xdownload} Por favor, ingresa un título de YouTube.`)
  }

  await m.react('⏳')

  try {
    const search = await yts(text)
    if (!search.videos || !search.videos.length) {
      await m.react('✖️')
      return m.reply('*✖️ No se encontraron resultados.*')
    }

    const vid = search.videos[0]
    const { title, thumbnail, timestamp, views, ago, url, author, description } = vid

    const captext = `*⚡ E S P E R E:*\n☃️ descargando:\n> ${title || 'no encontrado'}
`

    await conn.sendMessage(m.chat, {
      image: { url: thumbnail },
      caption: captext
    }, { quoted: fkontak })

    const headers = {
      "accept": "*/*",
      "accept-language": "es-AR,id;q=0.9,en-US;q=0.8,en;q=0.7",
      "Referer": "https://id.ytmp3.mobi/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    }

    const initial = await fetch(`https://d.ymcdn.org/api/v1/init?p=y&23=1llum1n471&_=${Math.random()}`, { headers })
    const init = await initial.json()

    const id = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/|.*embed\/))([^&?/]+)/)?.[1]
    if (!id) throw new Error('ID de video no encontrado.')

    const convertURL = `${init.convertURL}&v=${id}&f=mp4&_=${Math.random()}`
    const converts = await fetch(convertURL, { headers })
    const convert = await converts.json()

    let info = {}
    for (let i = 0; i < 3; i++) {
      const progress = await fetch(convert.progressURL, { headers })
      info = await progress.json()
      if (info.progress === 3) break
    }

    if (!convert.downloadURL) throw new Error('No se pudo obtener el enlace de descarga.')

    await conn.sendMessage(m.chat, {
      audio: { url: convert.downloadURL },
      mimetype: 'audio/mp4'
    }, { quoted: m })

    await m.react('✅')

  } catch (e) {
    console.error(e)
    await m.react('✖️') // Error
    m.reply('*⛔ Ocurrió un error al intentar descargar o enviar el audio.*')
  }
}

handler.help = ['audio'].map(v => v + ' *<consulta>*')
handler.tags = ['downloader']
handler.command = ['audio']

export default handler