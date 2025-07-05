import FormData from 'form-data'
import Jimp from 'jimp'

const handler = async (m, { conn, usedPrefix, command }) => {
  try {
    await m.react('🕓')
    
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ""

    if (!mime) return m.reply('🖼️ Por favor, envía o responde a una imagen.')
    if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`✧ El formato (${mime}) no es compatible. Usa JPG o PNG.`)

    await m.reply('✧ Mejorando la calidad de la imagen...')

    const img = await q.download?.()
    if (!img) return m.reply('⚠️ No se pudo descargar la imagen.')

    const resultBuffer = await remini(img, "enhance")
    if (!resultBuffer || resultBuffer.length < 10000) return m.reply('❌ La mejora falló o la imagen retornada es inválida.')

    await conn.sendFile(m.chat, pr, 'thumbnail.jpg', listo, m, null)
    await m.react('✅')

  } catch (e) {
    console.error('Error en remini:', e)
    await m.reply('❌ Hubo un error al procesar la imagen.')
    await m.react('✖️')
  }
}

handler.help = ["hd"]
handler.tags = ["tools"]
handler.command = ["remini", "hd", "enhance"]

export default handler

async function remini(imageData, operation) {
  return new Promise(async (resolve, reject) => {
    try {
      const operations = ["enhance", "recolor", "dehaze"]
      if (!operations.includes(operation)) operation = "enhance"

      const form = new FormData()
      form.append("image", Buffer.from(imageData), {
        filename: "input.jpg",
        contentType: "image/jpeg"
      })
      form.append("model_version", 1)

      form.submit({
        protocol: "https:",
        host: "inferenceengine.vyro.ai",
        path: `/${operation}`,
        headers: {
          "User-Agent": "okhttp/4.9.3",
          "Connection": "Keep-Alive",
          "Accept-Encoding": "gzip",
        }
      }, (err, res) => {
        if (err) return reject(err)

        const chunks = []
        res.on("data", chunk => chunks.push(chunk))
        res.on("end", () => {
          const buffer = Buffer.concat(chunks)
          resolve(buffer)
        })
        res.on("error", err => reject(err))
      })
    } catch (error) {
      reject(error)
    }
  })
}