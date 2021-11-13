const { DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;

const User = sequelize.define('User', {
    post: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    session: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
    },
    codArea: {
        type: DataTypes.INTEGER,
    },
    phone: {
        type: DataTypes.INTEGER,
    },
    role: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    hash: DataTypes.STRING,
    salt: DataTypes.STRING
})

//console.log(User === sequelize.models.User);

module.exports = User;
