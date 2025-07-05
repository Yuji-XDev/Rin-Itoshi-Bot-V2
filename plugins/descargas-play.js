/*import fetch from "node-fetch"
import yts from 'yt-search'
import axios from "axios"
const youtubeRegexID = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/

const handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    if (!text.trim()) {
      return conn.reply(m.chat, `*🌴 Por favor, ingresa el nombre de la música a descargar.*`, m, rcanal);
    }
  
let videoIdToFind = text.match(youtubeRegexID) || null
let ytplay2 = await yts(videoIdToFind === null ? text : 'https://youtu.be/' + videoIdToFind[1])

if (videoIdToFind) {
const videoId = videoIdToFind[1]  
ytplay2 = ytplay2.all.find(item => item.videoId === videoId) || ytplay2.videos.find(item => item.videoId === videoId)
} 
ytplay2 = ytplay2.all?.[0] || ytplay2.videos?.[0] || ytplay2  
if (!ytplay2 || ytplay2.length == 0) {
return m.reply('✧ No se encontraron resultados para tu búsqueda.')
}
let { title, thumbnail, timestamp, views, ago, url, author } = ytplay2
title = title || 'no encontrado'
thumbnail = thumbnail || 'no encontrado'
timestamp = timestamp || 'no encontrado'
views = views || 'no encontrado'
ago = ago || 'no encontrado'
url = url || 'no encontrado'
author = author || 'no encontrado'
    const vistas = formatViews(views)
    const canal = author.name ? author.name : 'Desconocido'
    const infoMessage = `╭─〕「⚡  *RIN ITOSHI V2☃️*  ⭐」
├̟̇˚₊🌴 𝑻𝒊𝒕𝒖𝒍𝒐: ${title || 'Desconocido'}
├̟̇˚₊🥥 𝑪𝒂𝒏𝒂𝒍: ${canal}
├̟̇˚₊⚡ 𝑽𝒊𝒔𝒕𝒂𝒔: ${vistas || 'Desconocido'}
├̟̇˚₊🌲 𝑫𝒖𝒓𝒂𝒄𝒊𝒐𝒏: ${timestamp || 'Desconocido'}
├̟̇˚₊🥞 𝑷𝒖𝒃𝒍𝒊𝒄𝒂𝒅𝒐: ${ago || 'Desconocido'}
├̟̇˚₊💖 𝑳𝒊𝒏𝒌: ${url}
╰─〕𝙀𝙣𝙫𝙞𝙖𝙣𝙙𝙤 ▰▰▱▱ 
╰─────────────────────⬣
    
    `
    const thumb = (await conn.getFile(thumbnail))?.data
    const JT = {
      contextInfo: {
        externalAdReply: {
          title: `${title || 'Desconocido'} `,
          body: dev,
          mediaType: 1,
          previewType: 0,
          mediaUrl: url,
          sourceUrl: url,
          thumbnail: thumb,
          renderLargerThumbnail: true,
        },
      },
    }
    await conn.reply(m.chat, infoMessage, m, JT)    
    if (command === 'play' || command === 'playaudio') {
      try {
        const api = await (await fetch(`https://api.stellarwa.xyz/dow/ytmp3?url=${url}`)).json()
        const resulta = api.data
        const result = resulta.dl   
        if (!result) throw new Error('⚠ El enlace de audio no se generó correctamente.')
        await conn.sendMessage(m.chat, { audio: { url: result }, fileName: `${resulta.title}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m })
      } catch (e) {
        return conn.reply(m.chat, '⚠︎ No se pudo enviar el audio. Esto puede deberse a que el archivo es demasiado pesado o a un error en la generación de la URL. Por favor, intenta nuevamente más tarde.', m)
      }
    } else if (command === 'play2' || command === 'playvideo') {
      try {
        const response = await fetch(`https://api.stellarwa.xyz/dow/ytmp4?url=${url}`)
        const json = await response.json()
        await conn.sendFile(m.chat, json.data.dl, json.data.title + '.mp4', title, m)
      } catch (e) {
        return conn.reply(m.chat, '⚠︎ No se pudo enviar el video. Esto puede deberse a que el archivo es demasiado pesado o a un error en la generación de la URL. Por favor, intenta nuevamente más tarde.', m)
      }
    } else {
      return conn.reply(m.chat, '✧︎ Comando no reconocido.', m)
    }
  } catch (error) {
    return m.reply(`⚠︎ Ocurrió un error: ${error}`)
  }
}
handler.command = handler.help = ['play', 'playaudio', 'play2', 'playvideo']
handler.tags = ['descargas']
handler.group = true

export default handler

function formatViews(views) {
  if (views === undefined) {
    return "No disponible"
  }

  if (views >= 1_000_000_000) {
    return `${(views / 1_000_000_000).toFixed(1)}B (${views.toLocaleString()})`
  } else if (views >= 1_000_000) {
    return `${(views / 1_000_000).toFixed(1)}M (${views.toLocaleString()})`
  } else if (views >= 1_000) {
    return `${(views / 1_000).toFixed(1)}k (${views.toLocaleString()})`
  }
  return views.toString()
}
*/

