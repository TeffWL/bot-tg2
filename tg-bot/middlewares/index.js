const { Composer, session } = require('telegraf')

const scenes = require('./scenes')

module.exports = new Composer(
    session(),
    scenes.middleware()
)