const { Scenes, Markup } = require('telegraf');
const fs = require('fs');

const thirdInformationScene = new Scenes.WizardScene(
    'thirdInformation',
    async (ctx) => {
        const keyboard = Markup.inlineKeyboard([
            Markup.button.callback('Начать обучение', 'btn_3'),
            Markup.button.callback('Узнать больше', 'btn_4')
        ]);

        await ctx.reply("Кстати, насчет фраз, которые здесь вам предстоит запомнить, сейчас расскажем откуда они ");
        await new Promise(resolve => setTimeout(resolve, 1000));

        await ctx.reply("Каждый год исследовательские компании формируют список наиболее популярных и важных фраз, которые широко используются в общении.");
        await new Promise(resolve => setTimeout(resolve, 1000));

        await ctx.reply("На основе этих  данных и состоит наша библиотека ");
        await new Promise(resolve => setTimeout(resolve, 1000));

        await ctx.reply("Ну и теперь, осталось дело за малым – все выучить😁 ");
        await new Promise(resolve => setTimeout(resolve, 1000));

        await ctx.reply("Вместе мы все разложим по полочкам! ");
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Отправка изображения локального файла
        const localImage = './middlewares/scenes/infoScene/image.png';
        await ctx.replyWithPhoto({ source: fs.createReadStream(localImage) });

        // Отправка изображения по URL
        // const imageUrl = 'https://your-image-url/image.png'; // Ссылка на изображение
        // await ctx.replyWithPhoto(imageUrl);

        await ctx.replyWithHTML("Далее выбор за тобой ", keyboard)
        return ctx.wizard.next()
    },
    async (ctx) => {
        if (ctx.callbackQuery.data === 'btn_4') {
            return ctx.wizard.ctx.scene.enter('fourthInformation')
        } else {
            return ctx.wizard.ctx.scene.enter('menuScene')
        }
    }
);

module.exports = thirdInformationScene;
