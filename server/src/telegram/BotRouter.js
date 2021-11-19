const botController = require('./BotController')

module.exports = (bot) => {
    // Matches "/echo [whatever]"
    bot.onText(/\/echo (.+)/, async (msg, match) => {
      await botController.echo(bot, msg, match)
    });
    
    bot.onText(/\/start/, async (msg) => {
      await botController.start(bot, msg)
    });
    
    bot.onText(/\/info (.+)/, async (msg, match) => {
      await botController.info(bot, msg, match)
    });
    
    bot.onText(/\/ok (.+)/, async (msg, match) => {
        await botController.ok(bot, msg, match)
      });
    
    //Listen for any kind of message. There are different kinds of messages.
    // bot.on('message', async (msg) => {
    //   await botController.on(bot, msg)
    // });
}
