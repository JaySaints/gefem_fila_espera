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
        PRIV_KEY: 'secret',
        PUB_KEY: 'secret'
    }
}
