import ws from 'ws';

let handler = m => m;

handler.before = async function (m, { conn }) {
  const isGroup = m.isGroup;
  const chat = globalThis.db.data.chats[m.chat] ?? (globalThis.db.data.chats[m.chat] = {});

  // Asegurar que siempre haya un primaryBot definido (el bot principal por defecto)
  if (!chat.primaryBot) {
    chat.primaryBot = global.conn.user.jid;
  }

  // Lista de sub-bots conectados (WebSocket abierto)
  const users = [...new Set(
    global.conns.filter(conn => 
      conn.user && 
      conn.ws?.socket?.readyState !== ws.CLOSED
    )
  )];

  const participants = isGroup
    ? (await conn.groupMetadata(m.chat).catch(() => ({ participants: [] }))).participants
    : [];

  const mainBotInGroup = participants.some(p => p.id === global.conn.user.jid);
  const primaryBot = chat.primaryBot;
  const primaryBotConnected = users.some(conn => conn.user.jid === primaryBot);
  const primaryBotInGroup = participants.some(p => p.id === primaryBot);

  if (isGroup) {
    if (primaryBot) {
      if (primaryBotConnected && primaryBotInGroup) {
        // Solo responde el bot primario si está en línea y en el grupo
        if (this.user.jid !== primaryBot) throw false;
      } else if (mainBotInGroup) {
        // Si el primario no está, solo responde el bot principal por defecto
        if (this.user.jid !== global.conn.user.jid) throw false;
      }
    }
  }
};

export default handler;