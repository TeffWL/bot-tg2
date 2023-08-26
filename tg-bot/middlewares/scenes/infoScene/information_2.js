const { Scenes, Markup } = require('telegraf')

const secondInformationScene = new Scenes.WizardScene(
    'secondInformation',
    async (ctx) => {
        const keyboard = Markup.inlineKeyboard([
            Markup.button.callback('Yes!', 'btn_2')
        ])

        await ctx.reply('И Так …  80-90% английской речи покрывают одни и те же слова - фразы')
        await new Promise(resolve => setTimeout(resolve, 1000));
        await ctx.reply('Здесь мы собрали для вас библиотеку самых распространенных фраз в современной английской речи за последнее время')
        await new Promise(resolve => setTimeout(resolve, 1000));
        await ctx.reply('И интегрировали особую технику запоминания, благодаря которой, можно легко осваивать новые фразы')
        await new Promise(resolve => setTimeout(resolve, 1000));
        await ctx.reply('Неважно, какой у вас уровень знания языка сейчас. Учить будет легко, ведь вас ждет всего по 4 фразы в день ')
        await new Promise(resolve => setTimeout(resolve, 1000));

        await ctx.replyWithHTML('Ну не прекрасно ли, м?', keyboard)
        return ctx.wizard.next()
    },
    async (ctx) => {
        if (ctx.callbackQuery.data === 'btn_2') {

            return ctx.wizard.ctx.scene.enter('thirdInformation')
        }
    }
)    

module.exports = secondInformationScene