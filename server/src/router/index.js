const home = require('../controller/Home').home
const user = require('../controller/UserController')



module.exports = (app) => {
    app.get('/', home)

    // Create new user
    app.post('/mil/create', user.create_user_post)

    // List all user accounts
    app.get('/mil/', user.all_user_get)

    // Display information for a user account
    app.get('/mil/:uid', user.one_user_get)

    // Update user information account
    app.post('/mil/:uid', user.update_user_post)

    // Delete user account
    app.delete('/mil/:uid', user.delete_user_delete)


}
