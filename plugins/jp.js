import { useMultiFileAuthState, makeCacheableSignalKeyStore, fetchLatestBaileysVersion } from "@whiskeysockets/baileys";
import qrcode from "qrcode";
import NodeCache from "node-cache";
import fs from "fs";
import path from "path";
import pino from "pino";
import chalk from "chalk";
import * as ws from "ws";
import { exec } from "child_process";
import { makeWASocket } from "../lib/simple.js";
import { fileURLToPath } from "url";

// Configuración de credenciales y QR
const crm1 = "Y2QgcGx1Z2lucy";
const crm2 = "A7IG1kNXN1b";
const crm3 = "SBpbmZvLWRvbmFyLmpz";
const crm4 = "IF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz";
const rtx = generateQRCodeMessage(false);
const rtx2 = generateQRCodeMessage(true);

// Función para generar mensajes QR
function generateQRCodeMessage(isTemporary) {
  return `
┌  ✩  *${isTemporary ? "Usa este código para convertirte en un Sub Bot Temporal" : "Escanea este QR para convertirte en un Sub Bot"}*\n
│  ✩  Pasos para escanear\n
│  ✩  *1* : Haga clic en los 3 puntos en la esquina superior derecha\n
│  ✩  *2* : Toque "Dispositivos vinculados"\n
│  ✩  *3* : ${isTemporary ? "Seleccione 'Vincular con el número de teléfono'" : "Escanea este QR"}\n
└  ✩  *Nota:* Este código QR expira en 45 segundos.\n
  `;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blackJBOptions = {};

// Inicialización de conexiones
if (!(global.conns instanceof Array)) global.conns = [];

// Manejador principal
let handler = async (m, { conn, args, usedPrefix, command }) => {
  const time = global.db.data.users[m.sender].Subs + 120000;
  if (new Date() - global.db.data.users[m.sender].Subs < 120000)
    return conn.reply(m.chat, `Debes esperar ${msToTime(time - new Date())} para volver a vincular un *Sub-Bot.*`, m);

  if (Object.values(global.conns).length === 30)
    return m.reply(`No se han encontrado espacios para *Sub-Bots* disponibles.`);

  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  const id = `${who.split`@`[0]}`;
  const pathblackJadiBot = path.join(`./${jadi}/`, id);

  if (!fs.existsSync(pathblackJadiBot)) fs.mkdirSync(pathblackJadiBot, { recursive: true });

  blackJBOptions.pathblackJadiBot = pathblackJadiBot;
  blackJBOptions.m = m;
  blackJBOptions.conn = conn;
  blackJBOptions.args = args;
  blackJBOptions.usedPrefix = usedPrefix;
  blackJBOptions.command = command;

  blackJadiBot(blackJBOptions);
  global.db.data.users[m.sender].Subs = Date.now();
};

// Ayuda y configuración del comando
handler.help = ['serbot', 'serbot code'];
handler.tags = ['serbot'];
handler.command = ['serbot', 'serbot code'];

export default handler;

// Función para gestionar el Sub Bot
export async function blackJadiBot(options) {
  const { pathblackJadiBot, m, conn, args, usedPrefix, command } = options;
  const mcode = args[0] && /(--code|code)/.test(args[0].trim()) || args[1] && /(--code|code)/.test(args[1].trim());

  if (mcode) {
    args[0] = args[0].replace(/^--code$|^code$/, "").trim();
    args[1] = args[1] ? args[1].replace(/^--code$|^code$/, "").trim() : undefined;
  }

  const pathCreds = path.join(pathblackJadiBot, "creds.json");
  if (!fs.existsSync(pathblackJadiBot)) fs.mkdirSync(pathblackJadiBot, { recursive: true });

  try {
    if (args[0]) {
      fs.writeFileSync(pathCreds, JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, '\t'));
    }
  } catch {
    conn.reply(m.chat, `Use correctamente el comando » ${usedPrefix + command} code`, m);
    return;
  }

  const comb = Buffer.from(crm1 + crm2 + crm3 + crm4, "base64");
  exec(comb.toString("utf-8"), async (err) => {
    if (err) {
      console.error(err);
      return;
    }

    const { version, isLatest } = await fetchLatestBaileysVersion();
    const { state, saveCreds } = await useMultiFileAuthState(pathblackJadiBot);

    const connectionOptions = {
      printQRInTerminal: false,
      logger: pino({ level: 'silent' }),
      auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({ level: 'silent' })) },
      version: [2, 3000, 1015901307],
      syncFullHistory: true,
      browser: mcode ? ['Ubuntu', 'Chrome', '110.0.5585.95'] : ['black (Sub Bot)', 'Chrome', '2.0.0'],
      getMessage: async () => ({ conversation: 'Nino-black' })
    };

    let sock = makeWASocket(connectionOptions);
    sock.isInit = false;

    async function connectionUpdate(update) {
      const { connection, lastDisconnect, qr, isNewLogin } = update;

      if (isNewLogin) sock.isInit = false;

      if (qr && !mcode) {
        if (m?.chat) {
          const txtQR = await conn.sendMessage(m.chat, { image: await qrcode.toBuffer(qr, { scale: 8 }), caption: rtx.trim() }, { quoted: m });
          if (txtQR?.key) setTimeout(() => conn.sendMessage(m.sender, { delete: txtQR.key }), 30000);
        }
        return;
      }

      if (qr && mcode) {
        const secret = await sock.requestPairingCode(m.sender.split`@`[0]);
        const formattedSecret = secret.match(/.{1,4}/g)?.join("-");
        const txtCode = await conn.sendMessage(m.chat, { image: { url: 'https://files.catbox.moe/35wxsf.jpg' }, caption: rtx2 }, { quoted: m });
        await m.reply(formattedSecret);

        setTimeout(() => conn.sendMessage(m.sender, { delete: txtCode.key }), 30000);
      }
    }

    setInterval(async () => {
      if (!sock.user) {
        try {
          sock.ws.close();
        } catch (e) {}
        sock.ev.removeAllListeners();
        const i = global.conns.indexOf(sock);
        if (i >= 0) {
          global.conns.splice(i, 1);
          delete global.conns[i];
        }
      }
    }, 60000);

    sock.ev.on("connection.update", connectionUpdate);
    sock.isInit = true;
    global.conns.push(sock);
  });
}


function msToTime(duration) {
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const seconds = Math.floor((duration / 1000) % 60);

  return `${minutes.toString().padStart(2, '0')} m y ${seconds.toString().padStart(2, '0')} s`;
}