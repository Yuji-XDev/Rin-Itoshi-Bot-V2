let handler = async (m, { conn }) => {
  if (m.fromMe) return // No responderte a ti mismo

  const text = m.text || m.body || m.message?.conversation || ''

  // Si el mensaje no empieza con "." (evitar comandos)
  if (text && !text.startsWith('.')) {
    conn.reply(m.chat, 'WAZAA WAZAA 👻', m)
  }
}

handler.all = true
export default handler