import yts from "yt-search"
import { ytv, yta } from "@soymaycol/maytube"

const limit = 100

const handler = async (m, { conn, text, command }) => {
  if (!text) return m.reply("*🌴 Por favor, ingresa el nombre de la música a descargar.*")

  await m.react("🕛")

  console.log("🔍 Buscando en YouTube...")

  try {
    let video

    const isUrl = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/.test(text)

    if (isUrl) {
      video = {
        url: text
      }

      const searchResult = await yts({ videoId: getYouTubeID(text) })
      if (searchResult && searchResult.video) {
        const v = searchResult.video
        video.title = v.title || "Sin título"
        video.author = { name: v.author.name || "Desconocido" }
        video.views = v.views || "Desconocidas"
        video.duration = {
          seconds: v.seconds || 0,
          timestamp: v.timestamp || "Desconocida"
        }
        video.thumbnail = v.thumbnail
      } else {
        return m.reply("❌ No se pudo obtener información del video desde el link proporcionado.")
      }
    } else {
      const res = await yts(text)
      if (!res || !res.all || !Array.isArray(res.all) || res.all.length === 0) {
        return m.reply("❌ No se encontraron resultados para tu búsqueda.")
      }
      video = res.all[0]
    }

    const durationSeconds = Number(video.duration?.seconds) || 0
    const durationTimestamp = video.duration?.timestamp || "Desconocida"
    const authorName = video.author?.name || "Desconocido"
    const title = video.title || "Sin título"
    const views = video.views || "Desconocidas"
    const url = video.url || ""
    const thumbnail = video.thumbnail || ""

    const processingMessage = `╭─〕「⚡  *RIN ITOSHI V2☃️*  ⭐」
├̟̇˚₊🔥 *Titulo* ${title}*
├̟̇˚₊🎄 *Canal:* ${authorName}
├̟̇˚₊💥 *Duración:* ${durationTimestamp}
├̟̇˚₊💛 *Vistas:* ${views}
╰─〕𝙀𝙣𝙫𝙞𝙖𝙣𝙙𝙤 ▰▰▱▱ 
╰─────────────────────⬣`

    let sentMessage
    if (thumbnail) {
      try {
        sentMessage = await conn.sendFile(m.chat, thumbnail, "thumb.jpg", processingMessage, m)
      } catch (thumbError) {
        console.log("⚠️ No se pudo enviar la miniatura:", thumbError.message)
        sentMessage = await m.reply(processingMessage)
      }
    } else {
      sentMessage = await m.reply(processingMessage)
    }

    if (["play", "playaudio", "ytmp3"].includes(command)) {
      await downloadAudio(conn, m, video, title)
    } else if (["play2", "playvid", "ytv", "ytmp4"].includes(command)) {
      await downloadVideo(conn, m, video, title)
    }

  } catch (error) {
    console.error("❌ Error general:", error)
    await m.reply(`❌ Hubo un error al procesar tu solicitud:\n\n${error.message}`)
    await m.react("❌")
  }
}

