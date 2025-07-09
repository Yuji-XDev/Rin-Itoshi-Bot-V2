import fetch from 'node-fetch';
import cheerio from 'cheerio';

const handler = async (m, { conn, args, usedPrefix, command, text }) => {
  if (!text) return m.reply(`📸 *Ejemplo de uso:* ${usedPrefix + command} sakura`);

  const query = `cosplay ${text}`;
  const url = `https://duckduckgo.com/?q=${encodeURIComponent(query)}&iax=images&ia=images`;

  try {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);
    const script = $('script').filter((i, el) => $(el).html().includes('var o = ')).html();
    const jsonMatch = script.match(/var o = (\{.*?\});/);
    if (!jsonMatch) throw 'No se encontraron imágenes.';
    
    const json = JSON.parse(jsonMatch[1]);
    const images = json?.results?.map(v => v.image) || [];

    if (!images.length) throw 'No se encontraron imágenes.';

    const image = images[Math.floor(Math.random() * images.length)];

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
    m.reply('❌ No se pudo obtener la imagen. Intenta con otro nombre.');
  }
};

handler.command = /^cosplay$/i;
export default handler;