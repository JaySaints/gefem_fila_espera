const home = require('../controller/Home').home
const user = require('../controller/UserController')
const inflateLayout = require('../controller/InflateLayoutController')


module.exports = (app) => {
    app.get('/', home)

    // Login user
    app.post('/login', user.login_user_post)
    
    // Create new user
    app.post('/mil/create', user.create_user_post)

    // List all user accounts
    app.get('/mil/', user.all_user_get)

    // Display information for a user account
    app.get('/mil/:uid', user.one_user_get)

    // Update user information account
    app.post('/mil/:uid/update', user.update_user_post)

    // Delete user account
    app.get('/mil/:uid/delete', user.delete_user_get)

    // Update profile information account
    app.post('/profile/:uid/update', user.update_profile_post)

    // Reset password user account
    app.get('/mil/:uid/reset', user.reset_password_get)

    // Response contents layout
    app.get('/inflate', inflateLayout.inflate_layout_get)
    
}
