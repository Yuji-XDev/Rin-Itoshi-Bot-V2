import fetch from 'node-fetch';

const handler = async (m, { conn, args, usedPrefix, command, text }) => {
  // Si el comando es dlimagen
  if (command === 'dlimagen') {
    if (!args[0]) return m.reply("📷 Proporciona un enlace de imagen válido.");
    try {
      await conn.sendFile(m.chat, args[0], 'cosplay.jpg', '📥 Aquí tienes la imagen descargada.', m);
    } catch (e) {
      m.reply("❌ Error al descargar la imagen.");
    }
    return;
  }

  // Comando cosplay
  if (!text) return m.reply(`📸 *Ejemplo de uso:* ${usedPrefix + command} sakura\n\n✨ Usa nombres como:\n#cosplay sakura\n#cosplay rin itoshi\n#cosplay nagi`);

  const prompt = `cosplay ${text}`;
  const url = `https://api.dorratz.com/v3/ai-image?prompt=${encodeURIComponent(prompt)}&ratio=9:16`;

  try {
    const res = await fetch(url);
    const json = await res.json();

    if (!json.data?.image_link) throw '❌ No se encontró imagen';

    const image = json.data.image_link;
    const buttons = [
      [{ buttonId: `${usedPrefix + command} ${text}`, buttonText: { displayText: "🔁 Ver otro" }, type: 1 }],
      [{ buttonId: `${usedPrefix}dlimagen ${image}`, buttonText: { displayText: "📥 Descargar" }, type: 1 }],
    ];

    await conn.sendMessage(m.chat, {
      image: { url: image },
      caption: `🎭 *Cosplay de:* ${text}`,
      buttons,
      headerType: 4
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply(`❌ No se pudo obtener el cosplay de *${text}*.\nIntenta con otro nombre.`);
  }
};

handler.command = /^cosplay|dlimagen$/i;
export default handler;