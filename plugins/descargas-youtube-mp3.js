import { youtubedl, youtubedlv2 } from '../lib/youtubedl.js'
import yts from 'yt-search'

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
    if (!text) return conn.reply(m.chat, `🎵 Ingresa el título de la canción o el enlace de YouTube\n\nEjemplo: ${usedPrefix}${command} Ozuna Criminal`, m)

    await m.react('🕒')
    conn.reply(m.chat, '✧ *Descargando audio...*', m)

    try {
        let videoData
        let videoUrl = text

        if (!text.includes('youtube.com') && !text.includes('youtu.be')) {
            let search = await yts(text)
            if (!search.videos.length) return conn.reply(m.chat, '❌ No se encontraron resultados', m)
            videoData = search.videos[0]
            videoUrl = videoData.url
        } else {
            let search = await yts(videoUrl)
            videoData = search.videos?.[0] || {}
        }

        let dl_url = await youtubedl(videoUrl).catch(async _ => await youtubedlv2(videoUrl))
        
        if (!dl_url || !dl_url.dl_url) return conn.reply(m.chat, '❌ Error al obtener el enlace de descarga', m)

        let title = videoData.title || dl_url.title || 'Audio'
        let size = dl_url.filesizeF || 'Desconocido'
        let duration = videoData.duration?.timestamp || 'Desconocido'

        let caption = `❀ *Título:* ${title}
⚡ *Tamaño:* ${size}
🎵 *Formato:* MP3
⏱️ *Duración:* ${duration}`

        await conn.sendFile(m.chat, dl_url.dl_url, `${title}.mp3`, caption, m, null, { 
            asDocument: false, 
            mimetype: 'audio/mp3' 
        })

        await m.react('✅')

    } catch (error) {
        await m.react('❌')
        conn.reply(m.chat, `❌ Error al descargar: ${error.message}`, m)
    }
}

handler.help = ['ytaudio <título/link>']
handler.tags = ['descargas']
handler.command = ['ytaudio']
handler.coin = 3
handler.register = true

export default handler