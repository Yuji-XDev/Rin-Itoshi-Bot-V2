import { exec } from 'child_process'
import speed from 'performance-now'

let handler = async (m, { conn, participants }) => {
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

    conn.sendMessage(m.chat, {
      text: texto,
      mentions: participants?.map(p => p.id) || [],
      contextInfo: {
        mentionedJid: participants?.map(p => p.id) || [],
        externalAdReply: {
          title: '✧ Velocidad de Rin ✧',
          body: 'Latencia y sistema',
          thumbnailUrl: logo,
          mediaType: 1,
          showAdAttribution: true,
          renderLargerThumbnail: true,
          sourceUrl: 'https://github.com/the-27/Rin-Itoshi-Bot-V2',
        }
      }
    }, { quoted: m })
  })
}

handler.help = ['ping']
handler.tags = ['info']
handler.command = ['ping', 'p']

export default handler