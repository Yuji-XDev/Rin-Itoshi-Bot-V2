import speed from 'performance-now'
import { exec } from 'child_process'

let handler = async (m, { conn }) => {
  let timestamp = speed()
  let latensi = speed() - timestamp

  exec(`neofetch --stdout`, (error, stdout) => {
    if (!stdout) return

    let sysinfo = stdout.toString('utf-8').replace(/Memory:/g, 'Ram:')
    let infoLines = sysinfo.split('\n').map(line => '┃ ' + line).join('\n')

    const ping = `╭━━〔 🧬 𝗥𝗜𝗡 𝗜𝗧𝗢𝗦𝗛𝗜 🧠 〕━━⬣
┃
┃ 🧩 *Estado:* Sistema operativo funcional.
┃ 🧠 *Análisis:* ${latensi.toFixed(4)} ms
┃ 🧪 *Datos técnicos:*
${infoLines}
╰━━━━━━━━━━━━━━━━⬣`

    conn.reply(m.chat, ping.trim(), fkontak, rcanal)
  })
}

const rcanal = {
  contextInfo: { 
    isForwarded: true,
    serverMessageId: 100,
    externalAdReply: {
      showAdAttribution: true,
      title: packname, 
      body: dev, 
      mediaUrl: null, 
      description: null, 
      previewType: "PHOTO", 
      thumbnailUrl: logo, 
      sourceUrl: redes, 
      mediaType: 1, 
      renderLargerThumbnail: true
    }
  }
}

handler.help = ['ping']
handler.tags = ['info']
handler.command = ['ping', 'p']
handler.register = true

export default handler