import ws from "ws";

let handler = async (m, { conn, usedPrefix, args }) => {
  try {
    if (!args[0] && !m.quoted) {
      return m.reply(`👻 Menciona el número de un bot o responde al mensaje de un bot.\n> ✎ Ejemplo: *${usedPrefix}setprimary @0*`);
    }

    const users = global.jadi
      ? [...new Set(global.jadi.filter(bot => bot?.user?.jid && bot?.ws?.socket?.readyState !== ws.CLOSED))]
      : [];

    let botJid;
    if (m.mentionedJid?.length) {
      botJid = m.mentionedJid[0];
    } else if (m.quoted) {
      botJid = m.quoted.sender;
    } else {
      const inputNumber = args[0].replace(/[^0-9]/g, "");
      if (!inputNumber) return m.reply("⚠️ Número inválido.");
      botJid = inputNumber + "@s.whatsapp.net";
    }

    // Si se refiere al bot principal
    const isMainBot = botJid === conn.user?.jid || botJid === global.conn?.user?.jid;
    const selectedBot = isMainBot ? conn : users.find(bot => bot.user?.jid === botJid);

    if (!selectedBot) {
      return conn.reply(m.chat, `⚠️ El número @${botJid.split("@")[0]} no pertenece a ningún bot activo de esta sesión.\nUsa *#bots* para ver los bots conectados.`, m, { mentions: [botJid] });
    }

    const chat = global.db?.data?.chats?.[m.chat];
    if (!chat) return conn.reply(m.chat, "⚠️ No se pudo acceder a la base de datos del grupo.", m);

    if (chat.primaryBot === botJid) {
      return conn.reply(m.chat, `⚠️ @${botJid.split("@")[0]} ya es el bot primario.`, m, { mentions: [botJid] });
    }

    chat.primaryBot = botJid;

    await conn.sendMessage(m.chat, {
      text: `✅ El bot @${botJid.split("@")[0]} ha sido establecido como *bot primario* en este grupo.\nLos demás bots ya no responderán aquí.`,
      mentions: [botJid]
    }, { quoted: m });

  } catch (e) {
    console.error("❌ Error en .setprimary:", e);
    m.reply("❌ Ocurrió un error al establecer el bot primario. Intenta nuevamente.");
  }
};

handler.help = ["setprimary <@tag>"];
handler.tags = ["jadibot"];
handler.command = ["setprimary"];
handler.group = true;
handler.admin = true;

export default handler;