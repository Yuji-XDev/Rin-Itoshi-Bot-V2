// by black
import fetch from 'node-fetch';

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    return m.reply(`🎄 *Ejemplo de uso:*\n${usedPrefix + command} gato gris`);
  }

  const prompt = encodeURIComponent(args.join(" "));
  const url = `https://api.dorratz.com/v3/ai-image?prompt=${prompt}&ratio=9:19`;

  try {
    const res = await fetch(url);
    const json = await res.json();

    if (!json.data || !json.data.image_link) {
      throw '❌ No se pudo generar la imagen.';
    }

    const img = json.data.image_link;

    await conn.sendMessage(m.chat, {
      image: { url: img },
      caption: `🏞️ Imagen generada con IA\n🌪️ *Prompt:* ${args.join(" ")}`
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply('⚠️ Error al generar la imagen. Intenta con otro prompt.');
  }
};

handler.command = ['iaimg'];
handler.help = ['iaimg <texto>'];
handler.tags = ['tools'];

export default handler;