import { prepareWAMessageMedia } from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

const handler = async (m, { conn, usedPrefix }) => {
  await m.react('💔');

  try {
   
    const titulo = '💠 𝐌𝐄𝐍𝐔́ 𝐋𝐈𝐒𝐓𝐀 💠';
    const texto = `
  〔👤 𝐃𝐀𝐓𝐎𝐒 𝐃𝐄𝐋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎〕
┃ 🪪 𝗡𝗼𝗺𝗯𝗿𝗲: *${conn.getName(m.sender)}*
┃ 🧬 𝗥𝗮𝗻𝗴𝗼: *${global.db.data.users[m.sender]?.role || 'Sin rango'}*
┃ 🧭 𝗡𝗶𝘃𝗲𝗹: *${global.db.data.users[m.sender]?.level || 0}*
┃ 📊 𝗘𝘅𝗽: *${global.db.data.users[m.sender]?.exp || 0}*
╰━━━━━━━━━━━━━━━━━━━━╯

⌬ 𝐌𝐄𝐍𝐔́ 𝐃𝐄 𝐂𝐀𝐓𝐄𝐆𝐎𝐑𝐈𝐀𝐒 ⌬

┏━━━━━◈◈◈━━━━━┓
┃ ⚙️ *#menugp* — Grupos
┃ 🎨 *#menulogos* — Logos
┃ 💖 *#dev* — Desarrollador
┃ 🔞 *#menu18* — +18
┃ 💿 *#menu2* — Extra
┃ 🔎 *#menusearch* — Buscadores
┃ 📥 *#menudl* — Descargas
┃ 🗡️ *#menurpg* — Rol/RPG
┗━━━━━◈◈◈━━━━━┛
`;


    const imagen = 'https://files.catbox.moe/35wxsf.jpg';
    const imgBuffer = await (await fetch(imagen)).buffer();
    const media = await prepareWAMessageMedia({ image: imgBuffer }, { upload: conn.waUploadToServer });

    
    const buttons = [
      { buttonId: `${usedPrefix}reg black.18`, buttonText: { displayText: '🛡️ VERIFICAR' }, type: 1 },
      { buttonId: `${usedPrefix}allmenu`, buttonText: { displayText: '✅ MENU COMPLETO' }, type: 1 }
    ];


    const sections = [
      {
        title: "✦ MENÚS DISPONIBLES ✦",
        rows: [
         { title: "📥 𝙈𝙚𝙣𝙪́ 𝙙𝙚 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙨", description: "🎧 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙙𝙚 𝙡𝙖𝙨 𝙥𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡𝙚𝙨 𝙧𝙚𝙙𝙚𝙨: 𝙔𝙤𝙪𝙏𝙪𝙗𝙚, 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠, 𝙄𝙜, 𝙚𝙩𝙘.", id: `${usedPrefix}menudl` },
         { title: "🧿 𝑴𝑬𝑵𝑼́ 𝑬𝑪𝑶𝑵𝑶𝑴𝑰́𝑨 + 𝑹𝑷𝑮 ⚔️", description: "🎮 𝘾𝙧𝙚𝙖 𝙩𝙪 𝙖𝙫𝙚𝙣𝙩𝙪𝙧𝙖, 𝙧𝙚𝙘𝙤𝙜𝙚 𝙧𝙚𝙘𝙪𝙧𝙨𝙤𝙨, 𝙜𝙖𝙣𝙖 𝙤𝙧𝙤 𝙮 𝙙𝙤𝙢𝙞𝙣𝙖 𝙚𝙡 𝙢𝙪𝙣𝙙𝙤 𝙍𝙋𝙂 ⚔️", id: `${usedPrefix}menurpg` },
         { title: "🔍 𝐌𝐄𝐍𝐔́ 𝐃𝐄 𝐁𝐔́𝐒𝐐𝐔𝐄𝐃𝐀𝐒 🌐", description: "⟡ 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐞𝐬𝐩𝐞𝐜𝐢𝐚𝐥𝐞𝐬 𝐩𝐚𝐫𝐚 𝐛𝐮𝐬𝐜𝐚𝐫 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐜𝐢𝐨́𝐧, 𝐚𝐮𝐝𝐢𝐨𝐬, 𝐯𝐢𝐝𝐞𝐨𝐬 𝐲 𝐦𝐮𝐜𝐡𝐨 𝐦𝐚́𝐬 𝐞𝐧 𝐥𝐢́𝐧𝐞𝐚 🌍", id: `${usedPrefix}menuse` },
         { title: "👑 𝑴𝑬𝑵𝑼 𝑶𝑾𝑵𝑬𝑹 👑", description: "𝐂𝐨𝐧𝐭𝐫𝐨𝐥 𝐚𝐯𝐚𝐬𝐚𝐧𝐝𝐨 𝐩𝐚𝐫𝐚 𝐨𝐰𝐞𝐧𝐞𝐫𝐬", id: `${usedPrefix}dev` },
         { title: "🎐 𝑴𝑬𝑵𝑼 𝑨𝑼𝑫𝑰𝑶𝑺🎚️", description: "𝐌𝐞𝐧𝐮 𝐚𝐮𝐝𝐢𝐨𝐬 𝐱𝐝", id: `${usedPrefix}menu2` },
         { title: "👤 𝑴𝑬𝑵𝑼 / 𝑷𝑬𝑹𝑭𝑰𝑳", description: "🚀 𝐄𝐝𝐢𝐭𝐚 𝐭𝐮 𝐩𝐞𝐫𝐟𝐢𝐥 𝐚 𝐭𝐮 𝐠𝐮𝐬𝐭𝐨.", id: `${usedPrefix}perfildatesl` },
         { title: "👥 𝑴𝑬𝑵𝑼 𝑮𝑹𝑼𝑷𝑶𝑺", description: "𝐀𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐜𝐢𝐨𝐧 𝐝𝐞 𝐠𝐫𝐮𝐩𝐨𝐬.", id: `${usedPrefix}menugp` },
         { title: "🔞 𝑴𝑬𝑵𝑼 +18", description: "𝐜𝐨𝐧𝐭𝐞𝐧𝐢𝐝𝐨 𝐍𝐒𝐅𝐖", id: `${usedPrefix}menu18` },
         { title: "❤️ 𝑴𝑬𝑵𝑼 𝑳𝑶𝑮𝑶𝑺", description: "👾 𝑴𝑬𝑵𝑼 𝑳𝑶𝑮𝑶𝑺𝑻𝑰𝑷𝑶𝑺 🎭.", id: `${usedPrefix}menulogos` },
        ]
      }
    ];


    await conn.sendMessage(m.chat, {
      image: media.imageMessage,
      caption: titulo + '\n\n' + texto.trim(),
      footer: '⏤͟͞ू⃪ SUKUNA - 𝑩𝑶𝑻 • Powered by black',
      buttons: [
        ...buttons,
        {
          type: 4,
          nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
              title: 'ධ⃟🌹 𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓 🐉',
              sections
            })
          }
        }
      ],
      headerType: 1,
      viewOnce: true,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 1000,
        isForwarded: true
      }
    }, { quoted: m });

    await m.react('✅');
  } catch (e) {
    console.error(e);
    await m.react('❌');
    await conn.reply(m.chat, '*❌ Error al mostrar el menú.*\n' + e.message, m);
  }
};

handler.help = ['menulist'];
handler.tags = ['main'];
handler.command = ['menulist'];
export default handler;