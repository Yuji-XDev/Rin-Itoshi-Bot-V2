import fetch from 'node-fetch';

const handler = async (m, { conn, command, usedPrefix }) => {
  let index = 0;

  // Verifica si el mensaje contiene cosplaypage_X
  const match = m.text?.match(/cosplaypage_(\d+)/i);
  if (match && match[1]) {
    index = parseInt(match[1]);
  }

  // Llama a la API
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
        buttonId: `${usedPrefix}cosplaypage_${index + 1}`,
        buttonText: { displayText: '➡️ Siguiente' },
        type: 1
      }
    ],
    headerType: 4
  };

  await conn.sendMessage(m.chat, message, { quoted: m });
};

// Comando principal
handler.command = ['cosplay'];

export default handler;