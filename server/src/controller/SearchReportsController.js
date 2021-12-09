const Scheduling = require('../model/SchedulingModel')
const User = require('../model/UserModel')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports.search = async (search1, search2) => {
  var msg = null
  var query = null
  if (search1 !== '' && search2 !== '') {
   try {
    Scheduling.belongsTo(User)
    query = await Scheduling.findAll({
      where: {
        [Op.and]: [
            {
              dateScheduling: {
                [Op.gte]: search1
              }
            },
            {
              dateScheduling: {
                [Op.lte]: search2
              }
            }
          ]
        },
      include: {
        model: User,
        as: 'User',
        attributes: ['id', 'post', 'name', 'session', 'codArea', 'phone', 'chatId', 'email']
      },
        order: [
          ['dateScheduling', 'DESC']
        ]
      })
    if (query == "") {
      msg = "Nenhum relatório encontrado para este período."
    }
   } catch (error) {
     console.log(error)
     msg = "Erro ao processar este período!!!"
   }
  } else if (search1 !== '') { 
    try {
      Scheduling.belongsTo(User)
      query = await Scheduling.findAll({
        where: {
          dateScheduling: search1
        },
        include: {
          model: User,
          as: 'User',
          attributes: ['id', 'post', 'name', 'session', 'codArea', 'phone', 'chatId', 'email']
        },
        order: [
          ['dateScheduling', 'DESC']
        ]
      })
      if (query == "") {
        msg = "Nenhum relatório encontrado para esta data."
      }
    } catch (error) {
      console.log(error)
      msg = "Erro ao processar esta data!!!"
    }
  }else {
    try {
      Scheduling.belongsTo(User)
      query = await Scheduling.findAll({
        limit: 50,
        include: {
          model: User,
          as: 'User',
          attributes: ['id', 'post', 'name', 'session', 'codArea', 'phone', 'chatId', 'email']
        },
        order: [
          ['dateScheduling', 'DESC']
        ]
      })
    } catch (error) {
      console.log(error)
    }
  }
  const payload = {
    msg: msg,
    result: query
  }
  return payload
}

module.exports.controller = async (req, res, next) => {
  const dateStart = req.body.dateStart
  const dateEnd = req.body.dateEnd

  const result = await this.search(dateStart, dateEnd)
  res.send(result)
}
