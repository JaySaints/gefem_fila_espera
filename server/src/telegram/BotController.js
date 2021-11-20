const User = require('../model/UserModel')

exports.info = async (bot, msg, match) => {
    const chatId = msg.chat.id;
    const option = match[1]; // the captured "whatever"   
    const usuario = await User.findOne({where: {phone: option}})
    //var telefone = ''
    if (usuario) {
       var telefone = usuario.phone
    }

    if (option == "myid") {
        await bot.sendMessage(chatId, `Seu ID da conversa é ${chatId}`);   
    } else if (option == telefone) {
        bot.sendMessage(chatId, `${usuario.post} ${usuario.name} | Telefone: ${usuario.phone} | Email: ${usuario.email}`)
    } else {
        bot.sendMessage(chatId, "Opção inválida!");        
    }
}

exports.ok = async (bot, msg, match) => {
    const chatId = msg.chat.id;
    const option = match[1]; // the captured "whatever"
    const usuario = await User.findOne({where: {phone: option}})
    if (usuario) {
        var telefone = usuario.phone
     }

    if (option == telefone) {
        await User.update({
           chatId: chatId
        }, {
            where: {
                id: usuario.id
            }
        })
        bot.sendMessage(chatId, `Muito obrigado ${msg.chat.first_name}, seu cadastro foi concluido!`)            
    } else {
        bot.sendMessage(chatId, "Número de telefone não encontrado!\nTente novamente ou procure o Ordenança.");
    }
} 

exports.echo = (bot, msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
}

exports.start = (bot, msg) => {
    const chatId = msg.chat.id;
    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, `Olá ${msg.chat.first_name}...Para confirmar seu cadastro digite a seguinte instrução:\n/ok + número do seu telefone sem caracteres especiais\n(ex.: /ok XXXXXXXXX)`);
}


exports.on = ('message', (bot, msg) => {
    const chatId = msg.chat.id;

    console.log(msg.text)
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, `Olá ${msg.chat.first_name}`);


  });

