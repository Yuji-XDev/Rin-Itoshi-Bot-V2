import fetch from 'node-fetch';

let handler = async (m, { conn, command, usedPrefix }) => {
  let index = 0;

  // Detectar si el comando es cosplaytele_next_X
  const match = command.match(/^cosplaytele(?:_next_(\d+))?$/i);
  if (match && match[1]) {
    index = parseInt(match[1]);
  }

  // Obtener resultados desde la API
  const res = await fetch('https://api.nekorinn.my.id/search/cosplaytele?q=720p');
  const json = await res.json();

  if (!json.status || !json.result || index >= json.result.length) {
    return m.reply('🚫 No hay más resultados disponibles.');
  }

  const item = json.result[index];

  const message = {
    image: { url: item.cover },
    caption: `🎭 *Cosplay Encontrado*\n\n📌 *Título:* ${item.title}\n🔗 *Enlace:* ${item.url}`,
    footer: 'CosplayTele - by @nekorinnn',
    buttons: [
      {
        buttonId: `${usedPrefix}cosplaytele_next_${index + 1}`,
        buttonText: { displayText: '➡️ Siguiente' },
        type: 1
      }
    ],
    headerType: 4
  };

  conn.sendMessage(m.chat, message, { quoted: m });
};

handler.command = /^cosplaytele(?:_next_\d+)?$/i;

export default handler;