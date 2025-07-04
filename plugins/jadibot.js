import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fsPromises } from "fs";
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
        await _envio.reply(m.chat, `💛 Luffy bot desactivado temporalmente.`, m);
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

      const responseMessage = `*LUFFY - JADIBOT LIST*
> *Total de Subs:* *\`${totalUsers || '0'}\`*


${replyMessage.trim()}`;

      await _envio.sendMessage(m.chat, {
        image: { url: 'https://files.catbox.moe/bzwvsg.jpg' },
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

export default handler;