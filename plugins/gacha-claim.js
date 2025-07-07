import { promises as fs } from 'fs';

const charactersFilePath = './src/database/characters.json';
const haremFilePath = './src/database/harem.json';
const cooldowns = {};

async function loadJSON(path, errorMsg) {
    try {
        const data = await fs.readFile(path, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error(errorMsg);
    }
}

async function saveJSON(path, data, errorMsg) {
    try {
        await fs.writeFile(path, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
        throw new Error(errorMsg);
    }
}

const handler = async (m, { conn }) => {
    const userId = m.sender;
    const now = Date.now();

    if (cooldowns[userId] && now < cooldowns[userId]) {
        const remainingTime = Math.ceil((cooldowns[userId] - now) / 1000);
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        return conn.reply(m.chat, `《✧》Debes esperar *${minutes} minutos y ${seconds} segundos* para usar *#c* de nuevo.`, m);
    }

    if (!m.quoted || m.quoted.sender !== conn.user.jid) {
        return conn.reply(m.chat, '🌲 Debes citar un personaje válido para reclamar.', m);
    }

    try {
        const characters = await loadJSON(charactersFilePath, '❀ No se pudo cargar el archivo characters.json.');
        const harem = await loadJSON(haremFilePath, '❀ No se pudo cargar el archivo harem.json.');
        const quotedText = m.quoted.text;

        const idRegex = /✦ ID:\s?\*(.+?)\*/i;
        const match = quotedText.match(idRegex);

        if (!match || !match[1]) {
            return conn.reply(m.chat, '《✧》No se encontró el ID del personaje en el mensaje citado.', m);
        }

        const characterId = match[1].trim();
        const character = characters.find(c => c.id === characterId);

        if (!character) {
            return conn.reply(m.chat, '《✧》El personaje con ese ID no existe.', m);
        }

        if (character.user && character.user !== userId) {
            return conn.reply(
                m.chat,
                `《✧》El personaje ya fue reclamado por @${character.user.split('@')[0]}, inténtalo en otra ocasión.`,
                m,
                { mentions: [character.user] }
            );
        }

        character.user = userId;
        character.status = 'Reclamado';

        
        if (!harem[userId]) harem[userId] = [];
        harem[userId].push({
            id: character.id,
            name: character.name,
            date: new Date().toISOString()
        });

        await saveJSON(charactersFilePath, characters, '❀ No se pudo guardar el archivo characters.json.');
        await saveJSON(haremFilePath, harem, '❀ No se pudo guardar el archivo harem.json.');

        cooldowns[userId] = now + 30 * 60 * 1000;

        return conn.reply(m.chat, `✨ Has reclamado a *${character.name}* con éxito y fue añadido a tu harem.`, m);

    } catch (error) {
        return conn.reply(m.chat, `✘ Error al reclamar el personaje: ${error.message}`, m);
    }
};

handler.help = ['claim'];
handler.tags = ['gacha'];
handler.command = ['c', 'claim', 'reclamar'];
handler.group = true;

export default handler;