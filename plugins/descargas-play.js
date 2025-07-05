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

import yts from 'yt-search'
import { yta, ytv } from '@soymaycol/maytube'

const MAX_SIZE_MB = 100

const handler = async (m, { conn, text, command }) => {
  if (!text) return m.reply('🔍 *Por favor, ingresa el nombre o link del video.*')

  await m.react('🔎')

  try {
    const isLink = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//i.test(text)
    let video

    if (isLink) {
      const videoId = extractID(text)
      const res = await yts({ videoId })
      if (!res?.video) return m.reply('❌ *No se pudo encontrar el video.*')

      const v = res.video
      video = {
        title: v.title,
        url: text,
        author: v.author.name,
        views: v.views,
        duration: v.timestamp,
        seconds: v.seconds,
        thumbnail: v.thumbnail,
      }
    } else {
      const res = await yts(text)
      if (!res?.all?.length) return m.reply('❌ *No se encontraron resultados.*')
      const v = res.all[0]
      video = {
        title: v.title,
        url: v.url,
        author: v.author.name,
        views: v.views,
        duration: v.timestamp,
        seconds: v.seconds,
        thumbnail: v.thumbnail,
      }
    }

    const info = `
╭─〔🌀 *RIN ITOSHI PLAYER* 〕─⬣
│🎵 *Titulo:* ${video.title}
│📺 *Canal:* ${video.author}
│⏱️ *Duración:* ${video.duration}
│👁️ *Vistas:* ${video.views}
╰────────────────────────⬣`.trim()

    if (video.thumbnail) {
      await conn.sendFile(m.chat, video.thumbnail, 'thumb.jpg', info, m)
    } else {
      await m.reply(info)
    }

    if (['play', 'playaudio', 'ytmp3'].includes(command)) {
      await sendAudio(conn, m, video)
    }

    if (['play2', 'playvid', 'ytv', 'ytmp4'].includes(command)) {
      await sendVideo(conn, m, video)
    }

  } catch (err) {
    console.error('❌ Error general:', err)
    await m.reply(`❌ *Ocurrió un error:* ${err.message}`)
    await m.react('❌')
  }
}

const sendAudio = async (conn, m, video) => {
  try {
    await m.react('🎶')

    const data = await yta(video.url)
    const link = data?.result?.download
    if (!link || link.includes('googlevideo')) throw new Error('Link de descarga inválido')

    await conn.sendFile(
      m.chat,
      link,
      `${sanitize(video.title)}.mp3`,
      `🎧 *${data.result.title || video.title}*
> 🎼 *Calidad:* ${data.result.quality}
> 📦 *Tamaño:* ${data.result.size}
> 📁 *Formato:* mp3`,
      m
    )

    await m.react('✅')
  } catch (err) {
    console.error('🎧 Error en audio:', err)
    await m.reply(`❌ *Error al descargar el audio:* ${err.message}`)
    await m.react('❌')
  }
}

const sendVideo = async (conn, m, video) => {
  try {
    await m.react('📹')

    const data = await ytv(video.url)
    const link = data?.result?.download || data?.url
    if (!link || link.includes('googlevideo')) throw new Error('Link de descarga inválido')

    const sizeMB = await getFileSizeMB(link)
    if (sizeMB > MAX_SIZE_MB) {
      return m.reply(`🚫 *Archivo muy grande (${sizeMB.toFixed(2)} MB). Límite: ${MAX_SIZE_MB} MB.*`)
    }

    const doc = sizeMB > 50
    await conn.sendFile(
      m.chat,
      link,
      `${sanitize(video.title)}.mp4`,
      `🎬 *${data.result?.title || video.title}*
> 🎞️ *Calidad:* ${data.result?.quality || 'Desconocida'}
> 📦 *Tamaño:* ${data.result?.size || `${sizeMB.toFixed(2)} MB`}
> 📁 *Formato:* mp4`,
      m,
      null,
      { asDocument: doc, mimetype: 'video/mp4' }
    )

    await m.react('✅')
  } catch (err) {
    console.error('📹 Error en video:', err)
    await m.reply(`❌ *Error al descargar el video:* ${err.message}`)
    await m.react('❌')
  }
}

const extractID = (url) => {
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)/)
  return match ? match[1] : null
}

const getFileSizeMB = async (url) => {
  try {
    const res = await fetch(url, { method: 'HEAD' })
    const len = res.headers.get('content-length')
    return len ? parseInt(len) / (1024 * 1024) : 0
  } catch {
    return 0
  }
}

const sanitize = (str = '') => str.replace(/[^\w\s]/gi, '').substring(0, 50)

handler.command = ['play', 'playaudio', 'ytmp3', 'play2', 'playvid', 'ytv', 'ytmp4']
handler.tags = ['descargas']
handler.help = ['play <nombre o link>', 'play2 <nombre o link>']

export default handler