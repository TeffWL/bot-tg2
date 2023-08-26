const { Scenes, Markup } = require('telegraf');
const fs = require('fs');

const fourthInformationScene = new Scenes.WizardScene(
    'fourthInformation',
    async (ctx) => {
        await sendNextWord(ctx, 1);
        return ctx.wizard.next();
    },
    async (ctx) => {
        const data = ctx.callbackQuery.data;
        const index = parseInt(data.slice(-1));

        if (data.startsWith('next')) {
            // Удалено: await ctx.deleteMessage();
            await sendNextWord(ctx, index + 1);
            return; // Добавлено, чтобы предотвратить выполнение кода ниже
        }

        if (data === 'next7') {
            return ctx.wizard.ctx.scene.enter('trainingScene');
        }
    }
);

async function sendNextWord(ctx, wordIndex) {
    let word;
    let correctBtn;

    console.log(`Отправка следующего слова: ${wordIndex}`);

    switch (wordIndex) {
        case 1: 
            word = "1 час, 5 часов, день, пять дней, 25 дней, четыре месяца, два года.";

            await ctx.reply('Мы будем использовать технику интервального запоминания Метод разработал американский лингвист Пол Пимслер (Paul Pimsleur) в 1967 году.')
            await ctx.reply('Пимслер заметил, что мозг забывает слова после заучивания почти моментально. Но если повторять слова до того, как они стёрлись из памяти, время «забывания» увеличится экспоненциально.')

            correctBtn = { text: "Это рабоотает?", callback_data: "next1" };
            break;
        case 2: 
            word = "https://ru.wikipedia.org/wiki/Кривая_забывания";
            await ctx.reply('Да, работает.')
            await ctx.reply('Это доказал немецкий психолог Герман Эббингауз: он учил «Дон Жуана» Байрона с помощью интервальных повторений и механического заучивания. С интервалами получилось в 9 раз быстрее')



            correctBtn = { text: "Как начать?", callback_data: "next2" };
            break;
        case 3: 
            word = "Или можете воспользоваться этим ботом ";
            await ctx.reply('Подготовьте карточки: фраза на английском, перевод и если нужно — транскрипция. Пишите отчетливо и крупно.')


            correctBtn = { text: "Почему фразы?", callback_data: "next3" };
            break;
        case 4: 
            word = "— фраза — это образ, его проще запомнить.";

            await ctx.reply('Учить фразы — проще и эффективнее. И вот почему:')
            await ctx.reply('— фразы проще использовать в разговоре;')
            await ctx.reply('— в них уже содержится информация, которую обычно ищут дополнительно: предлоги, артикли, сферы употребления;')


            correctBtn = { text: "Сколько нужно повторять, чтобы выучить?", callback_data: "next4" };
            break;
        case 5: 
            word = "Но тут будет слегка упрощенный подход";

            await ctx.reply('Пимслер советовал повторять фразу 11 раз. Можно сделать проще и обойтись девятью подходами: прочитать, повторить через 30 минут, потом — на следующее утро, потом — через три дня, неделю, месяц, три месяца, полгода и через год.')
            await ctx.reply('Если повторять фразу 10 секунд (два озвучивания по пять секунд), то понадобится полторы минуты в год.')

            correctBtn = { text: "Чем подкрепить результат?", callback_data: "next5" };
            break;
        case 6: 
            word = "Занимайтесь в приятной и тихой обстановке. Так легче воспринимать новую информацию, а в голове появится устойчивая позитивная ассоциация «учиться — приятно и просто». ";

            await ctx.reply('Метод основан на регулярном повторении, поэтому главное — это системный подход и мотивация. Про системный подход мы уже рассказали. А чтобы мотивация не угасла, ее нужно подпитывать:')
            await ctx.reply('— используйте новые слова в разговорах или переписках,')
            await ctx.reply('— записывайте на диктофон короткие рассказы на английском с заученными фразами, а потом слушайте их до тех пор, пока не запомните все пройденные слова, или используйте голосовые сообщения в боте ')
            await ctx.reply('Занимайтесь в приятной и тихой обстановке. Так легче воспринимать новую информацию, а в голове появится устойчивая позитивная ассоциация «учиться — приятно и просто». ')

            correctBtn = { text: "начать обучение", callback_data: "next6" };
            break;

            case 7: 
            word = "_"
            correctBtn = { text: "начать обучение", callback_data: "next7" };
        default:
            return ctx.wizard.ctx.scene.enter('menuScene');
    }

    const keyboard = Markup.inlineKeyboard([Markup.button.callback(correctBtn.text, correctBtn.callback_data)]);
    await ctx.replyWithHTML(word, keyboard);
}

module.exports = fourthInformationScene;




