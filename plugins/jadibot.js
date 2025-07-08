/*import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fsPromises } from "fs";
const fs = { ...fsPromises, existsSync };
import path, { join } from 'path';
import ws from 'ws';

let handler = async (m, { conn: _envio, command, usedPrefix, args, text, isOwner }) => {
  const isCommand1 = /^(deletesesion|deletebot|deletesession|deletesesaion)$/i.test(command);
  const isCommand2 = /^(stop|pausarai|pausarbot)$/i.test(command);
  const isCommand3 = /^(bots|sockets|socket)$/i.test(command);


  async function reportError(e) {
    await m.reply(`${msm} Ocurrió un error.`);
    console.error(e);
  }

  switch (true) {
    case isCommand1: {
      let who = m.mentionedJid && m.mentionedJid[0]
        ? m.mentionedJid[0]
        : m.fromMe
          ? _envio.user.jid
          : m.sender;
      let uniqid = `${who.split`@`[0]}`;
      const sessionPath = `./${jadi}/${uniqid}`;

      if (!fs.existsSync(sessionPath)) {
        await _envio.sendMessage(m.chat, {
          text: `⚡ Usted no tiene una sesión, puede crear una usando:\n${usedPrefix + command}\n\nSi tiene una *(ID)* puede usar para saltarse el paso anterior usando:\n*${usedPrefix + command}* \`\`\`(ID)\`\`\``
        }, { quoted: m });
        return;
      }

      if (global.conn.user.jid !== _envio.user.jid) {
        await _envio.sendMessage(m.chat, {
          text: `☄️ Use este comando al *Bot* principal.\n\n*https://api.whatsapp.com/send/?phone=${global.conn.user.jid.split`@`[0]}&text=${usedPrefix + command}&type=phone_number&app_absent=0*`
        }, { quoted: m });
      } else {
        await _envio.sendMessage(m.chat, {
          text: `🗑️ Tu sesión como *Sub-Bot* se ha eliminado`
        }, { quoted: m });

        try {
          fs.rmdirSync(sessionPath, { recursive: true, force: true });
          await _envio.sendMessage(m.chat, {
            text: `👾 Ha cerrado sesión y borrado todo rastro.`
          }, { quoted: m });
        } catch (e) {
          reportError(e);
        }
      }
      break;
    }

    case isCommand2: {
      if (global.conn.user.jid == _envio.user.jid) {
        await _envio.reply(m.chat, `🦠 Si no es *Sub-Bot* comuníquese al número principal del *Bot* para ser *Sub-Bot*.`, m);
      } else {
        await _envio.reply(m.chat, `💛 Rin Itoshi desactivado temporalmente.`, m);
        _envio.ws.close();
      }
      break;
    }

    case isCommand3: {
      const users = [...new Set([...global.conns.filter((conn) =>
        conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED)])];

      function convertirMsADiasHorasMinutosSegundos(ms) {
        var segundos = Math.floor(ms / 1000);
        var minutos = Math.floor(segundos / 60);
        var horas = Math.floor(minutos / 60);
        var días = Math.floor(horas / 24);
        segundos %= 60;
        minutos %= 60;
        horas %= 24;
        var resultado = "";
        if (días !== 0) resultado += días + "D, ";
        if (horas !== 0) resultado += horas + "H, ";
        if (minutos !== 0) resultado += minutos + "M, ";
        if (segundos !== 0) resultado += segundos + "S";
        return resultado;
      }

      const message = users.map((v, i) => `
╭───⬣⃛ BOT *#${i + 1}* 
│ 💖 *usuario* : ${v.user?.name || 'Sub Bot ☘︎'}
│ 💫 *Enlace* : wa.me/${(v.user?.jid || '').replace(/[^0-9]/g, '')}
│ 🍿 *online* : ${v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : 'Desconocido'}
╰───────────────`).join('\n\n');

      const replyMessage = message.length === 0
        ? `😔 No hay Sub-Bots disponible por el momento, verifique más tarde.`
        : message;

      const totalUsers = users.length;

      const responseMessage = `*RIN ITOSHI - JADIBOT LIST*
> *Total de Subs:* *\`${totalUsers || '0'}\`*


${replyMessage.trim()}`;

      await _envio.sendMessage(m.chat, {
        image: { url: 'https://files.catbox.moe/8u4f6p.png' },
        caption: responseMessage,
        mentions: _envio.parseMention(responseMessage)
      }, { quoted: fkontak });

      break;
    }
  }
};

handler.tags = ['serbot'];
handler.help = ['sockets', 'deletesesion', 'pausarai'];
handler.command = ['deletesesion', 'deletebot', 'deletesession', 'deletesesaion', 'stop', 'pausarai', 'pausarbot', 'bots', 'sockets', 'socket'];

export default handler;*/

