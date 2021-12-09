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

module.exports = Scheduling;
