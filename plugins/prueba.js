/*import axios from 'axios';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  const defaultLink = 'https://f-droid.org/id/packages/me.shrimadhavuk.numselapp';
  const inputUrl = args[0] || defaultLink;

  try {
    await m.react('⏳');

    const res = await axios.get(`https://api.dorratz.com/v3/fdroid-dl?url=${encodeURIComponent(inputUrl)}`);
    const data = res.data;

    if (!data || !data.downloadLink) throw '❌ No se encontró el archivo APK.';

    let texto = `
╭━━━⬣ *📦 APP ENCONTRADA*
┃ 📌 *Versión:* ${data.version || 'N/A'}
┃ 📅 *Agregada:* ${data.addedOn || 'N/A'}
┃ 📥 *Tamaño:* ${data.apkSize || 'N/A'}
┃ 📱 *Requiere:* ${data.requirement || 'N/A'}
┃ 🔐 *Permisos:* ${data.permissions || 'Ninguno'}
╰━━━━━━━━━━━━⬣
`.trim();

    await conn.sendMessage(m.chat, {
      document: { url: data.downloadLink },
      mimetype: 'application/vnd.android.package-archive',
      fileName: `${data.version || ''}.apk`,
      caption: texto
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    await m.reply('💛 Error al obtener la app. Asegúrate de que el enlace de F-Droid es válido.');
  }
};

handler.command = /^fdroid|apkf$/i;
export default handler;*/

import axios from 'axios';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  const inputUrl = args[0];

 
  if (!inputUrl || !inputUrl.includes('f-droid.org')) {
    return m.reply(`❗ *Debes proporcionar un enlace de F-Droid válido:*\n\nEjemplo:\n${usedPrefix + command} https://f-droid.org/packages/org.mozilla.firefox`);
  }

  try {
    await m.react('⏳');

    const res = await axios.get(`https://api.dorratz.com/v3/fdroid-dl?url=${encodeURIComponent(inputUrl)}`);
    const data = res.data;

    if (!data || !data.downloadLink) throw '❌ No se encontró el archivo APK.';

    // Extrae el nombre del paquete desde la URL o data.name si existe
    let packageName = inputUrl.split('/').filter(x => x.includes('.'))?.pop() || 'app';
    let versionName = data.version || '1.0';
    let fileName = `${packageName}_v${versionName}.apk`;

    let texto = `
╭━━━⬣ *📦 APP ENCONTRADA*
┃ 📌 *Versión:* ${data.version || 'N/A'}
┃ 📅 *Agregada:* ${data.addedOn || 'N/A'}
┃ 📥 *Tamaño:* ${data.apkSize || 'N/A'}
┃ 📱 *Requiere:* ${data.requirement || 'N/A'}
┃ 🔐 *Permisos:* ${data.permissions || 'Ninguno'}
╰━━━━━━━━━━━━⬣
`.trim();

    await conn.sendMessage(m.chat, {
      document: { url: data.downloadLink },
      mimetype: 'application/vnd.android.package-archive',
      fileName,
      caption: texto
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    await m.reply('💛 Error al obtener la app. Asegúrate de que el enlace de F-Droid es válido.');
  }
};

handler.command = /^fdroid|apkf$/i;
export default handler;