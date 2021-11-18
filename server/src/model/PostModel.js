const { DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;

const Post = sequelize.define('Post', {
    cod_id: {
        type: DataTypes.INTEGER,
    },
    initials: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
        unique: true
    }
})

//console.log(Post === sequelize.models.Post);

module.exports = Post;
