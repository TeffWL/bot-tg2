const { Scenes, Markup } = require('telegraf');

const menuScene = new Scenes.WizardScene(
  'menuScene',
  async (ctx) => {
    const keyboard = Markup.inlineKeyboard([
      [Markup.button.callback('Выбрать тему', 'btn_topics'),
      Markup.button.callback('Мои Результаты🔓', 'btn_myResult')],
      [Markup.button.callback('Повторить🔓', 'btn_repeat'),
      Markup.button.callback('Узнать больше🔓', 'btn_about')]
    ]);

    await ctx.replyWithHTML('Итак, вы здесь, чтобы...', keyboard);
    return ctx.wizard.next();
  },
  async (ctx) => {
    if (ctx.callbackQuery.data === 'btn_topics') {
      ctx.wizard.next();
      return ctx.scene.enter('topics');
    }
  }
);

module.exports = menuScene;



