const { Scenes, Markup } = require('telegraf');
const { UserData, saveUserData } = require('../../../../db');

const trainingScene1 = new Scenes.WizardScene(
  'trainingScene1',
  async (ctx) => {
    const keyboard = Markup.inlineKeyboard([
      Markup.button.callback('Начнем!', 'btn_words')
    ]);
    await ctx.reply('Добро пожаловать в блок "Базовые разговорные фразы"! Здесь мы представляем вам 50 самых распространенных разговорных фраз на английском языке, которые помогут вам улучшить навыки общения на английском.');
    await ctx.reply('Каждый день мы будем предлагать вам 4 новые разговорные фразы, которые будут сопровождаться переводом и аудио-дорожкой, чтобы помочь вам не только выучить текст, но и улучшить свое произношение.');
    await ctx.reply('Кроме того, мы предлагаем вам проходить тесты на перевод фраз с английского на русский и наоборот, а также задания на аудирование, для того чтобы вы могли закрепить свои знания.');
    await ctx.reply('После вашего первого прохождения блока "Базовые разговорные фразы." Так же после прохождения в первый раз я отправлю вам все фразы еще раз через 5 часов и 24 часа, чтобы вы могли закрепить свои знания. Кроме того, я буду предлагать вам проходить повторение всех пройденных фраз раз в 7 дней.', keyboard);

    return ctx.wizard.next();
  },
//   async (ctx) => {
//     try {
//         const sceneName = 'trainingScene1';
//         const user = await UserData.findOne({ userId: ctx.from.id });
//         if (user) {
//             const completedScenes = user.completedPhrases || 0;
//             const newCompletedScenes = completedScenes + 4;
//             console.log(`Updating user ${ctx.from.id}: completedScenes = ${completedScenes}, newCompletedScenes = ${newCompletedScenes}`);
//             await saveUserData(ctx.from.id, sceneName, newCompletedScenes); // Обновляем completedPhrases
//         }
//         return ctx.scene.leave(); // Покидаем сцену
//     } catch (error) {
//         console.error('Error updating user data:', error);
//         return ctx.scene.leave(); // В случае ошибки также покидаем сцену
//     }
// }
);




// Действие при нажатии на кнопку 'Начнем!'
trainingScene1.action('btn_words', async (ctx) => {
const howareyou = 'sound/howareyou.mp3';
const caption = 'void';

await ctx.replyWithVoice({ source: howareyou, caption, duration: 1, performer: '', title: '' });    

await ctx.replyWithHTML("<b>How are you?</b> - Как дела?");

const button = { text: 'Еще!', callback_data: 'btn_words_1' };
await ctx.replyWithHTML("<i>Hi, John! <b>How are you?</b></i> \nПривет, Джон! <b>Как дела?</b>", {
    reply_markup: {
        inline_keyboard: [[button]]
    }
});
});



// Действие при нажатии на кнопку 'Еще!'
trainingScene1.action('btn_words_1', async (ctx) => {

        
const howareyou = 'sound/whatsnew.mp3';
const caption = 'void';
await ctx.replyWithVoice({ source: howareyou, caption, duration: 1, performer: '', title: '' });
await ctx.replyWithHTML("What’s new?' - Что нового?");


const button = { text: 'Еще!', callback_data: 'btn_words_2' };
await ctx.replyWithHTML("<i>Hello, <b>what's new</b> with you?</i>\nПривет,<b> что нового</b> у тебя?", {
    reply_markup: {
        inline_keyboard: [[button]]
    }
}); 
});

// Действие при нажатии на кнопку 'Еще!'
trainingScene1.action('btn_words_2', async (ctx) => {
const howareyou = 'sound/goodmorning.mp3';
const caption = 'void';
await ctx.replyWithVoice({ source: howareyou, caption, duration: 1, performer: '', title: '' });


await ctx.replyWithHTML("Третья фраза:");

await ctx.replyWithHTML("<b>Good morning</b> - Доброе утро ");

const button = { text: 'И последний рывок', callback_data: 'btn_words_3' };
await ctx.replyWithHTML("<b> Good morning!</b> What's new today?\n<b>Доброе утро!</b> Что нового сегодня?", {
    reply_markup: {
        inline_keyboard: [[button]]
    }
});
});


trainingScene1.action('btn_words_3', async (ctx) => {
    const howareyou = 'sound/CanIhelpyou.mp3';
    const caption = 'void';
    await ctx.replyWithVoice({
      source: howareyou,
      caption,
      duration: 1,
      performer: '',
      title: ''
    });
  
    await ctx.replyWithHTML('Четвертая фраза:');
    await ctx.replyWithHTML(
      "Can I help you? - Я могу вам помочь?",
      {
      }
    );
    await ctx.scene.enter('Scene_word_check_1');
  });


  
  module.exports = trainingScene1;
  
  
  