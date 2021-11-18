const { DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;

const Scheduling = sequelize.define('Scheduling', {
    dateScheduling: {
        type: DataTypes.DATE,
    },
    subject: {
        type: DataTypes.STRING
    },
    dateTimeEnd: {
        type: DataTypes.DATE
    },
    userId: {
        type: DataTypes.INTEGER,
    },
    status: {
        type: DataTypes.STRING,
    }
})

//console.log(Scheduling === sequelize.models.Scheduling);

module.exports = Scheduling;
