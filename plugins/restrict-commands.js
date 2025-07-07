const handler = async (m, { conn, usedPrefix, command, isOwner, isAdmin, isBotAdmin, isPremium, isGroup, chat, args }) => {
    // Asegurar que exista la base de datos del grupo
    global.db.data.chats[m.chat] = global.db.data.chats[m.chat] || {};
    const chatData = global.db.data.chats[m.chat];
    chatData.restringidos = chatData.restringidos || [];

    // ✅ Comando .restringir <comando>
    if (command === 'restringir') {
        if (!isGroup) return m.reply('⚠️ Este comando solo se puede usar en grupos.');
        if (!(isAdmin || isOwner)) return m.reply('🚫 Solo los admins o el dueño del bot pueden usar este comando.');
        const comando = args[0]?.toLowerCase();
        if (!comando) return m.reply(`❗Ejemplo de uso:\n${usedPrefix}restringir play`);
        if (chatData.restringidos.includes(comando)) return m.reply(`⛔ El comando *${comando}* ya está restringido.`);
        chatData.restringidos.push(comando);
        return m.reply(`✅ El comando *${comando}* ha sido restringido para los usuarios del grupo.`);
    }

    // ✅ Comando .liberar <comando>
    if (command === 'liberar') {
        if (!isGroup) return m.reply('⚠️ Este comando solo se puede usar en grupos.');
        if (!(isAdmin || isOwner)) return m.reply('🚫 Solo los admins o el dueño del bot pueden usar este comando.');
        const comando = args[0]?.toLowerCase();
        if (!comando) return m.reply(`❗Ejemplo de uso:\n${usedPrefix}liberar play`);
        if (!chatData.restringidos.includes(comando)) return m.reply(`❗ El comando *${comando}* no estaba restringido.`);
        chatData.restringidos = chatData.restringidos.filter(c => c !== comando);
        return m.reply(`✅ El comando *${comando}* ha sido liberado para todos.`);
    }

    // ⚠️ Middleware: bloquear solo comandos restringidos
    if (isGroup && chatData.restringidos?.includes(command) && !isOwner) {
        // El comando está restringido y el usuario no es owner → ignorar
        return false;
    }

    // Validaciones normales (opcional)
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

handler.help = ['restringir <comando>', 'liberar <comando>'];
handler.tags = ['group', 'config'];
handler.command = /^(restringir|liberar)$/i;
handler.group = true;

export default handler;