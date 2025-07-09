let handler = async (m, { conn }) => {
 
  if (m.fromMe) return

 
  if (m.body && !m.body.startsWith('.')) {
    conn.reply(m.chat, 'WAZAA WAZAA 👻', m)
  }
}

handler.all = true
export default handler