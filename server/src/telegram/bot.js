const TelegramBot = require('node-telegram-bot-api')
const settings = require('../config/Settings')

// replace the value below with the Telegram token you receive from @BotFather
const token = settings.telegram.token;

// Create a bot that uses 'polling' to fetch new updates
const Bot = new TelegramBot(token, {polling: true});

exports.Bot = Bot