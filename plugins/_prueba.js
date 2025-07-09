import { ytmp3 } from 'y2mate-dl'
import yts from 'yt-search'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, args }) => {
  if (!text) return m.reply('❌ Ingresa un título o link de YouTube.')

  let ytres = await search(args.join(' '))
  if (!ytres.length) return m.reply('❌ No se encontraron resultados.')

  let izumi = ytres[0]
  let txt = `🎵 *${izumi.title}*\n⏱️ ${izumi.timestamp} • ${izumi.author.name}`

  await conn.sendFile(m.chat, izumi.image, 'thumb.jpg', txt, m)

  try {
    const res = await ytmp3(izumi.url)
    if (!res.status || !res.mp3) throw new Error('No se pudo generar audio.')

    await conn.sendMessage(
      m.chat,
      {
        audio: { url: res.mp3 },
        mimetype: 'audio/mpeg',
        fileName: `${res.title}.mp3`,
        ptt: false
      },
      { quoted: m }
    )
  } catch (e) {
    console.error(e)
    m.reply(`❌ Error al descargar el audio.\n${e.message}`)
  }
}

handler.command = ['play5']
handler.tags = ['dl']
handler.help = ['play5']

export default handler

async function search(query) {
  const r = await yts.search({ query, hl: 'es', gl: 'ES' })
  return r.videos
}