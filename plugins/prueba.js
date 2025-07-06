import axios from 'axios';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  const defaultLink = 'https://f-droid.org/id/packages/me.shrimadhavuk.numselapp';
  const inputUrl = args[0] || defaultLink;

  try {
    await m.react('⏳');

    const res = await axios.get(`https://api.dorratz.com/v3/fdroid-dl?url=${encodeURIComponent(inputUrl)}`);
    const data = res.data;

    if (!data || !data.url) throw '❌ No se encontró el archivo APK.';

    let texto = `
╭━━━⬣ *📦 APP ENCONTRADA*
┃ 🧩 *Nombre:* ${data.name || 'Desconocido'}
┃ 📦 *Paquete:* ${data.package || 'N/A'}
┃ 📌 *Versión:* ${data.version || 'N/A'}
┃ 📥 *Tamaño:* ${data.size || 'N/A'}
┃ 📝 *Descripción:* ${data.desc || 'Sin descripción'}
╰━━━━━━━━━━━━⬣
`.trim();

    await conn.sendMessage(m.chat, {
      document: { url: data.url },
      mimetype: 'application/vnd.android.package-archive',
      fileName: `${data.name || 'App'} v${data.version || ''}.apk`,
      caption: texto
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    await m.reply('❌ Error al obtener la app. Asegúrate de que el enlace de F-Droid es válido.');
  }
};

handler.command = /^fdroid|apkf$/i;
export default handler;