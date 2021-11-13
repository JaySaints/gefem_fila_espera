const { DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize;

const Post = sequelize.define('Post', {
    initials: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
        unique: true
    }
})

//console.log(Post === sequelize.models.Post);

module.exports = Post;
