import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';

  if (!/image\/(jpe?g|png)/.test(mime)) {
    return m.reply(`📸 *Envía una imagen o responde a una con el comando* *${usedPrefix + command}*`);
  }

  // Descargar la imagen
  let img = await q.download();
  
  // Convertir imagen a base64
  let imgBase64 = img.toString('base64');

  // Usamos una API gratuita (demo de HuggingFace o alternativa)
  let apiUrl = `https://api-inference.huggingface.co/models/caidas/swin2sr-classical-sr-x2-64`; // También puedes usar RealESRGAN
  
  let response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer hf_your_token_aquí', // opcional si es pública
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      inputs: {
        image: `data:image/jpeg;base64,${imgBase64}`
      }
    })
  });

  if (!response.ok) {
    return m.reply(`❌ Error al mejorar la imagen. Intenta de nuevo más tarde.`);
  }

  let result = await response.blob ? response.blob() : await response.buffer();

  await conn.sendFile(m.chat, result, 'hd-image.jpg', `🖼️ Aquí tienes tu imagen en HD`, m);
};

handler.help = ['hd2'];
handler.tags = ['tools', 'ai'];
handler.command = ['hd2'];

export default handler;