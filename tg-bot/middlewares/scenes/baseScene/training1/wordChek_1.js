const { Scenes, Markup } = require('telegraf')


const word_check_1 = new Scenes.WizardScene(
    'Scene_word_check_1',
    async (ctx) => {
        const keyboard = Markup.inlineKeyboard([
            Markup.button.callback('Проверка', 'word_check')
        ]);
        await ctx.replyWithHTML('Проверим твои знания', keyboard);
        return ctx.wizard.next()
    },
)


// функция проверки слов
async function sendNextWord(ctx, wordIndex) {

  let word;
  let correctBtn;
  let wrongBtns = [];

  console.log(`Отправка следующего слова: ${wordIndex}`);

  switch (wordIndex) {
      case 1: // русс анг Как дела?-  How are you? 
        word = "Как правильно перевести\nКак дела? ";
        correctBtn = { text: "How are you?", callback_data: "word_check_ang-rus_n1" };
        wrongBtns = [
          { text: "Hoa are yuo?", callback_data: "closeBtn1" },
          { text: "Hwao era yuo?", callback_data: "closeBtn1" },
          { text: "Hwo ear yuo?", callback_data: "closeBtn1" },
        ]
        break;
      case 2: // анг рус What’s new? — Что нового
        word = "А как перевести\nWhat’s new?";
        correctBtn = { text: "Что нового?", callback_data: "word_check_ang-rus_n2" };
        wrongBtns = [
          { text: "Какие новости?", callback_data: "closeBtn2" },
          { text: "Есть что-нибудь новое?", callback_data: "closeBtn2" },
          { text: "Что интересного?", callback_data: "closeBtn2" },
        ];
        break;
        case 3: // русс анг  Могу я вам помочь? - Can I help you? 
        word = "Как правильно перевести\nМогу я вам помочь? ";
        correctBtn = { text: "Can I  help you?", callback_data: "word_check_ang-rus_n3" };
        wrongBtns = [
          { text: "Can I halp yu?", callback_data: "closeBtn3" },
          { text: "Kan I helpp yoo?", callback_data: "closeBtn3" },
          { text: "Can I helf yu?", callback_data: "closeBtn3" },
        ];
        break;
        case 4: // анг рус Good morning - Доброе утро
          word = "Как правильно перевести\nGood morning";
          correctBtn = { text: "Доброе утро", callback_data: "word_check_ang-rus_n4" };
          wrongBtns = [
            { text: "Добрый вечер", callback_data: "closeBtn4" },
            { text: "Добрый день", callback_data: "closeBtn4" },
            { text: "Хорошего дня ", callback_data: "closeBtn4" },
          ];
          break;
          case 5: //рус - анг поменять
            word = "Как бы вы перевели\nCan I  help you?";
            correctBtn = { text: "Могу я вам помочь?", callback_data: "word_check_ang-rus_n5" };
            wrongBtns = [
              { text: "Могу быть полезен?", callback_data: "closeBtn5" },
              { text: "Нужна помощь с чем-то?", callback_data: "closeBtn5" },
              { text: "Если нужна помощь", callback_data: "closeBtn5" },
            ];
            break;
            case 6: // анг рус  Доброе утро - Good morning
              word = "А как правильно перевести\nДоброе утро";
              correctBtn = { text: "Good morning ", callback_data: "word_check_ang-rus_n6" };
              wrongBtns = [
                { text: "Goo monring", callback_data: "closeBtn6" },
                { text: "God moring", callback_data: "closeBtn6" },
                { text: "Good day", callback_data: "closeBtn6" },
              ];
              break;
              case 7: // рус анг  Что нового? - What’s new?
              word = "А как сказать на английском\nЧто нового?";
              correctBtn = { text: " What’s new?", callback_data: "word_check_ang-rus_n7" };
                wrongBtns = [
                  { text: "Wat's gnu?", callback_data: "closeBtn7" },
                  { text: "Knot's ewe?", callback_data: "closeBtn7" },
                  { text: "Watt's nuke?", callback_data: "closeBtn7" },
                ];
                break;

                case 8: //аудио 1 
                const howareyou = 'sound/howareyou.mp3';
                await ctx.replyWithHTML("Послушайте аудио и напишите услышанное слово на английском");
                await ctx.replyWithVoice({ source: howareyou,  duration: 1, performer: '', title: '' });       
                ctx.wizard.state.waitForUserAnswerAfterAudio = true;
                ctx.wizard.state.currentWordIndex = 8; // ПЕРЕХОД
                break;

                case 9: //аудио 2 
                const goodmorning = 'sound/goodmorning.mp3';
                await ctx.replyWithHTML("Послушайте аудио и напишите услышанное слово на английском");
                await ctx.replyWithVoice({ source: goodmorning,  duration: 1, performer: '', title: '' });       
                ctx.wizard.state.waitForUserAnswerAfterAudio = true;
                ctx.wizard.state.currentWordIndex = 9; // ПЕРЕХОД
                break;

                case 10: //аудио 3
                const CanIhelpyou = 'sound/CanIhelpyou.mp3';
                await ctx.replyWithHTML("Послушайте аудио и напишите услышанное слово на английском");
                await ctx.replyWithVoice({ source: CanIhelpyou,  duration: 1, performer: '', title: '' });       
                ctx.wizard.state.waitForUserAnswerAfterAudio = true;
                ctx.wizard.state.currentWordIndex = 10; // ПЕРЕХОД
                break;

                case 11: //аудио 4
                const whatsnew = 'sound/whatsnew.mp3';
                await ctx.replyWithHTML("Послушайте аудио и напишите услышанное слово на английском");
                await ctx.replyWithVoice({ source: whatsnew,  duration: 1, performer: '', title: '' });       
                ctx.wizard.state.waitForUserAnswerAfterAudio = true;
                ctx.wizard.state.currentWordIndex = 11; // ПЕРЕХОД
                break;

                case 12: // анг рус Как дела?-  How are you? -
                word = "Сможешь перевести\nHow are you?";
                correctBtn = { text: "Как дела?", callback_data: "word_check_ang-rus_n8" };
                wrongBtns = [
                  { text: "Как настроение?", callback_data: "closeBtn8" },
                  { text: "Как поживаешь?", callback_data: "closeBtn8" },
                  { text: "Что нового?", callback_data: "closeBtn8" },
                ];
                break;
  }

  word_check_1.on('message', async ctx => {
    if (ctx.wizard.state.waitForUserAnswerAfterAudio) {
      await processUserAudioAnswer(ctx);
      ctx.wizard.state.waitForUserAnswerAfterAudio = false;
      ctx.wizard.state.currentWordIndex++;
      ctx.scene.reenter(); //Добавьте этот вызов здесь
    } else {
      // Ваши обрабатываемые событий здесь
    }
  });
  
  async function processUserAudioAnswer(ctx) {
    const wordIndex = ctx.wizard.state.currentWordIndex;
    const userMessage = ctx.message.text.trim().toLowerCase();
  
    let correctMessage;
    let correctMessage2;
    if (wordIndex === 8) {
      correctMessage = "how are you?";
      correctMessage2 = "How are you?";
    } else if (wordIndex === 9) {
      correctMessage = "good morning";
      correctMessage2 = "Good morning";
    }
    else if (wordIndex === 10) {
      correctMessage = "can I help you?";
      correctMessage2 = "Can I help you?";
    }
    else if (wordIndex === 11) {
      correctMessage = "what’s new?";
      correctMessage2 = "What’s new?";
    }
  
    if (userMessage === correctMessage) {
      await ctx.reply("Правильно! 👍");
    } else {
      await ctx.reply(`Неправильно. Правильный ответ: ${correctMessage2} 👍`);
    }
  
    ctx.wizard.state.waitForUserAnswerAfterAudio = false;
  
    // Упорядочьте фрагмент с обновлением текущего индекса слова перед отправкой следующего слова.
    ctx.wizard.state.currentWordIndex++;
    sendNextWord(ctx, ctx.wizard.state.currentWordIndex);
    }
  

  // удаление кнопок после нажатия
  const btns = [correctBtn, ...wrongBtns].sort(() => Math.random() - 0.5);
  function groupInPairs(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i += 2) {
      newArr.push(array.slice(i, i + 2));
    }
    return newArr;
  }
  const replyMarkup = {
    inline_keyboard: groupInPairs(btns),
  };

  ctx.wizard.state.currentWordIndex = wordIndex;

  if (wordIndex !== 8 && wordIndex !== 9 && wordIndex !== 10 && wordIndex !== 11) {
    await ctx.reply(word, { reply_markup: replyMarkup });
  }
}


