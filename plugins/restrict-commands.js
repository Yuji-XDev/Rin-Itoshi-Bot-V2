const handler = async (m, { conn, usedPrefix, command, isOwner, isAdmin, isBotAdmin, isPremium, isGroup, chat, args }) => {
  
    global.db.data.chats[m.chat] = global.db.data.chats[m.chat] || {};
    const chatData = global.db.data.chats[m.chat];
    chatData.restringidos = chatData.restringidos || [];

  
    if (command === 'res') {
        if (!(isAdmin || isOwner)) return m.reply('🚫 Solo los admins o el dueño del bot pueden usar este comando.');
        const comando = args[0]?.toLowerCase();
        if (!comando) return m.reply(`❗Ejemplo de uso:\n${usedPrefix}res play`);
        if (chatData.restringidos.includes(comando)) return m.reply(`⛔ El comando *${comando}* ya está restringido.`);
        chatData.restringidos.push(comando);
        return m.reply(`✅ El comando *${comando}* ha sido restringido para los usuarios del grupo.`);
    }

    if (command === 'liberar') {
        if (!(isAdmin || isOwner)) return m.reply('🚫 Solo los admins o el dueño del bot pueden usar este comando.');
        const comando = args[0]?.toLowerCase();
        if (!comando) return m.reply(`❗Ejemplo de uso:\n${usedPrefix}liberar play`);
        if (!chatData.restringidos.includes(comando)) return m.reply(`❗ El comando *${comando}* no estaba restringido.`);
        chatData.restringidos = chatData.restringidos.filter(c => c !== comando);
        return m.reply(`✅ El comando *${comando}* ha sido liberado para todos.`);
    }

    
    if (isGroup && chatData.restringidos?.includes(command) && !isOwner) {
        
        return false;
    }

   
    const plugin = global.plugins?.[command];
    if (!plugin) return true;
    if (plugin.rowner && !isOwner) return m.reply(global.dfail('rowner', m, conn, usedPrefix));
    if (plugin.owner && !isOwner) return m.reply(global.dfail('owner', m, conn, usedPrefix));
    if (plugin.admin && !isAdmin) return m.reply(global.dfail('admin', m, conn, usedPrefix));
    if (plugin.group && !isGroup) return m.reply(global.dfail('group', m, conn, usedPrefix));
    if (plugin.botAdmin && !isBotAdmin) return m.reply(global.dfail('botAdmin', m, conn, usedPrefix));
    if (plugin.premium && !isPremium) return m.reply(global.dfail('premium', m, conn, usedPrefix));

    return true;
};

handler.before = async (m, context) => {
    await handler(m, context);
};

handler.help = ['res <comando>', 'liberar <comando>'];
handler.tags = ['group'];
handler.command = ['res', 'liberar'];
handler.group = true;

export default handler;