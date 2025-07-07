let handler = async (m, { conn, usedPrefix }) => {
  const imageUrl = 'https://files.catbox.moe/3gxuzq.jpg';
  const caption = `┌─〔🌌 *AJUSTES DE PERFIL* 〕─┐
│ 〣 🧩 *Dale forma a tu identidad.*
│
│ 🎂 ${usedPrefix}setbirth - Añadir cumpleaños
│ 🗑️ ${usedPrefix}delbirth - Borrar cumpleaños
│ 📄 ${usedPrefix}setdesc - Editar biografía
│ 🧻 ${usedPrefix}deldesc - Borrar biografía
│ 🚻 ${usedPrefix}setgenre - Elegir género
│ 🚫 ${usedPrefix}delgenre - Quitar género
│ 💍 ${usedPrefix}marry - Casarse con alguien
│ 💔 ${usedPrefix}divorce - Divorciarse
└─────────────────────┘`;

  const botones = [
    {
      type: 1,
      buttonId: `${usedPrefix}profile`,
      buttonText: { displayText: '🥀 Ver Perfil' }
    },
    {
      type: 1,
      buttonId: `${usedPrefix}menu`,
      buttonText: { displayText: '🌲 Menú Principal' }
    }
  ];

  const contexto = {
    forwardingScore: 1000,
    isForwarded: true,
    externalAdReply: {
      title: '🌪️ Configuración de Perfil',
      body: '⛩️ Administra tu identidad con Sukuna Bot ⛩️',
      thumbnailUrl: imageUrl,
      mediaType: 1,
      renderLargerThumbnail: true
    }
  };

  await conn.sendMessage(m.chat, {
    image: { url: imageUrl },
    caption,
    footer: '🏞️ Sukuna Profile Manager',
    buttons: botones,
    viewOnce: true,
    contextInfo: contexto
  }, { quoted: m });

  await m.react('👻');
};

handler.command = ['perfildates', 'menuperfil'];
handler.tags = ['rg'];
handler.help = ['perfildates'];
handler.coin = 3;

export default handler;