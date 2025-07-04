let handler = async (m, { conn, usedPrefix, command }) => {

    try {
        m.reply('╭━━〔 *↻ REINICIO DEL BOT ↷* 〕━━⬣\n┃\n╰━━━━━━━━━━━━━━━━━━⬣\n*↻* Reiniciando, espera unos segundos...')
        setTimeout(() => {
            process.exit(0)
        }, 3000) 
    } catch (error) {
        console.log(error)
        conn.reply(m.chat, `Error: ${error}`, m)
    }
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart', 'reiniciar'] 
handler.rowner = true

export default handler