/*import { igdl } from 'ruhend-scraper';

const handler = async (m, { text, conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    return conn.reply(m.chat, `*🌪️ Por favor, ingresa un link de Facebook.*`, fkontak, m);
  }

  await m.react('🕒');
  let res;
  try {
    res = await igdl(args[0]);
  } catch (error) {
    return conn.reply(m.chat, '*❌ Error al obtener el video, verifique que el enlace sea correcto*', m);
  }

  let result = res.data;
  if (!result || result.length === 0) {
    return conn.reply(m.chat, '*⚠️ No se encontraron resultados.*', m);
  }

  let data;
  try {
    data = result.find(i => i.resolution === "720p (HD)") || result.find(i => i.resolution === "360p (SD)");
  } catch (error) {
    return conn.reply(m.chat, '*❌ Error al enviar el video de Facebook*', m);
  }

  if (!data) {
    return conn.reply(m.chat, '*⚠️ No se encontró una resolución adecuada.*', m);
  }

  await m.react('✅');
  let video = data.url;

  try {
    await conn.sendMessage(
      m.chat,
      {
        video: { url: video },
        caption: `\`\`\`◜Facebook - Download◞\`\`\`\n\n> 🏞️ *Calidad:* ${data.resolution}\n> ☄️ *Enlace:* ${args[0]}\n\n⟢🌲 Aquí tienes: 🌪️\n⟢🏞️ ¡Disfruta!`,
        fileName: 'fb.mp4',
        mimetype: 'video/mp4'
      },
      { quoted: fkontak }
    );
  } catch (error) {
    await m.react('❌');
    return conn.reply(m.chat, '*👻 La URL está corrupta, intenta con otra URL.*', m);
  }
};

handler.help = ['facebook'];
handler.tags = ['descargas'];
handler.command = ['facebook', 'fb'];

export default handler;*/


import { igdl } from 'ruhend-scraper'
import fetch from 'node-fetch'

const handler = async (m, { text, conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    await m.react(error)
    return conn.reply(m.chat, '🏞️ Ingresa un enlace de Facebook válido.', m)
  }

  try {
    await m.react(rwait)
    await conn.reply(m.chat, '🌴 *Descargando video de Facebook...*', m)

    const res = await igdl(args[0])
    const result = res?.data

    if (!result || result.length === 0) {
      await m.react(error)
      return conn.reply(m.chat, '❌ No se encontraron resultados para ese enlace.', m)
    }

    const data = result.find(i => i.resolution === "720p (HD)") || result.find(i => i.resolution === "360p (SD)")
    if (!data || !data.url) {
      await m.react(error)
      return conn.reply(m.chat, '❌ No se encontró un video con resolución adecuada.', m)
    }

    const response = await fetch(data.url)
    if (!response.ok) throw new Error('No se pudo descargar el video.')

    const buffer = await response.buffer()
    const fileSize = Buffer.byteLength(buffer)
    const isLarge = fileSize > 30 * 1024 * 1024 // 30 MB

    const caption = `\`\`\`◜ Facebook Download ◞\`\`\`\n\n🏞️ *Calidad:* ${data.resolution}\n🌐 *Enlace:* ${args[0]}\n${isLarge ? '📄 *El video pesa más de 30 MB, se envía como documento.*' : '🎥 *Video ligero, enviado normalmente.*'}\n\n✅ *Descarga exitosa.*`

    const mensaje = {
      caption,
      fileName: 'facebook.mp4',
      mimetype: 'video/mp4'
    }

    if (isLarge) {
      await conn.sendMessage(m.chat, { document: buffer, ...mensaje }, { quoted: m })
    } else {
      await conn.sendMessage(m.chat, { video: buffer, ...mensaje }, { quoted: m })
    }

    await m.react(done)
  } catch (e) {
    console.error(e)
    await m.react(error)
    return conn.reply(m.chat, '❌ Error al descargar o enviar el video. Verifica el enlace o intenta más tarde.', m)
  }
}

handler.help = ['facebook', 'fb']
handler.tags = ['descargas']
handler.command = ['facebook', 'fb']
handler.register = true

export default handler