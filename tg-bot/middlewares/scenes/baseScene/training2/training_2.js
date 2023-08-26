const { Scenes, Markup } = require('telegraf');
const { UserData, saveUserData } = require('../../../../db');

const trainingScene2 = new Scenes.WizardScene(
  'trainingScene2',
  async (ctx) => {
    const keyboard = Markup.inlineKeyboard([
      Markup.button.callback('Начнем!', 'btn_words')
    ]);
    await ctx.replyWithHTML('Первая фраза  на сегодня', keyboard);
    return ctx.wizard.next();
  },
//   async (ctx) => {
//     try {
//         const sceneName = 'trainingScene2';
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
trainingScene2.action('btn_words', async (ctx) => {
const nameAudio = 'sound/training_2/idontknow.mp3';
const caption = 'void';

await ctx.replyWithVoice({ source: nameAudio, caption, duration: 1, performer: '', title: '' });    


const button = { text: 'Еще!', callback_data: 'btn_words_1' };
await ctx.replyWithHTML("<b>I don't know</b> - Я не знаю", {
    reply_markup: {
        inline_keyboard: [[button]]
    }
});
});



// Действие при нажатии на кнопку 'Еще!'
trainingScene2.action('btn_words_1', async (ctx) => {

        
const nameAudio = 'sound/training_2/maybe.mp3';
const caption = 'void';
await ctx.replyWithVoice({ source: nameAudio, caption, duration: 1, performer: '', title: '' });
const button = { text: 'Еще!', callback_data: 'btn_words_2' };
await ctx.replyWithHTML("<b>Maybe</b> - Может быть", {
  reply_markup: {
      inline_keyboard: [[button]]
  }
});
});



// Действие при нажатии на кнопку 'Еще!'
trainingScene2.action('btn_words_2', async (ctx) => {
const nameAudio = 'sound/training_2/ImsorryIdidntcatchthat.mp3';
const caption = 'void';
await ctx.replyWithVoice({ source: nameAudio, caption, duration: 1, performer: '', title: '' });


await ctx.replyWithHTML("Ого, а тут уже сложнее");

const button = { text: 'И последний рывок', callback_data: 'btn_words_3' };
await ctx.replyWithHTML("<b>I'm sorry, I didn't catch that</b>-Простите, я не расслышал ", {
    reply_markup: {
        inline_keyboard: [[button]]
    }
});
});


trainingScene2.action('btn_words_3', async (ctx) => {
    const nameAudio = 'sound/training_2/sound_2_4.mp3';
    const caption = 'void';
    await ctx.replyWithVoice({
      source: nameAudio,
      caption,
      duration: 1,
      performer: '',
      title: ''
    });
  
    await ctx.replyWithHTML('Четвертая фраза:');
    await ctx.replyWithHTML("<b>Could you repeat that, please?</b> - Не могли бы вы повторить, пожалуйста?"),
    ctx.session = {};
    await ctx.scene.enter('Scene_word_check_2');
  });


  
  module.exports = trainingScene2;
  
  
  