word_check_1.action('word_check', async (ctx) => {
  await sendNextWord(ctx, 1); // Старт с первого слова
});

const checks = [
  {
    action: "word_check_ang-rus_n1",
    answer: "Как дела?",
    correctBtnText: "How are you? ✅",
    incorrectBtnText: "❌",
    nextWordIndex: 2,
  },
  {
    action: "word_check_ang-rus_n2",
    answer: "What’s new?",
    correctBtnText: "Что нового? ✅",
    incorrectBtnText: "❌",
    nextWordIndex: 3,
  },
  {
    action: "word_check_ang-rus_n3",
    answer: "Can I  help you?",
    correctBtnText: "Can I  help you? ✅",
    incorrectBtnText: "❌",
    nextWordIndex: 4,
  },
  {
    action: "word_check_ang-rus_n4",
    answer: "Доброе утро",
    correctBtnText: "Доброе утро ✅",
    incorrectBtnText: "❌",
    nextWordIndex: 5,
  },
  {
    action: "word_check_ang-rus_n5",
    answer: "Могу я вам помочь?",
    correctBtnText: "Могу я вам помочь? ✅",
    incorrectBtnText: "❌",
    nextWordIndex: 6,
  },
  {
    action: "word_check_ang-rus_n6",
    answer: "Good morning",
    correctBtnText: "Good morning ✅",
    incorrectBtnText: "❌",
    nextWordIndex: 7,
  },
  {
    action: "word_check_ang-rus_n7",
    answer: "What’s new?",
    correctBtnText: "What’s new? ✅",
    incorrectBtnText: "❌",
    nextWordIndex: 8,
  },
  {
    action: "word_check_ang-rus_n8",
    answer: "Как дела?",
    correctBtnText: "Как дела? ✅",
    incorrectBtnText: "❌",
    nextWordIndex: null,
  },
];

