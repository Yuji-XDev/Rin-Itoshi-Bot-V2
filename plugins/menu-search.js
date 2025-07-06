let handler = async (m, { conn }) => {
  let imgurl = 'https://files.catbox.moe/nmseef.png';
  const texto = `ʜᴏʟᴀ
    ╔═══════ • ° ❁⊕❁ ° • ═══════╗
        💥⃢᭄͜═✩═[𝐌𝐄𝐍𝐔-𝐒𝐄𝐀𝐑𝐂𝐇]═✩═⃟⃢᭄͜🔎
    ╚═══════ • ° ❁⊕❁ ° • ═══════╝
      
> 🔍⊹ *𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐝𝐞 𝐁𝐮́𝐬𝐪𝐮𝐞𝐝𝐚* ⊹🔎
  
━⃨⃛━╼─╍╍╍─╍▻◅╍─╍╍╼╼━⃨⃛╍╍
❥ 🌲 _.searchhentai_
❥ 🌲 _.cuevanasearch_
❥ 🌲 _.githubsearch_
❥ 🌲 _.google_
❥ 🌲 _.imagen *<query>*_
❥ 🌲 _.infoanime_
❥ 🌲 _.npmjs_
❥ 🌲 _.pinterest *<query>*_
❥ 🌲 _.pornhubsearch_
❥ 🌲 _.soundcloudsearch *<texto>*_
❥ 🌲 _.spotifysearch *<texto>*_
❥ 🌲 _.tiktoksearch *<txt>*_
❥ 🌲 _.tweetposts_
❥ 🌲 _.xnxxsearch *<query>*_
❥ 🌲 _.xvideossearch_
❥ 🌲 _.ytsearch_
❥ 🌲 _.ytsearch2 *<text>*_
❥ 🌲 _.mods *<query>*_
❥ 🌲 _.gnula_
❥ 🌲 _.apksearch_
❥ 🌲 _.wikis_
❥ 🌲 _.fdroidsearch *<término>*_
❥ 🌲 _.movie *<término>*_
❥ 🌲 _.happymodsearch *<búsqueda>*_
❥ 🌲 _.cinecalidadsearch *<búsqueda>*
❥ 🌲 _.yahoosearch *<búsqueda>*_

ֹི࣭࣭࣭࣭࣭࣮ׅ۪۪۪۪۪۪۪۪۪ٜ࣪࣪࣪࣪᷼✾ֹྀ࣭࣭࣭࣭࣭࣮ׅ۪۪۪۪۪۪۪۪۪ٜ࣪࣪࣪࣪᷼⏝𝐒𝐓𝐀𝐋𝐊⏝ֹི࣭࣭࣭࣭࣭࣮ׅ۪۪۪۪۪۪۪۪۪ٜ࣪࣪࣪࣪᷼✾ֹྀ࣭࣭࣭࣭࣭࣮ׅ۪۪۪۪۪۪۪۪۪ٜ࣪࣪࣪࣪᷼

❥ 📚 _.githubstalk *<query>*_
❥ 🔥 _.minestalk *<nombrejugador>*_
❥ 🏔️ _.kwaistalk *<usuario>*_
❥ 🍓 _.telegramstalk *<nombre_usuario>*_
❥ 🌿 _.tiktokstalk *<usuario>*_
❥ 🍬 _.youtubestalk *<nombre de usuario>*_
❥ 🍬 _.instagramstalk *<usuario>*_
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

handler.help = ['menusearch']
handler.tags = ['main']
handler.command = ['menusearch', 'menuse']

export default handler
