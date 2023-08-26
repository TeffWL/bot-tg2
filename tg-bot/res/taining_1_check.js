// async function sendNextWord(ctx, wordIndex) {
//     let word;
//     let correctBtn;
//     let wrongBtns = [];
  
//     switch (wordIndex) {
//       case 1:
//         word = "слово";
//         correctBtn = { text: "верное слово1", callback_data: "word_check_ang-rus_n1" };
//         wrongBtns = [
//           { text: "не верное слово1", callback_data: "closeBtn1" },
//           { text: "не верное слово1", callback_data: "closeBtn1" },
//           { text: "не верное слово1", callback_data: "closeBtn1" },
//         ];
//         break;
//       case 2:
//         word = "слово2";
//         correctBtn = { text: "верное слово2", callback_data: "word_check_ang-rus_n2" };
//         wrongBtns = [
//           { text: "не верное слово2", callback_data: "closeBtn2" },
//           { text: "не верное слово2", callback_data: "closeBtn2" },
//           { text: "не верное слово2", callback_data: "closeBtn2" },
//         ];
//         break;
//     }
  
//     const  btns = [correctBtn, ...wrongBtns].sort(() => Math.random() - 0.5);
  
//     function groupInPairs(array) {
//       let newArr = [];
//       for (let i = 0; i < array.length; i += 2) {
//         newArr.push(array.slice(i, i + 2));
//       }
//       return newArr;
//     }
  
//     const replyMarkup = {
//       inline_keyboard: groupInPairs(btns),
//     };
  
//     await ctx.reply(word, { reply_markup: replyMarkup });
  
// }

  
//   trainingScene.action('btn_words_4', async (ctx) => {
//     await sendNextWord(ctx, 1); // Старт с первого слова
//   })
  
//   trainingScene.action(/word_check_ang-rus_n1/, async (ctx) => {
//     const inline_keyboard = [
//       [
//         {
//           text: "верное слово ✅",
//           callback_data: "word_check_ang-rus_n1",
//         },
//       ],
//     ];
  
//     await ctx.editMessageReplyMarkup({ inline_keyboard });
//     await sendNextWord(ctx, 2); // Переход к слову2 после word_check_ang-rus_n1
//   });
  
//   trainingScene.action("closeBtn1", async (ctx) => {
//     await ctx.reply("Правильно будет не слово.")
//       const inline_keyboard = [
//       [
//         {
//           text: "не верное слово  ❌",
//           callback_data: "closeBtn1",
//         },
//       ],
//     ];
  
//     await ctx.editMessageReplyMarkup({ inline_keyboard });
//     await sendNextWord(ctx, 2); // Переход к слову2 после closeBtn1
//   });
  
//                                                       // другие действия и обработчики точно так же

//   trainingScene.action(/word_check_ang-rus_n2/, async (ctx) => {
//     const inline_keyboard = [
//       [
//         {
//           text: "верное слово2 ✅",
//           callback_data: "word_check_ang-rus_n2",
//         },
//       ],
//     ];
  
//     await ctx.editMessageReplyMarkup({ inline_keyboard });
//     await sendNextWord(ctx, 2); // Переход к слову2 после word_check_ang-rus_n1
//   });
  
//   trainingScene.action("closeBtn2", async (ctx) => {
//     await ctx.reply("Правильно будет не слово2.")
//       const inline_keyboard = [
//       [
//         {
//           text: "не верное слово2  ❌",
//           callback_data: "closeBtn1",
//         },
//       ],
//     ];
  

//     await ctx.editMessageReplyMarkup({ inline_keyboard });
//     await delayedReply(ctx, 3000,    'trainingSceneDay2'    ); 
// });

// async function delayedReply(ctx, delay1, nextScene ) {
//   await new Promise(resolve => setTimeout(resolve, delay1));
//   await ctx.reply('5 часов!');
//   await sendNextWord(ctx, 1);
//   await  ctx.wizard.next(nextScene)

// }










// word_check_1.action('word_check', async (ctx) => {
//     const button1 = { text: 'Слово _', callback_data: 'word_check_btn_1' };
//     const button2 = { text: 'Слово 1', callback_data: 'closeBtn_1' };
//     const button3 = { text: 'Слово 1', callback_data: 'closeBtn_1' };
//     const button4 = { text: 'Слово 1', callback_data: 'closeBtn_1' };
//     await ctx.reply('Текст _______', {
//         reply_markup: {
//             inline_keyboard: [
//                 [button1, button2],
//                 [button3, button4]
//             ]
//         }
//     });
// })



