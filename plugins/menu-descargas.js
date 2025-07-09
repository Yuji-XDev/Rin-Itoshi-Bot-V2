let handler = async (m, { conn }) => {
  let imgurl = 'https://files.catbox.moe/nmseef.png';
  const texto = `ʜᴏʟᴀ
    ╔═══════ • ° ❁⊕❁ ° • ═══════╗
        📥⃟⃢᭄͜═✩═[𝐌𝐄𝐍𝐔-𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒]═✩═⃟⃢᭄͜📂
    ╚═══════ • ° ❁⊕❁ ° • ═══════╝

> 📥⊹ 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐝𝐞 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐬 𝐩𝐚𝐫𝐚 𝐯𝐚𝐫𝐢𝐨𝐬 𝐚𝐫𝐜𝐡𝐢𝐯𝐨𝐬 📂⊹

━⃨⃛━╼─╍╍╍─╍▻◅╍─╍╍╼╼━⃨⃛╍╍
❥ 🎃 _.pinterestdl *<url>*_
❥ 🎃 _.tksearch *<búsqueda>*_
❥ 🎃 _.tkseguir_
❥ 🎃 _.facebook - fb_
❥ 🎃 _.gitclone *<url git>*_
❥ 🎃 _.instagram - ig_
❥ 🎃 _.mediafire - mf_
❥ 🎃 _.mega_
❥ 🎃 _.apk_
❥ 🎃 _.npmdl_
❥ 🎃 _.pinvid *<link>*_
❥ 🎃 _.playlist_
❥ 🎃 _.play_
❥ 🎃 _.play2_
❥ 🎃 _.spotify_
❥ 🎃 _.tiktokrandom_
❥ 🎃 _.snapchat_
❥ 🎃 _.tiktok - tt_
❥ 🎃 _.tt2_
❥ 🎃 _.tiktokimg_ 
❥ 🎃 _.tiktokmp3_ 
❥ 🎃 _.audio *<url>*_
❥ 🎃 _.video *<url>*_
❥ 🎃 _.tiktokhd_
❥ 🎃 _.twitter *<url>*_
❥ 🎃 _.xnxxdl_
❥ 🎃 _.xvideosdl_
❥ 🎃 _.ytmp4doc_ 
❥ 🎃 _.kwaidl_
❥ 🎃 _.likee *<url>*_
❥ 🎃 _.ytmp3doc_ 
❥ 🎃 _.aplay2_
❥ 🎃 _.capcut *<url>*_
❥ 🎃 _.terabox_
❥ 🎃 _.yta_
❥ 🎃 _.iaimg *texto*_
❥ 🎃 _.ytv_
❥ 🎃 _.sound_
❥ 🎃 _.play3_
❥ 🎃 _.apk2_
❥ 🎃 _.tiktoktrends_
❥ 🎃 _.fdroid_
❥ 🎃 _.fb2_
━⃨⃛━╼─╍╍╍─╍▻◅╍─╍╍╼╼━⃨⃛╍╍
`.trim();

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

handler.help = ['menudl']
handler.tags = ['main']
handler.command = ['menudescargas', 'menudl']

export default handler
