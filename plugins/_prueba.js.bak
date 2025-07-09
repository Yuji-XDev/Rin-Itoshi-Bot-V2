import fetch from 'node-fetch'
import yts from 'yt-search'

let handler = async (m, { conn, text, args }) => {
  if (!text) {
    return m.reply(`╭━━〔 *❗ 𝗜𝗻𝗴𝗿𝗲𝘀𝗮 𝘂𝗻 𝘁𝗶𝘁𝘂𝗹𝗼* 〕━━⬣
┃✧ *Ejemplo:* .play5 La Diabla
╰━━━━━━━━━━━━━━━━━━━━⬣`)
  }

  let ytres = await search(args.join(" "))
  if (!ytres.length) return m.reply("❌ No se encontraron resultados para tu búsqueda.")

  let izumi = ytres[0]
  let txt = `╭━━〔 *𝐒𝐔𝐊𝐔𝐍𝐀 𝐌𝐃* 〕━━⬣
┃🌴 *Título:* ${izumi.title}
┃⏱️ *Duración:* ${izumi.timestamp}
┃📅 *Publicado:* ${izumi.ago}
┃🎄 *Canal:* ${izumi.author.name || 'Desconocido'}
┃🌪️ *Url:* ${izumi.url}
╰━━━━━━━━━━━━━━━━━━━━⬣`

  await conn.sendFile(m.chat, izumi.image, 'thumbnail.jpg', txt, m)

  try {
    // PRIMER INTENTO: Vihangayt
    const api1 = await fetch(`https://vihangayt.me/download/ytmp3?url=${encodeURIComponent(izumi.url)}`)
    const json1 = await api1.json()

    if (json1.status && json1.url) {
      await sendAudio(conn, m, izumi.title, json1.url)
      return
    }

    // SEGUNDO INTENTO: Bochilteam
    const api2 = await fetch(`https://api.bochilteam.com/api/convert?URL=${encodeURIComponent(izumi.url)}&filter=audio`)
    const json2 = await api2.json()

    if (json2?.audio?.url) {
      await sendAudio(conn, m, izumi.title, json2.audio.url)
      return
    }

    throw new Error('Ninguna API respondió correctamente.')

  } catch (error) {
    console.error(error)
    m.reply(`❌ 𝗘𝗿𝗿𝗼𝗿 𝗮𝗹 𝗱𝗲𝘀𝗰𝗮𝗿𝗴𝗮𝗿 𝗲𝗹 𝗮𝘂𝗱𝗶𝗼.\n*Detalles:* ${error.message}`)
  }
}

handler.command = ['play5']
handler.help = ['play5']
handler.tags = ['dl']
export default handler

// 🔊 Función para enviar el audio
async function sendAudio(conn, m, title, url) {
  await conn.sendMessage(
    m.chat,
    {
      audio: { url },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`,
      ptt: false
    },
    { quoted: m }
  )
}

// 🔍 Función de búsqueda
async function search(query, options = {}) {
  const results = await yts.search({ query, hl: 'es', gl: 'ES', ...options })
  return results.videos
}