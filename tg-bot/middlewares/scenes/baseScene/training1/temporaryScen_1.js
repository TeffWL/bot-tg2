
const { Scenes, Markup } = require("telegraf");

const temporaryScene1 = new Scenes.WizardScene(
  "temporaryScene_1",
  async (ctx) => {
    const keyboard = Markup.inlineKeyboard([
      Markup.button.callback("Начнем!", "temporaryScene_btn"),
    ]);

    if (!ctx.session.counter || ctx.session.counter === 0) {
      console.log("5");
      setTimeout(async () => {
        await ctx.replyWithHTML("— Постоянство - залог успеха! Повторите несколько фраз и обязательно вернитесь завтра", keyboard);
      }, 5000 * 60 * 60); // 5 часов    5000 * 60 * 60
    }
    

    ctx.session.reminderTimeout = setTimeout(async () => {
      console.log("напоминалка");
      await ctx.replyWithHTML("— Не забывайте про меня");
    }, 30000);      // напоминалка

    
    return ctx.wizard.next();
  },
  async (ctx) => {
    ctx.wizard.state.data = ctx.update.callback_query.data;

    if (ctx.wizard.state.data === "temporaryScene_btn") {
      ctx.answerCbQuery();
      await ctx.scene.leave();

      if (!ctx.session.counter) {
        ctx.session.counter = 0;
      }

      ctx.session.counter += 1;

      if (ctx.session.counter === 1) {
        setTimeout(async () => {
          await ctx.scene.enter("Scene_word_check_1");
        }, 0);

        setTimeout(async () => {
          console.log("24)");
          ctx.session.scene_word_check_started = true;
          await ctx.scene.enter("Scene_word_check_1");
        }, 24 * 60 * 60 * 1000); // 24 часа  24 * 60 * 60 * 1000
      }
    }
  }
);

module.exports = temporaryScene1;



