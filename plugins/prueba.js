import fetch from 'node-fetch';

const handler = async (m, { conn, text, command }) => {
    if (!text) {
        return conn.reply(m.chat, '❌ Por favor proporciona un enlace válido de YouTube.', m);
    }

    try {
        // Nueva API local para obtener el audio
        const apiUrl = `http://de01.uniplex.xyz:5194/download_audio?url=${encodeURIComponent(text)}`;
        const response = await fetch(apiUrl);
        const result = await response.json();

        // Validaciones de respuesta de la API
        if (!result || !result.file_url) {
            return conn.reply(m.chat, '❌ No se pudo descargar el audio. Verifica el enlace e intenta nuevamente.', m);
        }

        const audioUrl = result.file_url;
        const caption = `✅ *Audio descargado correctamente.*`;

        // Enviar el audio al usuario
        await conn.sendMessage(
            m.chat,
            {
                audio: { url: audioUrl },
                mimetype: 'audio/mp4',
                ptt: false, // Cambia a `true` si deseas enviar como nota de voz
            },
            { quoted: m }
        );

        // Enviar mensaje de confirmación
        await conn.reply(m.chat, caption, m);
    } catch (error) {
        console.error(error);
        conn.reply(m.chat, '❌ Ocurrió un error al intentar descargar el audio.', m);
    }
};

// Comandos aceptados
handler.command = /^(mp3)$/i;

export default handler;
