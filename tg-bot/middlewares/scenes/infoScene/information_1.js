const { Scenes, Markup } = require('telegraf')

const firstInformationScene = new Scenes.WizardScene(
    'firstInformation',
    async (ctx) => {
        const keyboard = Markup.inlineKeyboard([
            Markup.button.callback('3000', 'btn_1'),
            Markup.button.callback('6000', 'btn_1'),
            Markup.button.callback('9000', 'btn_1'),

        ])
        await ctx.replyWithHTML(' Как думаете, сколько слов и фраз  на английском достаточно знать, чтобы понимать носителей языка, смотреть Netflix в оригинале и чувствовать себя комфортно, проживая заграницей?', keyboard)
        return ctx.wizard.next()
    },
    async (ctx) => {
        if (ctx.callbackQuery.data === 'btn_1') {

            return ctx.wizard.ctx.scene.enter('secondInformation')
        }
    }
)    

module.exports = firstInformationScene


