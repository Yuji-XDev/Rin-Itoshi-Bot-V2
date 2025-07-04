import fs from 'fs'
import fetch from 'node-fetch'
import path from 'path'
import { tmpdir } from 'os'

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) return m.reply(`📽️ *Ingresa el enlace de YouTube:*\n> Ejemplo:\n${usedPrefix + command} https://youtu.be/dQw4w9WgXcQ`)

  const videoUrl = text.trim()
  const q = "480p"
  const api = `https://api.neoxr.eu/api/youtube?url=${encodeURIComponent(videoUrl)}&type=video&quality=${q}&apikey=russellxz`

  m.reply('📥 Descargando el video, espera un momento...')

  try {
    const res = await fetch(api)
    const json = await res.json()

    if (!json.data?.url) return m.reply('❌ No se encontró un video válido.')

    const download = await fetch(json.data.url)
    const filepath = path.join(tmpdir(), `video_${Date.now()}.mp4`)
    const fileStream = fs.createWriteStream(filepath)

    await new Promise((resolve, reject) => {
      download.body.pipe(fileStream)
      download.body.on("error", reject)
      fileStream.on("finish", resolve)
    })

    const stats = fs.statSync(filepath)
    if (stats.size < 1000) return m.reply('⚠️ El archivo es muy pequeño o está dañado.')

    await conn.sendFile(m.chat, filepath, 'video.mp4', '✅ Aquí está tu video.', m)
    fs.unlinkSync(filepath)
  } catch (e) {
    console.error(e)
    m.reply('❌ Ocurrió un error al descargar o enviar el video.')
  }
}

handler.command = /^(playvid|ytvideo|play4)$/i
export default handler