word_check_1.action(new RegExp(checks.map((check) => check.action).join('|')), async (ctx) => {
  const check = checks.find((check) => check.action === ctx.callbackQuery.data);

  const inline_keyboard = [
    [
      {
        text: check.correctBtnText,
        callback_data: `correct-${check.action}`,
      },
    ],
  ];

  await ctx.editMessageReplyMarkup({ inline_keyboard });

  if (check.nextWordIndex !== null) {
    await sendNextWord(ctx, check.nextWordIndex);
  } else if (ctx.session.sentDelayedMessagesCount > 1 || (check.nextWordIndex === null && check.answer === "Как дела?")) {
    return handleTestEnd(ctx);
  } else {
    return ctx.scene.enter("temporaryScene_1");
  }
});

word_check_1.action(/correct-/, async (ctx) => {
  await ctx.answerCbQuery();
  
});

word_check_1.action(/closeBtn(\d)/, async (ctx) => {
  const checkIndex = parseInt(ctx.match[1]) - 1;
  const check = checks[checkIndex];

  if (check.answer) {
    await ctx.reply(`Правильно будет ${check.answer}.`);
  } 

  const inline_keyboard = [
    [
      {
        text: check.incorrectBtnText,
        callback_data: ctx.callbackQuery.data,
      },
    ],
  ];

  await ctx.editMessageReplyMarkup({ inline_keyboard });

  if (check.nextWordIndex !== null) {
    await sendNextWord(ctx, check.nextWordIndex);
  } else {
    return handleTestEnd(ctx);
  }
});



async function handleTestEnd(ctx) {
  // Выведите разные сообщения основываясь на значении сессии `sentDelayedMessagesCount`
  if (!ctx.session.sentDelayedMessagesCount) {
    ctx.session.sentDelayedMessagesCount = 0;
  }
  
  if (ctx.session.sentDelayedMessagesCount === 0) {
    await ctx.reply('Поздравляем!\nВы прошли урок по запоминанию фраз💫\nДо встречи в этом чате!');
    await ctx.replyWithHTML('Вот, что вы прошли сегодня');
    await ctx.replyWithHTML('#phrases \nHow are you? - Как дела?\nWhat’s new?— Что нового?\nGood morning - Доброе утро\nCan I help you? - Могу я вам помочь?');

    ctx.session.sentDelayedMessagesCount++;
  } else if (ctx.session.sentDelayedMessagesCount === 1) {
    await ctx.reply('- Увидимся завтра');
    ctx.session.sentDelayedMessagesCount++;
  } else if (ctx.session.sentDelayedMessagesCount === 2) {
    await ctx.reply('Новый день новые фразы');
    ctx.session.sentDelayedMessagesCount++;
    return ctx.scene.enter('trainingScene2');
  } else {
    await ctx.reply('Тест завершен.'); // Если ни одно условие не удовлетворяет
  }
  return ctx.scene.enter('temporaryScene_1');
}


module.exports = word_check_1;