// codigo creado por Black.OFC 😺

import ws from 'ws';

let handler = async (m, { conn }) => {

  const connsActivas = global.conns.filter(conn =>
    conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED
  );


  const vistos = new Set();
  const subbotsUnicos = connsActivas.filter(conn => {
    const jid = conn.user?.jid || '';
    if (vistos.has(jid)) return false;
    vistos.add(jid);
    return true;
  });

  function convertirMsADiasHorasMinutosSegundos(ms) {
    let segundos = Math.floor(ms / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    let resultado = '';
    if (dias) resultado += `${dias}D, `;
    if (horas) resultado += `${horas}H, `;
    if (minutos) resultado += `${minutos}M, `;
    if (segundos) resultado += `${segundos}S`;
    return resultado.trim();
  }

  const totalSubs = subbotsUnicos.length;

  const lista = subbotsUnicos.map((bot, i) => {
    return `╭─ ⌜ 🧩 𝑩𝑶𝑻 #${i + 1} ⌟ ─╮
┃ 🧸 𝙉𝙤𝙢𝙗𝙧𝙚: ${bot.user?.name || '𝑺𝒖𝒃 𝑩𝒐𝒕'}
┃ 📲 𝙉𝙪́𝙢𝙚𝙧𝙤: wa.me/${(bot.user?.jid || '').replace(/[^0-9]/g, '')}
┃ ⏳ 𝙀𝙣 𝙡𝙞́𝙣𝙚𝙖: ${bot.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - bot.uptime) : '𝘿𝙚𝙨𝙘𝙤𝙣𝙤𝙘𝙞𝙙𝙤'}
╰──────────────────╯`;
  }).join('\n\n');

  const textoSubbots = totalSubs === 0
    ? '😓 𝙉𝙤 𝙝𝙖𝙮 𝙎𝙪𝙗-𝘽𝙤𝙩𝙨 𝙖𝙘𝙩𝙞𝙫𝙤𝙨 𝙥𝙤𝙧 𝙖𝙝𝙤𝙧𝙖. 🌙'
    : `╭─ ❍ ⛩️ 𝑺𝒖𝒌𝒖𝒏𝒂 - 𝑱𝒂𝒅𝒊𝑩𝒐𝒕𝒔 ❍ ─╮
┃ ✨ 𝙏𝙤𝙩𝙖𝙡 𝙖𝙘𝙩𝙞𝙫𝙤𝙨: 『 ${totalSubs} 』
╰─────────────────────────╯

${lista}

🖋️ 𝙎𝙞𝙨𝙩𝙚𝙢𝙖 𝙙𝙚 𝙅𝙖𝙙𝙞𝙗𝙤𝙩𝙨 - 𝐬𝐮𝐤𝐮𝐧𝐚 ⚡`;

  await conn.sendMessage(m.chat, {
    contextInfo: {
      externalAdReply: {
        title: "𝑺𝒖𝒃 𝑩𝒐𝒕𝒔 𝑶𝒏𝒍𝒊𝒏𝒆",
        body: "Sukuna Bot MD",
        thumbnailUrl: "https://files.catbox.moe/vm6opf.jpg",
        sourceUrl: redes,
        mediaType: 1,
        renderLargerThumbnail: true,
        showAdAttribution: false
      }
    },
    text: `${textoSubbots}`
  }, { quoted: fkontak });
};

handler.command = ['sockets', 'bots', 'socket'];
handler.tags = ['jadibot'];
handler.help = ['sockets'];

export default handler;