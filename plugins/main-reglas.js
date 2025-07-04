let handler = async (m, { conn, usedPrefix, command, text }) => {
  let texto = '';

  if (['botreglas', 'reglasdelbot', 'reglasbot', 'reglas'].includes(command)) {
    texto = `
┏━━━━━━━━━━━━━━━━━━━⬣
┃ ⚽ 𝗥𝗘𝗦𝗣𝗘𝗧𝗔 𝗟𝗔𝗦 𝗥𝗘𝗚𝗟𝗔𝗦 ☃️
┗━━━━━━━━━━━━━━━━━━━⬣
> ╭─⋄
> │• 𝔑𝔬 𝔩𝔩𝔞𝔪𝔞𝔯 𝔞𝔩 𝔟𝔬𝔱.
> │• 𝔑𝔬 𝔥𝔞𝔠𝔢𝔯𝔩𝔢 𝔰𝔭𝔞𝔪 𝔞𝔩 𝔟𝔬𝔱.
> │• 𝔓𝔢𝔯𝔡𝔢𝔯 𝔭𝔢𝔯𝔪𝔦𝔰𝔬 𝔭𝔞𝔯𝔞 𝔞ñ𝔞𝔡𝔦𝔯𝔩𝔬 𝔞 𝔲𝔫 𝔤𝔯𝔲𝔭𝔬.
> │• ℭ𝔬𝔫𝔱𝔞𝔠𝔱𝔞 𝔞𝔩 𝔠𝔯𝔢𝔞𝔡𝔬𝔯 𝔰𝔦 𝔢𝔰 𝔫𝔢𝔠𝔢𝔰𝔞𝔯𝔦𝔬.
> │• 𝔘𝔰𝔞 𝔢𝔩 𝔟𝔬𝔱 𝔡𝔢 𝔣𝔬𝔯𝔪𝔞 𝔞𝔭𝔯𝔬𝔭𝔦𝔞𝔡𝔞.
> ╰─⋄

━━━━━━━━━━━━━━━━━━━━
│📚  \`N O T A\`
╰─◇◈◇◈◇◈◇◈◇◈⋄
\`\`\`Si rompe alguna de las reglas del bot, puede ser baneado y bloqueado del bot.\`\`\`
━━━━━━━━━━━━━━━━━━━━
│⚽  \`I N F O\`
╰─◇◈◇◈◇◈◇◈◇◈⋄
\`\`\`Si te gusta el bot, también puedes ir al repositorio y dejar una 🌟.\`\`\`
━━━━━━━━━━━━━━━━━━━━

> ${md}
> ${textbot}
    `.trim();

    await conn.sendFile(m.chat, catalogo, 'isagi.mp4', texto, fkontak);

  } else if (['gruporeglas', 'reglasgp'].includes(command)) {
    if (!m.isGroup) {
      return conn.reply(m.chat, '❗ Este comando solo se puede usar en grupos.', m);
    }

    try {
      const groupInfo = await conn.groupMetadata(m.chat);
      const url = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null);
      texto = `
📜 *Reglas del grupo:*
*"${groupInfo.subject}"*

${groupInfo.desc?.trim() || 'No hay reglas establecidas en la descripción del grupo.'}
      `.trim();

      const fallbackImage = `${global.logo}`;

      await conn.sendFile(
        m.chat,
        url || fallbackImage,
        'group.jpg',
        texto,
        m
      );

    } catch (e) {
      console.error(e);
      await conn.reply(m.chat, '❌ No se pudieron obtener las reglas del grupo. Asegúrate de usar este comando en un grupo válido.', m);
    }
  }
};

handler.help = ['botreglas', 'gruporeglas'];
handler.tags = ['main'];
handler.command = ['botreglas', 'reglasdelbot', 'reglasbot', 'reglas', 'gruporeglas', 'reglasgp'];
handler.register = true;
handler.coin = 4;

export default handler;