const { DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;
const User = require('./UserModel')

const Scheduling = sequelize.define('Scheduling', {
    userId: {
        type: DataTypes.INTEGER,        
        references: {
            // This is a reference to another model
            model: User,
            // This is the column name of the referenced model
            key: 'id'
        }
    },
    dateScheduling: {
        type: DataTypes.STRING,
    },
    subject: {
        type: DataTypes.STRING
    },
    dateTimeEnd: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.STRING,
    }
})

//console.log(Scheduling === sequelize.models.Scheduling);

const test = async () => {
    console.log("resultado ------------------------------------------------>")
    Scheduling.belongsTo(User)
    const result = await Scheduling.findAll({
        attributes: ['id', 'userId', 'subject'],
        include: {
            model: User,
            as: 'User',
            attributes: ['id', 'post', 'name', 'session', 'codArea', 'phone', 'role', 'email']
        }
    })
    //console.log(result)
    result.forEach(element => {
        //console.log(element.dataValues.User.dataValues)        
        console.log(element.dataValues)
    });
}
// test()

module.exports = Scheduling;
