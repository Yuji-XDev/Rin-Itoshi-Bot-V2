import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import yts from 'yt-search'

const handler = async (m, { conn, command, args, text }) => {
  if (!text) return m.reply(`*¿Qué estás buscando?*\n\n✧ Ingresa el nombre de la canción.`)

  try {
    const results = await yts(text)
    const video = results.videos[0]

    if (!video) return m.reply('❌ No se encontraron resultados.')

    const thumbnail = video.thumbnail
    const title = video.title
    const author = video.author.name
    const duration = secondString(video.seconds)
    const url = video.url

    const imgCard = `https://random-apis.shop/generate-card?titulo=${encodeURIComponent(title)}&autor=${encodeURIComponent(author)}&thumbnail=${encodeURIComponent(thumbnail)}&tempo=${duration}`

    await conn.sendFile(m.chat, imgCard, 'preview.jpg', `🎶 *${title}*\n⇄ㅤ◁ㅤ❚❚ㅤ▷ㅤ↻\n\n⏳ Duración: ${duration}\n\n💖 Espere mientras se envía el audio...`, m)

    // Múltiples intentos con diferentes APIs
    let sent = false

    const tryApis = [
      async () => {
        const res = await fetch(`https://api.siputzx.my.id/api/d/ytmp3?url=${url}`)
        const json = await res.json()
        if (json?.data?.dl) {
          await conn.sendMessage(m.chat, { audio: { url: json.data.dl }, mimetype: 'audio/mpeg' }, { quoted: m })
          sent = true
        }
      },
      async () => {
        const res = await fetch(`https://axeel.my.id/api/download/audio?url=${url}`)
        const json = await res.json()
        if (json?.downloads?.url) {
          await conn.sendMessage(m.chat, { audio: { url: json.downloads.url }, mimetype: 'audio/mpeg' }, { quoted: m })
          sent = true
        }
      },
      async () => {
        const res = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${url}`)
        const json = await res.json()
        if (json?.result?.download?.url) {
          await conn.sendMessage(m.chat, { audio: { url: json.result.download.url }, mimetype: 'audio/mpeg' }, { quoted: m })
          sent = true
        }
      },
      async () => {
        const yt = await youtubedl(url).catch(async _ => await youtubedlv2(url))
        const dl_url = await yt.audio['128kbps'].download()
        await conn.sendFile(m.chat, dl_url, title + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
        sent = true
      }
    ]

    for (let i = 0; i < tryApis.length && !sent; i++) {
      try {
        await tryApis[i]()
      } catch (e) {
        console.log(`❌ Error en intento ${i + 1}:`, e.message)
      }
    }

    if (!sent) {
      await m.reply('❌ No se pudo descargar el audio con ninguna fuente.')
    }
  } catch (e) {
    console.error(e)
    await m.reply('⚠️ Ocurrió un error al procesar tu solicitud.')
  }
}

handler.command = ['musica']
handler.help = ['musica']
handler.tags = ['downloader']
export default handler

function secondString(seconds) {
  seconds = Number(seconds)
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}m ${s}s`
}