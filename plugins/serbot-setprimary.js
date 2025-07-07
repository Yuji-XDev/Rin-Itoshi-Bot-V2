/*import ws from 'ws';

let handler = async (m, { conn, usedPrefix, args }) => {
  if (!args[0] && !m.quoted) {
    return m.reply(`*☘️ Menciona el número de un bot o responde al mensaje de un bot.*`);
  }

  const users = [...new Set(global.conns.filter(c => c.user && c.ws?.socket && c.ws.socket.readyState !== ws.CLOSED))];

  let botJid;
  let selectedBot;

  if (m.mentionedJid?.length > 0) {
    botJid = m.mentionedJid[0];
  } else if (m.quoted) {
    botJid = m.quoted.sender;
  } else {
    const raw = args[0]?.replace(/[^0-9]/g, '');
    if (!raw) return m.reply('*⚠️ Número no válido.*');
    botJid = raw + '@s.whatsapp.net';
  }

  if (botJid === conn.user.jid || botJid === global.conn?.user?.jid) {
    selectedBot = conn;
  } else {
    selectedBot = users.find(c => c.user?.jid === botJid);
  }

  if (!selectedBot) {
    return conn.reply(m.chat, `*⚠️ @${botJid.split('@')[0]} no es un bot de esta sesión. Verifica los bots conectados usando* \`#bots\`.`, m, { mentions: [botJid] });
  }

  let chat = global.db.data.chats[m.chat] || (global.db.data.chats[m.chat] = {});

  if (chat.primaryBot === botJid) {
    return conn.reply(m.chat, `*⚠️ @${botJid.split('@')[0]} ya es el bot primario.*`, m, { mentions: [botJid] });
  }

  chat.primaryBot = botJid;
  conn.sendMessage(m.chat, {
    text: `*✅ El bot @${botJid.split('@')[0]} ha sido establecido como primario en este grupo. Los demás bots no responderán aquí.*`,
    mentions: [botJid]
  }, { quoted: fkontak });
};

handler.help = ['setprimary <@tag>'];
handler.tags = ['jadibot'];
handler.command = ['setprimary'];
handler.group = true;
handler.admin = true;

export default handler;*/

import ws from 'ws';

let handler = async (m, { conn, usedPrefix, args, isAdmin, isROwner }) => {
  if (!args[0] && !m.quoted && (!m.mentionedJid || m.mentionedJid.length === 0)) {
    return m.reply(`*🧃 Menciona o responde al bot que deseas establecer como primario.*\nEjemplo:\n${usedPrefix}setprimary @bot\nO responde a un mensaje del bot con:\n${usedPrefix}setprimary`);
  }

  const chat = global.db.data.chats[m.chat] ?? (global.db.data.chats[m.chat] = {});
  const users = global.conns.filter(c => c.user && c.ws?.socket?.readyState !== ws.CLOSED);
  let botJid;

  // Obtener el JID del bot mencionado, citado o por número directo
  if (m.mentionedJid?.length) {
    botJid = m.mentionedJid[0];
  } else if (m.quoted) {
    botJid = m.quoted.sender;
  } else {
    botJid = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  }

  const selectedBot = (botJid === conn.user.jid || botJid === global.conn.user.jid)
    ? conn
    : users.find(c => c.user?.jid === botJid);

  if (!selectedBot) {
    return conn.reply(m.chat, `✧ El número que mencionaste no es un bot activo de *Shadow′s Club*.\n\nUsa *#bots* para ver los bots disponibles.`, m);
  }

  // Verificar que el usuario tenga permiso (admin del grupo o global.owner)
  const senderJid = m.sender;
  const isBotOwner = global.owner.map(v => v + '@s.whatsapp.net').includes(senderJid);
  const hasPermission = isAdmin || isROwner || isBotOwner;

  if (!hasPermission) {
    return conn.reply(m.chat, '✧ el comando *setprimary* solo puede ser usado por los administradores del grupo.', m);
  }

  // Validar si el bot está en el grupo
  const participants = m.isGroup
    ? (await conn.groupMetadata(m.chat).catch(() => null))?.participants || []
    : [];
  const inGroup = participants.some(p => p.id === botJid);

  if (!inGroup) {
    return conn.reply(m.chat, `✧ El bot mencionado no se encuentra en este grupo.`, m);
  }

  if (chat.primaryBot === botJid) {
    return conn.reply(m.chat, `✧ @${botJid.split('@')[0]} ya es el bot primario de este grupo.`, m, {
      mentions: [botJid]
    });
  }

  chat.primaryBot = botJid;

  await conn.sendMessage(m.chat, {
    text: `❀ @${botJid.split('@')[0]} ha sido establecido como *bot primario* en este grupo.`,
    mentions: [botJid]
  }, { quoted: m });
};

handler.help = ['setprimary <@bot>'];
handler.tags = ['group'];
handler.command = ['setprimary'];
handler.group = true;
// Ya no se necesita `handler.admin = true` porque validamos manualmente

export default handler;