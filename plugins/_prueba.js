import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

const handler = async (m, { conn, text }) => {
  if (!text) return m.reply('📌 Ingresa el enlace del TikTok\n\nEjemplo:\n#tiktok https://www.tiktok.com/@user/video/123456');

  try {
    const api = `https://api.koboo.my.id/api/download/v3/tiktok?url=${encodeURIComponent(text)}`;
    const res = await fetch(api);
    const json = await res.json();

    if (!json || !json.data || !json.data.url) {
      return m.reply('❌ No se pudo obtener el video. Asegúrate de que el enlace sea válido.');
    }

    const videoUrl = json.data.url;
    const videoRes = await fetch(videoUrl);
    const buffer = await videoRes.buffer();

    // Si pesa más de 30 MB, enviar como documento
    const isBig = buffer.length > 30 * 1024 * 1024;
    const fileName = 'tiktok.mp4';

    await conn.sendFile(
      m.chat,
      buffer,
      fileName,
      `✅ Aquí tienes tu video de TikTok\n🔗 ${text}`,
      m,
      false,
      { asDocument: isBig }
    );
  } catch (e) {
    console.error(e);
    m.reply('⚠️ Error al procesar el video.');
  }
};

handler.command = /^tiktokv$/i;
export default handler;