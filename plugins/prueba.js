import yts from 'yt-search'

const MAX_SIZE_MB = 100

const handler = async (m, { conn, text, command }) => {
  if (!text) return m.reply('🔍 *Por favor, ingresa el nombre o link del video.*')

  await m.react('🔎')

  try {
    const isLink = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//i.test(text)
    const search = isLink ? { url: text } : (await yts(text)).all[0]

    if (!search) return m.reply('❌ *No se encontraron resultados.*')

    const info = await ytMp4(search.url)

    if (info.size > MAX_SIZE_MB) {
      return m.reply(`❌ *El video es demasiado pesado (${info.size} MB). Máximo permitido: ${MAX_SIZE_MB} MB.*`)
    }

    await conn.sendMessage(m.chat, {
      video: { url: info.dl_link },
      mimetype: 'video/mp4',
      caption: `📹 *Título:* ${search.title}\n⏱️ *Duración:* ${search.timestamp}\n📦 *Tamaño:* ${info.size} MB\n🔗 *Enlace:* ${search.url}`
    }, { quoted: m })
  } catch (e) {
    console.error(e)
    m.reply('❌ *Ocurrió un error al procesar el video.*')
  }
}

handler.command = /^play4$/i
export default handler

async function ytMp4(url) {
  const axios = (await import('axios')).default
  const { data } = await axios.get(`https://yt.btch.bz/download?URL=${encodeURIComponent(url)}&type=mp4&quality=360`)
  const size = data.filesize / (1024 * 1024)
  return {
    dl_link: data.download,
    size: size.toFixed(2),
  }
}