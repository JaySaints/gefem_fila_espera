const User = require('../model/UserModel')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

module.exports.search = async (search) => {
  var users = null
  if (search) {
      users = await User.findAll({
          where: {
              [Op.or]: [
                  {
                    name: {
                      [Op.like]: `%${search}%`
                    }
                  },
                  {
                    post: {
                      [Op.like]: `%${search}%`
                    }
                  }
                ]
          }
        })
  } else {
      users = await User.findAll({
          limit: 50
      })
  }
  return users
}
