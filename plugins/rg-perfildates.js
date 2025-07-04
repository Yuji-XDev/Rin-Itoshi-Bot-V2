let handler = async (m, { conn, usedPrefix }) => {
  let img = `https://files.catbox.moe/3gxuzq.jpg`;
  let txt = `╭───✦ 🌌 𝐏𝐑𝐎𝐅𝐈𝐋 𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒
│ 📓 Manual de edición de perfil
│ 🧠 Define tu identidad. El resto es ruido.
│
│ 🎉 ${usedPrefix}setbirth ┊ Configura tu fecha de nacimiento.
│ 🗑️ ${usedPrefix}delbirth ┊ Elimina tu fecha de nacimiento.
│ 🖋️ ${usedPrefix}setdesc ┊ Edita la descripción de tu perfil.
│ 🧻 ${usedPrefix}deldesc ┊ Borra tu descripción.
│ 🪞 ${usedPrefix}setgenre ┊ Establece tu género.
│ 🚫 ${usedPrefix}delgenre ┊ Elimina tu género del perfil.
│ 💞 ${usedPrefix}marry ┊ Establece vínculo con otro usuario.
│ 💔 ${usedPrefix}divorse ┊ Rompe el vínculo actual.
╰─────────────────────⟢`;

  const buttons = [
    { 
      buttonId: `${usedPrefix}profile`,
      buttonText: { displayText: "🧙‍♂️ ⍴ᥱr𝖿іᥣ" }, type: 1
    },
    { 
      buttonId: `${usedPrefix}p`,
      buttonText: { displayText: "🎄 ⍴іᥒg" }, type: 1
    },
  ];
  
   const fkontak = {
    key: {
      participants: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      fromMe: false,
      id: "Halo"
    },
    message: {
      contactMessage: {
        displayName: "✦⃟⛧ ISAGI",
        vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;✦⃟⛧ ISAGI;;;\nFN:✦⃟⛧ ISAGI\nitem1.TEL;waid=1234567890:+12 3456-7890\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
      }
    },
    participant: "0@s.whatsapp.net"
  };
  

  await conn.sendMessage(m.chat, {
    image: { url: img },
    caption: txt,
    footer: "⭐ ʀɪɴ ɪᴛᴏsʜɪ ʙᴏᴛ ᴍᴅ ✨",
    buttons: buttons,
    viewOnce: true,
    contextInfo: { forwardingScore: 999, isForwarded: true, fkontak }
  }, { quoted: m });
  await m.react('👻');
};

handler.command = ['perfildates', 'pedates', 'perd'];
handler.tag = ['rg'];
handler.help = ['perfildates'];
handler.coin = 2;

export default handler;