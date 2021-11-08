const Sequelize = require('sequelize');
const config = require('../config/Settings');

const db = {} 

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }    
}
// testConnection();

module.exports.sequelize = sequelize;
