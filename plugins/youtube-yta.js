import fetch from "node-fetch";
import yts from "yt-search";

const encodedApi = "aHR0cHM6Ly9hcGkudnJlZGVuLndlYi5pZC9hcGkveXRtcDM=";

const getApiUrl = () => Buffer.from(encodedApi, "base64").toString("utf-8");

const fetchWithRetries = async (url, maxRetries = 2) => {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data?.status === 200 && data.result?.download?.url) {
        return data.result;
      }
    } catch (error) {
      console.error(`Intento ${attempt + 1} fallido:`, error.message);
    }
  }
  throw new Error("No se pudo obtener la música después de varios intentos.");
};

let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    if (!text || !text.trim()) {
      return conn.reply(m.chat, `*❌ Por favor, ingresa un título o URL de YouTube.*`, m);
    }

    await conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } });

    const searchResults = await yts(text.trim());
    const video = searchResults.videos[0];
    if (!video || !video.url) throw new Error("No se encontraron resultados válidos.");

    const apiUrl = `${getApiUrl()}?url=${encodeURIComponent(video.url)}`;
    const apiData = await fetchWithRetries(apiUrl);
    const meta = apiData.metadata;

    const audioMessage = {
      audio: { url: apiData.download.url },
      mimetype: "audio/mpeg",
      ptt: false, // true para nota de voz
      fileName: apiData.download.filename,
      contextInfo: {
        externalAdReply: {
          title: meta.title,
          body: 'YouTube - MP3',
          thumbnailUrl: meta.thumbnail,
          mediaType: 2,
          mediaUrl: meta.url,
          sourceUrl: meta.url,
          showAdAttribution: true,
        },
      },
    };

    await conn.sendMessage(m.chat, audioMessage, { quoted: m });
    await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

  } catch (error) {
    console.error("Error:", error);
    await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
    await conn.reply(m.chat, `❌ No se pudo obtener el audio. Intenta con otro título o más tarde.`, m);
  }
};


handler.command = ['yta'];
handler.help = ['yta'];
handler.tags = ['descargas'];

export default handler;