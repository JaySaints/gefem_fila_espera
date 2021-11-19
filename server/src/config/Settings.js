const fs = require('fs');
const path = require('path');

const pathToKey = path.join(__dirname, '.', 'id_rsa_priv.pem');
const PRIV_KEY = fs.readFileSync(pathToKey, 'utf8');

const pathToPubKey = path.join(__dirname, '.', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToPubKey, 'utf8');


module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'db_fila_online',
        user: process.env.DB_USER || 'fila_online',
        password: process.env.DB_PASS || 'fila_online',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './db_fila_online.sqlite'
        }
    },
    authentication: {
        PRIV_KEY: PRIV_KEY || 'secret',
        PUB_KEY: PUB_KEY || 'secret'
    },
    telegran: {
        token: process.env.TOKEN_BOT
    }
}
