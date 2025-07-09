import fetch from 'node-fetch';
import { downloadContentFromMessage } from '@whiskeysockets/baileys';
import fs from 'fs';
import path from 'path';

const handler = async (m, { conn }) => {
  if (!m.quoted || !/image/.test(m.quoted.mimetype)) {
    return m.reply('📸 *Responde a una imagen para mejorarla en HD*');
  }

  try {
    const media = await downloadContentFromMessage(m.quoted, 'image');
    const tempFile = `./tmp/${Date.now()}.jpg`;

    const buffer = await streamToBuffer(media);
    fs.writeFileSync(tempFile, buffer);

    // Sube la imagen a un host temporal (como catbox)
    const form = new FormData();
    form.append('fileToUpload', fs.createReadStream(tempFile), 'image.jpg');

    const uploadRes = await fetch('https://catbox.moe/user/api.php', {
      method: 'POST',
      body: form,
    });

    const imageUrl = await uploadRes.text();
    if (!imageUrl.startsWith('https://')) throw new Error('No se pudo subir la imagen.');

    const apiUrl = `https://api.stellarwa.xyz/tools/upscale?url=${encodeURIComponent(imageUrl)}`;
    const upscaleRes = await fetch(apiUrl);
    const json = await upscaleRes.json();

    if (!json.status || !json.result) {
      throw new Error("❌ No se pudo mejorar la imagen.");
    }

    await conn.sendFile(m.chat, json.result, 'hd.jpg', '✨ Imagen mejorada en HD por *Sukuna Bot MD*', m);
    fs.unlinkSync(tempFile); // borrar archivo temporal
  } catch (e) {
    console.error(e);
    m.reply('❌ Error al mejorar la imagen. Intenta nuevamente.');
  }
};

handler.command = ['hd3', 'upscale'];
export default handler;

// Función auxiliar
function streamToBuffer(stream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on('data', chunk => chunks.push(chunk));
    stream.on('end', () => resolve(Buffer.concat(chunks)));
    stream.on('error', reject);
  });
}