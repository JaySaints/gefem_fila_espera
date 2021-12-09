const Scheduling = require('../model/SchedulingModel')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports.search = async (search1, search2) => {
  var msg = null
  var query = null
  if (search1 !== '' && search2 !== '') {
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
          order: [
            ['dateScheduling', 'DESC']
          ]
        })
        if (query == "") {
          msg = "Nenhum relatório encontrado para este periodo."
        }
  } else if (search1 !== '') { 
    query = await Scheduling.findAll({
      where: {
        dateScheduling: search1
      },
      order: [
        ['dateScheduling', 'DESC']
      ]
    })
    if (query == "") {
      msg = "Nenhum relatório encontrado para esta data."
    }
  }else {
    query = await Scheduling.findAll({
          limit: 50,
          order: [
            ['dateScheduling', 'DESC']
          ]
      })
  }
  const payload = {
    msg: msg,
    result: query
  }
  return payload
}

module.exports.control = async (req, res, next) => {
  const dateStart = req.body.dateStart
  const dateEnd = req.body.dateEnd

  const result = await this.search(dateStart, dateEnd)
  res.send(result)
}
