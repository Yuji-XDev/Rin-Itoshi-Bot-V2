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
    const apiUrl = `https://api.dorrat.net/ytmp3?url=${encodeURIComponent(izumi.url)}`
    const res = await fetch(apiUrl)
    const json = await res.json()

    if (!json.status) throw new Error('No se pudo obtener el audio.')

    const { title, audio } = json.result

    await conn.sendMessage(
      m.chat,
      {
        audio: { url: audio },
        mimetype: 'audio/mpeg',
        fileName: `${title}.mp3`,
        ptt: false
      },
      { quoted: m }
    )
  } catch (error) {
    console.error(error)
    m.reply(`❌ 𝗘𝗿𝗿𝗼𝗿 𝗮𝗹 𝗱𝗲𝘀𝗰𝗮𝗿𝗴𝗮𝗿 𝗲𝗹 𝗮𝘂𝗱𝗶𝗼.\n*Detalles:* ${error.message}`)
  }
}

handler.command = ['play5']
handler.help = ['play5']
handler.tags = ['dl']
export default handler

async function search(query, options = {}) {
  let search = await yts.search({ query, hl: "es", gl: "ES", ...options })
  return search.videos
}