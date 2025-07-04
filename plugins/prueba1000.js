/*import fetch from 'node-fetch';

let handler = async (m, { conn, text, command }) => {
  if (!text) return m.reply('🎨 Ejemplo: *.luffy luffy y pikachu*');

  const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(text)}`;

  m.reply('🎨 Generando imagen, espera unos segundos...');

  try {
    await conn.sendMessage(m.chat, {
      image: { url },
      caption: `🖼️ Imagen generada de: *${text}*`,
      footer: '¿Quieres otra imagen parecida?',
      buttons: [
        { buttonId: `.temu ${text}`, buttonText: { displayText: '🔁 Generar otra' }, type: 1 }
      ],
      headerType: 4
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply('❌ Ocurrió un error al generar la imagen. Intenta de nuevo.');
  }
};

handler.command = ['temu'];
handler.help = ['temu <texto>'];
handler.tags = ['ia', 'imagen', 'temu'];

export default handler;


import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  if (!text) return m.reply('🎨 Ejemplo: *.temu luffy y pikachu estilo anime*');

  const apiKey = 'AQUÍ_TU_API_KEY_REPLICATE'; // reemplaza con tu API Key
  const version = 'cbf835ad0f2b3e1fd7aef6e9615fc314ad61e5c8261a3f038b6b3897c9b4b905'; // modelo realistic-vision-v6

  const body = {
    version,
    input: {
      prompt: text + ', anime style, high quality, 4k, detailed',
      width: 512,
      height: 512
    }
  };

  m.reply('🎨 Generando imagen estilo anime...');

  try {
    let res = await fetch('https://api.replicate.com/v1/predictions', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    let json = await res.json();
    let getUrl = json.urls.get;

    let img = '';
    for (let i = 0; i < 60; i++) {
      let check = await fetch(getUrl, {
        headers: { 'Authorization': `Token ${apiKey}` }
      });
      let status = await check.json();
      if (status.status === 'succeeded') {
        img = status.output[0];
        break;
      } else if (status.status === 'failed') {
        throw 'Falló la generación';
      }
      await new Promise(r => setTimeout(r, 2000));
    }

    await conn.sendMessage(m.chat, {
      image: { url: img },
      caption: `🖼️ Imagen generada de: *${text}*`,
      footer: '¿Quieres otra imagen parecida?',
      buttons: [
        { buttonId: `.temu ${text}`, buttonText: { displayText: '🔁 Generar otra' }, type: 1 }
      ],
      headerType: 4
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply('❌ Error generando imagen. Verifica tu API Key de Replicate.');
  }
};

handler.command = ['temu'];
handler.help = ['temu <texto>'];
handler.tags = ['ia', 'imagen'];

export default handler;