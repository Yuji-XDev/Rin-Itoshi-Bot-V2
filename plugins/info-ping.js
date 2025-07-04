import { exec } from 'child_process'
import speed from 'performance-now'

let handler = async (m, { conn }) => {
  let inicio = speed()
  let final = speed()
  let latencia = (final - inicio).toFixed(3)

  exec('neofetch --stdout', (_, stdout) => {
    let datos = stdout?.toString('utf-8').replace(/Memory:/g, 'Ram:') || ''
    let lineas = datos.split('\n').map(l => `┃ ${l}`).join('\n')

    let texto = `
╭━━━〔 💙 𝗥𝗜𝗡 𝗜𝗧𝗢𝗦𝗛𝗜 ⚽ 〕━━⬣
┃ 🧠 *Sistema operativo activo*
┃ ⚡ *Velocidad:* ${latencia} ms
┃ 🛠️ *Detalles técnicos:*
${lineas}
╰━━━━━━━━━━━━━━━━━━━━⬣`.trim()

    conn.reply(m.chat, texto, fkontak, infoExtra)
  })
}

const fkontak = {}

const infoExtra = {
  contextInfo: {
    isForwarded: true,
    forwardingScore: 999,
    externalAdReply: {
      title: '⚽ Blue Lock Bot',
      body: 'Rin Itoshi Engine 💙',
      thumbnailUrl: 'https://telegra.ph/file/0b7ed6a0ea29f7398552e.jpg',
      sourceUrl: 'https://github.com/TuRepositorio',
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
}

handler.help = ['ping']
handler.tags = ['info']
handler.command = ['ping', 'p']

export default handler