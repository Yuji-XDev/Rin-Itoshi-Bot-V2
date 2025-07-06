let handler = async (m, { conn }) => {
  let imgurl = 'https://files.catbox.moe/nmseef.png';
  const texto = `ʜᴏʟᴀ
    ╔═══════ • ° ❁⊕❁ ° • ═══════╗
        💰⃟⃢᭄͜═✩═[𝐌𝐄𝐍𝐔-𝐑𝐏𝐆]═✩═⃟⃢᭄͜🏆
    ╚═══════ • ° ❁⊕❁ ° • ═══════╝

> 💰🎮⊹ 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐝𝐞 𝐞𝐜𝐨𝐧𝐨𝐦𝐢́𝐚 𝐲 𝐑𝐏𝐆 𝐩𝐚𝐫𝐚 𝐠𝐚𝐧𝐚𝐫 𝐝𝐢𝐧𝐞𝐫𝐨 𝐲 𝐨𝐭𝐫𝐨𝐬 𝐫𝐞𝐜𝐮𝐫𝐬𝐨𝐬 🏆💎⊹

━⃨⃛━╼─╍╍╍─╍▻◅╍─╍╍╼╼━⃨⃛╍╍
❖─┅─┅〈 𝑹 𝑷 𝑮
┃𐇛 _.aventura_
┃𐇛 _.baltop_
┃𐇛 _.berburu_
┃𐇛 _.bank_
┃𐇛 _.cofre_
┃𐇛 _.depositar_
┃𐇛 _.explorar_
┃𐇛 _.gremio_
┃𐇛 _.halloween_
┃𐇛 _.heal_
┃𐇛 _.inventario_
┃𐇛 _.mazmorra_
┃𐇛 _.monthly_
┃𐇛 _.retirar_
┃𐇛 _.navidad_
┃𐇛 _.robar_
┃𐇛 _.protituirse_
┃𐇛 _.weekly_
┃𐇛 _.pay_
╰━≡

❖─┅─┅〈 𝑬𝑪𝑶𝑵𝑶𝑴𝑰𝑨
┃⛨ _.canjear *<código>*_
┃⛨ _.wallet_
┃⛨ _.apostar *<cantidad>*_
┃⛨ _.cf_
┃⛨ _.crimen_
┃⛨ _.daily_
┃⛨ _.regalo
┃⛨ _.minar_
┃⛨ _.robarxp_
┃⛨ _.buy - Buyall_
┃⛨ _.ruleta *<cantidad> <color>*_
┃⛨ _.trabajar_
┃⛨ _.slot *<apuesta>*_
╰━≡
━⃨⃛━╼─╍╍╍─╍▻◅╍─╍╍╼╼━⃨⃛╍╍`.trim();

  await conn.sendMessage(m.chat, {
    image: { url: imgurl },
    caption: texto,
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: packname,
        body: dev,
        thumbnailUrl: icono,
        mediaType: 1,
        renderLargerThumbnail: false,
        showAdAttribution: true,
        mediaUrl: 'https://whatsapp.com/channel/0029VbAtbPA84OmJSLiHis2U',
        sourceUrl: 'https://whatsapp.com/channel/0029VbAtbPA84OmJSLiHis2U'
      }
    }
  }, { quoted: m });
};

handler.help = ['menurpg']
handler.tags = ['main']
handler.command = ['menur', 'menurpg']

export default handler
