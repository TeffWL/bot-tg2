const { Scenes } = require('telegraf')

const sceneStart = require('./infoScene/startScene')

const firstInformation = require('./infoScene/information_1')
const secondInformation = require('./infoScene/information_2')
const thirdInformation = require('./infoScene/information_3')
const fourthInformationScene = require('./infoScene/infromation_4')


//baseScene
const trainingScene1 = require('./baseScene/training1/training_1')
const trainingScene2 = require('./baseScene/training2/training_2')

const word_check_1 = require('./baseScene/training1/wordChek_1')
const word_check_2 = require('./baseScene/training2/wordChek_2')

const temporaryScene1 = require('./baseScene/training1/temporaryScen_1')
const temporaryScene2 = require('./baseScene/training2/temporaryScen_2')







const menuScene = require('./menu/menuScenes')

const topics = require('./topics/topicsScene')


// информация
const stage = new Scenes.Stage([
     // старт
    sceneStart, 
     // информация
    firstInformation, secondInformation,thirdInformation,fourthInformationScene,
     //занятия 
     trainingScene1,
     trainingScene2,
     //проверка  
     word_check_1,
     word_check_2,
    // временные сцены - сцены повтора
     temporaryScene1,
     temporaryScene2,

     

     menuScene,
     topics

    ])

    .action('leave', async (ctx) => {
        await ctx.scene.leave()
        return ctx.reply('Вы успешно покинули сцену!')
    })




    
module.exports = stage







// .command('leave', async (ctx) => {
//     await ctx.scene.leave()
//     return ctx.reply('Вы успешно покинули сцену!')
// })
// .action('leave', async (ctx) => {
//     await ctx.scene.leave()
//     return ctx.reply('Вы успешно покинули сцену!')
// })