// word_check_1.action('word_check_btn_1', async (ctx) => {
//     const button1 = { text: 'Слово _2', callback_data: 'word_check_btn_2' };
//     const button2 = { text: 'Слово 2', callback_data: 'closeBtn_2' };
//     const button3 = { text: 'Слово 2', callback_data: 'closeBtn_2' };
//     const button4 = { text: 'Слово 2', callback_data: 'closeBtn_2' };
//     await ctx.reply('Текст _______', {
//         reply_markup: {
//             inline_keyboard: [
//                 [button1, button2],
//                 [button3, button4]
//             ]
//         }
//     });
// })









// const { Scenes, Markup } = require("telegraf");

// const temporaryScene1 = new Scenes.WizardScene(
//   "temporaryScene_1",
//   async (ctx) => {
//     const keyboard = Markup.inlineKeyboard([
//       Markup.button.callback("Начнем!", "temporaryScene_btn"),
//     ]);

//     if (!ctx.session.counter || ctx.session.counter === 0) {
//       await ctx.replyWithHTML("Время настало, прошло 5 часов....", keyboard);
//     }
    
//     return ctx.wizard.next();
//   },
//   async (ctx) => {
//     ctx.wizard.state.data = ctx.update.callback_query.data;

//     if (ctx.wizard.state.data === "temporaryScene_btn") {
//       ctx.answerCbQuery(); // Важно, чтобы закрыть сообщение об обращении к callback_data
//       await ctx.scene.leave();

//       // Инициализация счётчика, если он еще не существует
//       if (!ctx.session.counter) {
//         ctx.session.counter = 0;
//       }

//       ctx.session.counter += 1;

//       if (ctx.session.counter >= 1) {
//         if (ctx.session.counter === 1) {
//           setTimeout(async () => {
//             await ctx.scene.enter("Scene_word_check_1");
//           }, 4000);          

//           // добавляем сообщение через 20 секунд
//           setTimeout(async () => {
//             await ctx.reply("Прошло 20 секунд");
//           }, 20000);

//           setTimeout(async () => {
//             await ctx.scene.enter("Scene_word_check_1");
//           }, 20000 + 4000);

//         } else if (ctx.session.counter > 2) {
//           setTimeout(async () => {
//             await ctx.scene.enter("trainingScene_2");
//           }, 1);
//         } else {
//           await ctx.scene.enter("Scene_word_check_1");
//         }
        
//       }
//     }
//   }
// );

// module.exports = temporaryScene1;







// const { Scenes, Markup } = require("telegraf");

// const temporaryScene1 = new Scenes.WizardScene(
//   "temporaryScene_1",
//   async (ctx) => {
//     const keyboard = Markup.inlineKeyboard([
//       Markup.button.callback("Начнем!", "temporaryScene_btn"),
//     ]);

//     if (!ctx.session.counter || ctx.session.counter === 0) {
//       await ctx.replyWithHTML("Время настало, прошло 5 часов....", keyboard);
//     }
    
//     return ctx.wizard.next();
//   },
//   async (ctx) => {
//     ctx.wizard.state.data = ctx.update.callback_query.data;

//     if (ctx.wizard.state.data === "temporaryScene_btn") {
//       ctx.answerCbQuery(); // Важно, чтобы закрыть сообщение об обращении к callback_data
//       await ctx.scene.leave();

//       // Инициализация счётчика, если он еще не существует
//       if (!ctx.session.counter) {
//         ctx.session.counter = 0;
//       }

//       ctx.session.counter += 1;

//       if (ctx.session.counter >= 1) {
//         if (ctx.session.counter === 1) {
//           setTimeout(async () => {
//             await ctx.scene.enter("Scene_word_check_1");
//           }, 4000);          

//           // добавляем сообщение через 20 секунд
//           setTimeout(async () => {
//             await ctx.reply("Прошло 20 секунд");
//           }, 20000);

//           setTimeout(async () => {
//             await ctx.scene.enter("Scene_word_check_1");
//           }, 20000 + 4000);


//           // добавляем сообщение через 4 секунд
//           setTimeout(async () => {
//             await ctx.reply("Подожди минутку я подготовлю для тебя новый урок :)");
//           }, 50000);

//           setTimeout(async () => {
//             await ctx.scene.enter("trainingScene_2");
//           }, 20000 + 4000 + 50000);



//         } else if (ctx.session.counter > 3) {
//           setTimeout(async () => {
//             await ctx.scene.enter("trainingScene_2");
//           }, 1);
//         } else {
//           await ctx.scene.enter("Scene_word_check_1");
//         }
        
//       }
//     }
//   }
// );

// module.exports = temporaryScene1;