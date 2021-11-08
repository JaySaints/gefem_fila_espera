const home = require('../controller/Home').home
const user = require('../controller/UserController')



module.exports = (app) => {
    app.get('/', home)

    app.post('/mil/create', user.create_user_post)


}
