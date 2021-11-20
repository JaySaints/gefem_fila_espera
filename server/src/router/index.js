const home = require('../controller/Home').home
const user = require('../controller/UserController')
const inflateLayout = require('../controller/InflateLayoutController')
const scheduling = require('../controller/SchedulingController')


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
    
    // Insert new user in the queue
    app.post('/enter-on-queue', scheduling.enter_on_queue_post)

    // Get military on queue
    app.get('/list-queue', scheduling.list_queue_get)

    // Get military on queue
    app.get('/list-queue/in-attendance', scheduling.in_attendance_get)

    // update status queue
    app.post('/list-queue', scheduling.update_status_queue_post)

    // Send notification for dispatschers
    app.post('/send-message', scheduling.send_message_post)
}
