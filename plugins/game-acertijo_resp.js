import similarity from 'similarity';
const threshold = 0.72;

const handler = (m) => m;

handler.before = async function (m) {
  const id = m.chat;

  if (!m.quoted || !m.quoted.fromMe || !m.quoted.text || !/^ⷮ/i.test(m.quoted.text)) return;

  this.tekateki = this.tekateki ? this.tekateki : {};

  if (!(id in this.tekateki)) return;

  const [msg, json, exp, timeout] = this.tekateki[id];

  if (similarity(m.quoted.text.toLowerCase(), msg.text.toLowerCase()) >= 0.9) {
    const answer = json.response.toLowerCase().trim();
    const userAnswer = m.text.toLowerCase().trim();

    if (userAnswer === answer) {
      m.reply(`✅ *¡Respuesta correcta!*\nHas ganado +${exp} exp`);
      clearTimeout(timeout);
      delete this.tekateki[id];
    } else if (similarity(userAnswer, answer) >= threshold) {
      m.reply(`*Casi lo logras!*`);
    } else {
      m.reply(`*Respuesta incorrecta!*`);
    }
  }

  return true;
};

handler.exp = 0;
export default handler;