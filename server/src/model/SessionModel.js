const { DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;

const Session = sequelize.define('Session', {
    description: {
        type: DataTypes.STRING,
    }
})

//console.log(Session === sequelize.models.Session);

module.exports = Session;
