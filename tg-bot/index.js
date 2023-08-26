require('dotenv').config()

const { Telegraf, Markup } = require('telegraf')

const middlewares = require('./middlewares')


const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(
    middlewares
    );

bot.command('start', (ctx) => {
    ctx.scene.enter('sceneStart');
});

  

bot.catch((error) => console.log(error))


  bot.launch()
  
  process.once('SIGINT', () => bot.stop('SIGINT'))
  process.once('SIGTERM', () => bot.stop('SIGTERM'))