const downloadAudio = async (conn, m, video, title) => {
  try {
    console.log("🎧 Solicitando audio...")

    const api = await yta(video.url)

    if (!api || !api.status || !api.result || !api.result.download) {
      throw new Error("No se pudo obtener el enlace de descarga del audio")
    }

    // Validación adicional del enlace antes de enviar
    if (api.result.download.includes('googlevideo.com')) {
      throw new Error("Enlace de descarga no válido (Google Video)")
    }

    console.log("🎶 Enviando audio...")
    console.log("📁 URL de descarga:", api.result.download)
    
    await conn.sendFile(
      m.chat,
      api.result.download,
      `${(api.result.title || title).replace(/[^\w\s]/gi, '')}.mp3`,
      `🎵 *${api.result.title || title}*
      
> *✧ Calidad:* ${api.result.quality || 'Desconocida'}
> *✧ Tamaño:* ${api.result.size || 'Desconocido'}
> *✧ Formato:* ${api.result.format || 'mp3'}`,
      m
    )

    await m.react("✅")
    console.log("✅ Audio enviado exitosamente")

  } catch (error) {
    console.error("❌ Error descargando audio:", error)
    await m.reply(`❌ Error al descargar el audio:\n\n${error.message}`)
    await m.react("❌")
  }
}

const downloadVideo = async (conn, m, video, title) => {
  try {
    console.log("📹 Solicitando video...")

    const api = await ytv(video.url)

    // Manejar ambos formatos de respuesta (nuevo y viejo)
    let downloadUrl, videoTitle, videoSize, videoQuality
    
    if (api.status && api.result) {
      // Formato nuevo
      downloadUrl = api.result.download
      videoTitle = api.result.title
      videoSize = api.result.size
      videoQuality = api.result.quality
    } else if (api.url) {
      // Formato viejo
      downloadUrl = api.url
      videoTitle = api.title || title
      videoSize = 'Unknown'
      videoQuality = 'Unknown'
    } else {
      throw new Error("No se pudo obtener el enlace de descarga del video")
    }

    // Validación adicional del enlace antes de enviar
    if (downloadUrl.includes('googlevideo.com')) {
      throw new Error("Enlace de descarga no válido (Google Video)")
    }

    let sizemb = 0
    try {
      const res = await fetch(downloadUrl, { method: 'HEAD' })
      const cont = res.headers.get('content-length')
      if (cont) {
        const bytes = parseInt(cont, 10)
        sizemb = bytes / (1024 * 1024)
      }
    } catch (sizeError) {
      console.log("⚠️ No se pudo obtener el tamaño del archivo:", sizeError.message)
    }

    if (sizemb > limit && sizemb > 0) {
      return m.reply(`🚫 El archivo es muy pesado (${sizemb.toFixed(2)} MB). El límite es ${limit} MB. Intenta con un video más corto 🥲`)
    }

    const doc = sizemb >= limit && sizemb > 0

    console.log("🎥 Enviando video...")
    console.log("📁 URL de descarga:", downloadUrl)
    
    await conn.sendFile(
      m.chat,
      downloadUrl,
      `${(videoTitle || title).replace(/[^\w\s]/gi, '')}.mp4`,
      `📹 *${videoTitle || title}*
      
> *✧ Calidad:* ${videoQuality || 'Desconocida'}
> *✧ Tamaño:* ${videoSize || (sizemb > 0 ? `${sizemb.toFixed(2)} MB` : 'Desconocido')}
> *✧ Formato:* mp4`,
      m,
      null,
      {
        asDocument: doc,
        mimetype: "video/mp4"
      }
    )

    await m.react("✅")
    console.log("✅ Video enviado exitosamente")

  } catch (error) {
    console.error("❌ Error descargando video:", error)
    await m.reply(`❌ Error al descargar el video:\n\n${error.message}`)
    await m.react("❌")
  }
}

const getYouTubeID = (url) => {
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)/)
  return match ? match[1] : null
}

handler.command = handler.help = ['play', 'playaudio', 'ytmp3', 'play2', 'ytv', 'ytmp4']
handler.tags = ['descargas']

export default handler
