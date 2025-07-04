import fetch from 'node-fetch';

var handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) {
        return conn.reply(m.chat, `*🧩 Necesito un enlace válido de TikTok. No hagas perder el tiempo.*`, m, rcanal);
    }

    try {
        await conn.reply(m.chat, `*♟️ Procesando... No te emociones, aún no has ganado nada.*`, m);

        const tiktokData = await tiktokdl(args[0]);

        if (!tiktokData || !tiktokData.data || !tiktokData.data.play) {
            return conn.reply(m.chat, "⛔ Error: El video no pudo ser recuperado. Fallaste.", m);
        }

        const videoURL = tiktokData.data.play;

        if (videoURL) {
            await conn.sendFile(m.chat, videoURL, "tiktok.mp4", `╭─❍「 TikTok Downloader 」
            │ 🎥 𝒂𝒒𝒖𝒊 𝒆𝒔𝒕𝒂́. 𝑼𝒏 𝒑𝒐𝒄𝒐 𝒅𝒆 𝒄𝒐𝒏𝒕𝒆𝒏𝒊𝒅𝒐 𝒑𝒂𝒓𝒂 𝒕𝒖 𝒄𝒆𝒓𝒆𝒃𝒓𝒐.
            ╰───────────────⬣`, m);
        } else {
            return conn.reply(m.chat, "🎭 No se pudo descargar. Tal vez no estás listo.", m);
        }
    } catch (error1) {
        return conn.reply(m.chat, `💢 Error: ${error1.message}`, m);
    }
};

handler.help = ['tiktok'].map((v) => v + ' *<link>*');
handler.tags = ['descargas'];
handler.command = ['tiktok', 'tt'];
//handler.group = true;
handler.register = true;
handler.coin = 2;
handler.limit = true;

export default handler;

async function tiktokdl(url) {
    let tikwm = `https://www.tikwm.com/api/?url=${url}?hd=1`;
    let response = await (await fetch(tikwm)).json();
    return response;
}