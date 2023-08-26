const { Scenes, Markup } = require('telegraf');

const topics = new Scenes.WizardScene(
  'topics',
  async (ctx) => {
    const keyboard = Markup.inlineKeyboard([
      [Markup.button.callback('Базовые разговорные фразы', 'basicConversationalPhrases')],
      [Markup.button.callback('Цифры 🔓', 'btn_about')],
      [Markup.button.callback('Увлечения и хобби 🔓', 'btn_myResult')],
      [Markup.button.callback('Английский для путешествий 🔓', 'btn_repeat')],
      [Markup.button.callback('Покупки и заказ еды в ресторане 🔓', 'btn_about')],
      [Markup.button.callback('Социальные взаимодействия и знакомства🔓 ', 'btn_about')]
    ]);

    await ctx.replyWithHTML('Постепенное изучение фраз, связанных с этими сферами и темами, поможет вам чувствовать себя увереннее при общении на английском языке и расширит ваш словарный запас.');
    await ctx.replyWithHTML('Желаю вам прекрасно провести время.', keyboard);

    return ctx.wizard.next();
  },
  async (ctx) => {
    if (ctx.callbackQuery.data === 'basicConversationalPhrases') {
      ctx.wizard.next();
      return ctx.scene.enter('trainingScene1');
    } 
  }
);

module.exports = topics;

