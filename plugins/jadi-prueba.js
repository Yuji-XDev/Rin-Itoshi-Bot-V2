import fs from 'fs'
import path from 'path'

let handler = async (m, { conn }) => {
  try {
    if (global.conn?.user?.jid === conn.user.jid) {
      return conn.reply(m.chat, '⚠️ *Este comando solo funciona en subbots, no en el bot principal.*', m)
    }

    const userID = m.sender.split('@')[0]
    const subbotDir = path.join('JadiBots', userID)
    const credsPath = path.join(subbotDir, 'creds.json')

    if (!fs.existsSync(subbotDir)) fs.mkdirSync(subbotDir, { recursive: true })

    const code = process.argv[2] || 'unknown-code'
    fs.writeFileSync(credsPath, JSON.stringify({ code }, null, 2))

    await conn.reply(m.chat, '🛑 *Subbot apagado correctamente.*\n\n✅ Puedes reactivarlo luego usando el comando: *#code*', m)

    setTimeout(() => {
      try {
        conn.ws.close()
        console.log(`✅ Subbot ${conn.user.jid} apagado correctamente.`)
      } catch (e) {
        console.error('⚠️ Error al cerrar el subbot:', e.message)
      }
    }, 2000)

  } catch (err) {
    console.error('❌ Error en el comando stop:', err)
    await conn.reply(m.chat, '❌ *Ocurrió un error al intentar apagar el subbot.*', m)
  }
}

handler.command = handler.help = ['stop', 'byebot']
handler.tags = ['subbot']
handler.owner = true

export default handler