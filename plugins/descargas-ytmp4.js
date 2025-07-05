/*import axios from 'axios';
import crypto from 'crypto';

const savetube = {
  api: {
    base: "https://media.savetube.me/api",
    cdn: "/random-cdn",
    info: "/v2/info",
    download: "/download"
  },

  headers: {
    'accept': '/*',
    'content-type': 'application/json',
    'origin': 'https://yt.savetube.me',
    'referer': 'https://yt.savetube.me/',
    'user-agent': 'Postify/1.0.0'
  },

  crypto: {
    hexToBuffer: (hex) => Buffer.from(hex.match(/.{1,2}/g).join(''), 'hex'),

    decrypt: async (enc) => {
      try {
        const secretKey = 'C5D58EF67A7584E4A29F6C35BBC4EB12';
        const data = Buffer.from(enc, 'base64');
        const iv = data.slice(0, 16);
        const content = data.slice(16);
        const key = savetube.crypto.hexToBuffer(secretKey);

        const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
        let decrypted = decipher.update(content);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return JSON.parse(decrypted.toString());
      } catch (err) {
        throw new Error('❌ Error al descifrar la respuesta. SaveTube puede haber cambiado su cifrado.');
      }
    }
  },

  isUrl: (str) => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  },

  youtube: (url) => {
    const patterns = [
      /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/v\/([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
      /youtu\.be\/([a-zA-Z0-9_-]{11})/
    ];
    for (let regex of patterns) {
      if (regex.test(url)) return url.match(regex)[1];
    }
    return null;
  },

  request: async (endpoint, data = {}, method = 'post') => {
    try {
      const { data: res } = await axios({
        method,
        url: `${endpoint.startsWith('http') ? '' : savetube.api.base}${endpoint}`,
        data: method === 'post' ? data : undefined,
        params: method === 'get' ? data : undefined,
        headers: savetube.headers
      });
      return { status: true, data: res };
    } catch (err) {
      return { status: false, error: err.message };
    }
  },

  getCDN: async () => {
    const res = await savetube.request(savetube.api.cdn, {}, 'get');
    return res.status ? { status: true, cdn: res.data.cdn } : res;
  },

  download: async (link) => {
    if (!link) return { status: false, error: "Falta el enlace de YouTube." };
    if (!savetube.isUrl(link)) return { status: false, error: "URL inválida." };

    const id = savetube.youtube(link);
    if (!id) return { status: false, error: "No se pudo extraer el ID del video." };

    try {
      const { cdn } = await savetube.getCDN();
      const info = await savetube.request(`https://${cdn}${savetube.api.info}`, {
        url: `https://www.youtube.com/watch?v=${id}`
      });

      if (!info.status) return info;

      const decrypted = await savetube.crypto.decrypt(info.data.data);

      const dl = await savetube.request(`https://${cdn}${savetube.api.download}`, {
        id,
        downloadType: 'video', // ← Cambiado a video
        quality: '720',         // ← Puedes ajustar esta calidad
        key: decrypted.key
      });

      if (!dl.status || !dl.data?.data?.downloadUrl) {
        return { status: false, error: "No se pudo obtener el enlace de descarga." };
      }

      return {
        status: true,
        result: {
          title: decrypted.title || "Video",
          format: 'mp4',
          url: dl.data.data.downloadUrl,
          thumbnail: decrypted.thumbnail || `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
        }
      };
    } catch (err) {
      return { status: false, error: err.message };
    }
  }
};

const handler = async (m, { conn, args }) => {
  const url = args[0];
  if (!url) return m.reply(`*🌲 Ingresa una URL de YouTube.*`);
  if (!savetube.isUrl(url)) return m.reply(`*🌐 El enlace no es válido*`);

  try {
    await m.react('🕒');
    const res = await savetube.download(url);

    if (!res.status) {
      await m.react('❌');
      return m.reply(`⚠️ Error: ${res.error}`);
    }

    const { title, url: dlUrl } = res.result;

    await conn.sendMessage(m.chat, {
      video: { url: dlUrl }, // ← Enviar como video
      mimetype: 'video/mp4',
      fileName: `${title}.mp4`
    }, { quoted: m });

    await m.react('✅');
  } catch (err) {
    console.error("Error MP4:", err);
    await m.react('❌');
    m.reply(`❌ Error al procesar la descarga. Puede que el archivo sea muy grande o la API haya fallado.`);
  }
};

handler.help = ['video *<url>*'];
handler.tags = ['descargas'];
handler.command = ['video'];

export default handler;
*/

import fetch from "node-fetch";
import yts from 'yt-search';
import axios from "axios";

const formatAudio = ['mp3', 'm4a', 'webm', 'acc', 'flac', 'opus', 'ogg', 'wav'];
const formatVideo = ['360', '480', '720', '1080', '1440', '4k'];

