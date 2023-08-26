const { Scenes, Markup } = require('telegraf')


const sceneStart = new Scenes.WizardScene(
    'sceneStart',
    async (ctx) => {
      const keyboard = Markup.inlineKeyboard([Markup.button.callback('Начать', 'my_button')]);
      await ctx.replyWithHTML('Привет и Добро пожаловть')
      await ctx.replyWithHTML('Здесь вы сможете улучшить свой словарный запас и выйти на новый уровень общения на английском Все что от вас требуется – 15-20 минут в день', keyboard);
      return ctx.wizard.next();
    },
    async (ctx) => {
      // Transition to another scene
      return ctx.scene.enter('firstInformation');
    }
  );


module.exports = sceneStart


