const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./model');
const Bot = require('./telegram/bot').Bot
const settings = require('./config/Settings')
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./router')(app);

// Call routers
require('./telegram/BotRouter')(Bot);

sequelize.sync({force: false})
    .then(() => {
        app.listen(settings.port);
        console.log(`Server started on port ${settings.port}`)   
    })