const ddownr = {
  download: async (url, format) => {
    if (!formatAudio.includes(format) && !formatVideo.includes(format)) {
      throw new Error('Formato no soportado, verifica la lista de formatos disponibles.');
    }

    const config = {
      method: 'GET',
      url: `https://p.oceansaver.in/ajax/download.php?format=${format}&url=${encodeURIComponent(url)}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, como Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };

    try {
      const response = await axios.request(config);
      if (response.data && response.data.success) {
        const { id, title, info } = response.data;
        const { image } = info;
        const downloadUrl = await ddownr.cekProgress(id);

        return {
          id: id,
          image: image,
          title: title,
          downloadUrl: downloadUrl
        };
      } else {
        throw new Error('Fallo al obtener los detalles del video.');
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },
  cekProgress: async (id) => {
    const config = {
      method: 'GET',
      url: `https://p.oceansaver.in/ajax/progress.php?id=${id}`,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, como Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };

    try {
      while (true) {
        const response = await axios.request(config);
        if (response.data && response.data.success && response.data.progress === 1000) {
          return response.data.download_url;
        }
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
};

const handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    if (!text.trim()) {
      return conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝚂𝙴𝚁𝚃𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 / 𝙻𝙸𝙽𝙺 𝙳𝙴 𝚄𝙽 𝚅𝙸𝙳𝙴𝙾 𝙳𝙴 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 🎄*`, m, rcanal);
    }

    const search = await yts(text);
    if (!search.all || search.all.length === 0) {
      return m.reply('*[❗] 𝙴𝚁𝚁𝙾𝚁 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾*');
    }

    const videoInfo = search.all[0];
    const { title, thumbnail, views, url } = videoInfo;
    const thumb = (await conn.getFile(thumbnail))?.data;

    const infoMessage = `▢ 𝚃𝙸𝚃𝚄𝙻𝙾: ${title}\n▢ 𝚅𝙸𝚂𝚃𝙰𝚂: ${formatViews(views)}\n▢ 𝙴𝙽𝙻𝙰𝙲𝙴: ${url}`;
    await conn.reply(m.chat, infoMessage, m);

    if (command === 'ytmp3') {
      const api = await ddownr.download(url, 'mp3');
      const result = api.downloadUrl;

      await conn.sendMessage(m.chat, {
        audio: { url: result },
        mimetype: "audio/mpeg",
        ptt: false,
        contextInfo: {
          externalAdReply: {
            title: title,
            body: videoInfo.author.name || 'YouTube',
            mediaUrl: url,
            sourceUrl: url,
            thumbnail: thumb,
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      }, { quoted: m });

    } else if (command === 'ytmp4') {
      let sources = [
        `https://api.siputzx.my.id/api/d/ytmp4?url=${url}`,
        `https://api.zenkey.my.id/api/download/ytmp4?apikey=zenkey&url=${url}`,
        `https://axeel.my.id/api/download/video?url=${encodeURIComponent(url)}`,
        `https://delirius-apiofc.vercel.app/download/ytmp4?url=${url}`
      ];

      let success = false;
      for (let source of sources) {
        try {
          const res = await fetch(source);
          const { data, result, downloads } = await res.json();
          let downloadUrl = data?.dl || result?.download?.url || downloads?.url || data?.download?.url;

          if (downloadUrl) {
            success = true;
            await conn.sendMessage(m.chat, {
              video: { url: downloadUrl },
              fileName: `${title}.mp4`,
              mimetype: 'video/mp4',
              caption: `▢ 𝚃𝙸𝚃𝚄𝙻𝙾: ${title}`,
              thumbnail: thumb,
              contextInfo: {
                externalAdReply: {
                  title: title,
                  body: videoInfo.author.name || 'YouTube',
                  mediaUrl: url,
                  sourceUrl: url,
                  thumbnail: thumb,
                  mediaType: 1,
                  renderLargerThumbnail: true
                }
              }
            }, { quoted: m });
            break;
          }
        } catch (e) {
          console.error(`Error con la fuente ${source}:`, e.message);
        }
      }

      if (!success) {
        return m.reply(`*No se pudo descargar el video:* No se encontró un enlace de descarga válido.`);
      }
    } else {
      throw "Comando no reconocido.";
    }

  } catch (error) {
    return m.reply(`*Error:* ${error.message}`);
  }
};

handler.help = ['ytmp3', 'ytmp4'];
handler.tags = ['descargas'];
handler.command = ['ytmp3', 'ytmp4'];
handler.group = true;
export default handler;

function formatViews(views) {
  if (views >= 1000) {
    return (views / 1000).toFixed(1) + 'k (' + views.toLocaleString() + ')';
  } else {
    return views.toString();
  }
}