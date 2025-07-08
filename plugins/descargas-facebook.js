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

const handler = async (m, { text, conn, args, usedPrefix, command }) => {
if (!args[0]) {
return conn.reply(m.chat, '🏞️ Ingresa Un Link De Facebook', m, rcanal)}
let res
try {
await m.react(rwait)
conn.reply(m.chat, `🌴 *Descargando su video de facebook.*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: dev,
previewType: 0, 
thumbnail: icons,
sourceUrl: channel }}})
res = await igdl(args[0])
} catch {
await m.react(error)
return conn.reply(m.chat, 'Error al obtener datos. Verifica el enlace.', m, fake)}
let result = res.data
if (!result || result.length === 0) {
return conn.reply(m.chat, 'No se encontraron resultados.', m, fake)}
let data
try {
await m.react(rwait)
data = result.find(i => i.resolution === "720p (HD)") || result.find(i => i.resolution === "360p (SD)")
} catch {
await m.react(error)
return conn.reply(m.chat, 'Error al procesar los datos.', m, rcanal)}
if (!data) {
return conn.reply(m.chat, 'No se encontró una resolución adecuada.', m, rcanal)}
let video = data.url
try {
await m.react(rwait)
await conn.sendMessage(m.chat, { video: { url: video }, caption: `\`\`\`◜Facebook - Download◞\`\`\`\n\n> 🏞️ *Calidad:* ${data.resolution}\n> ☄️ *Enlace:* ${args[0]}\n\n⟢🌲 Aquí tienes: 🌪️\n⟢🏞️ ¡Disfruta!` + textbot, fileName: 'fb.mp4', mimetype: 'video/mp4' }, { quoted: m })
await m.react(done)
} catch {
await m.react(error)
return conn.reply(m.chat, '😹 Error al enviar el video.', m, rcanal)}}

handler.help = ['facebook', 'fb']
handler.tags = ['descargas']
handler.command = ['facebook', 'fb']
handler.cookies = 1
handler.register = true

export default handler