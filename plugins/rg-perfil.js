import moment from 'moment-timezone';
import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {
    let userId;
    if (m.quoted && m.quoted.sender) {
        userId = m.quoted.sender;
    } else {
        userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
    }

    let user = global.db.data.users[userId];

    let name = conn.getName(userId);
    let cumpleanos = user.birth || 'No especificado';
    let genero = user.genre || 'No especificado';
    let pareja = user.marry || 'Nadie';
    let description = user.description || 'Sin Descripción';
    let exp = user.exp || 0;
    let nivel = user.level || 0;
    let role = user.role || 'Aldeano';
    let coins = user.coin || 0;
    let bankCoins = user.bank || 0;

    let perfil = await conn.profilePictureUrl(userId, 'image').catch(_ => 'https://raw.githubusercontent.com/The-King-Destroy/Adiciones/main/Contenido/1745522645448.jpeg');

    let profileText = `⠐⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒
📁 𝗘𝗫𝗣𝗘𝗗𝗜𝗘𝗡𝗧𝗘 𝗔𝗡Á𝗟𝗜𝗧𝗜𝗖𝗢 - 𝗥𝗜𝗡 𝗜𝗧𝗢𝗦𝗛𝗜
⠐⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒⠒

🆔 Usuario: @${userId.split('@')[0]}
🧠 Nombre clave: ${name}
📓 Nota mental: ${description}

╭━━〔 🧬 D𝗔𝗧𝗢𝗦 𝗕𝗔𝗦𝗘 〕━━⬣
┃ 📌 Edad: ${user.age || 'Desconocida'}
┃ 🎂 Cumpleaños: ${cumpleanos}
┃ 🧬 Género: ${genero}
┃ 💍 Vínculo activo: ${pareja}
╰━━━━━━━━━━━━━━━━⬣

╭━━〔 ⚙️ 𝗥𝗘𝗡𝗗𝗜𝗠𝗜𝗘𝗡𝗧𝗢 〕━━⬣
┃ 📈 EXP acumulada: ${exp.toLocaleString()}
┃ 🧪 Nivel actual: ${nivel}
┃ 🏅 Rango estratégico: ${role}

┃ 💰 Wallet: ${coins.toLocaleString()} ${moneda}
┃ 🏛 Banco: ${bankCoins.toLocaleString()} ${moneda}
┃ 🔒 Modo Premium: ${user.premium ? '✔ Activado' : '✖ Desactivado'}
╰━━━━━━━━━━━━━━━━⬣

🧠 Evaluación final:
_"Los números no definen al estratega, pero el estratega los domina."_

> 📎 Usa *#perfildates* para reconfigurar tus datos.
  `.trim();

    await conn.sendMessage(m.chat, { 
        text: profileText,
        contextInfo: {
            mentionedJid: [userId],
            externalAdReply: {
                title: '✧★᭄ꦿ᭄ꦿ𝐏𝐄𝐑𝐅𝐈𝐋 𝐃𝐄 𝐔𝐒𝐔𝐀𝐑𝐈𝐎★᭄ꦿ᭄ꦿ✧',
                body: dev,
                thumbnailUrl: perfil,
                mediaType: 1,
                showAdAttribution: true,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
};

handler.help = ['profile'];
handler.tags = ['rg'];
handler.command = ['profile', 'perfil'];

export default handler;
