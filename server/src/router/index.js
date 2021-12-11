const home = require('../controller/Home').home
const user = require('../controller/UserController')
const inflateLayout = require('../controller/InflateLayoutController')
const scheduling = require('../controller/SchedulingController')
const EmailPolicy = require('../polices/EmailPolicy')
const authToken = require('../config/tools');
const searchReports = require('../controller/SearchReportsController')



module.exports = (app) => {
    app.get('/', home)

    // Login user
    app.post('/login', user.login_user_post)
    
    // Create new user
    app.post('/mil/create', authToken.isAuthAdmin, EmailPolicy.register, user.create_user_post)

    // List all user accounts
    app.get('/mil/', authToken.isAuthAdmin, user.all_user_get)

    // Display information for a user account
    app.get('/mil/:uid', authToken.isAuthAdmin, user.one_user_get)

    // Update user information account
    app.post('/mil/:uid/update', authToken.isAuthAdmin, EmailPolicy.register, user.update_user_post)

    // Delete user account
    app.get('/mil/:uid/delete', authToken.isAuthAdmin, user.delete_user_get)

    // Get profile information account
    app.post('/profile', authToken.authMiddleware, EmailPolicy.register, user.one_user_post)

    // Update profile information account
    app.post('/profile/:uid/update', authToken.authMiddleware, EmailPolicy.register, user.update_profile_post)

    // Reset password user account
    app.get('/mil/:uid/reset', authToken.isAuthAdmin, user.reset_password_get)

    // Response contents layout
    app.get('/inflate', inflateLayout.inflate_layout_get)
    
    // Insert new user in the queue
    app.post('/enter-on-queue', authToken.authMiddleware, scheduling.enter_on_queue_post)

    // Get military on queue
    app.get('/list-queue', authToken.authMiddleware, scheduling.list_queue_get)

    // Get military on queue
    app.get('/list-queue/in-attendance', authToken.authMiddleware, scheduling.in_attendance_get)

    // update status queue
    app.post('/list-queue', authToken.authMiddleware, scheduling.update_status_queue_post)

    // Send notification for dispatschers
    app.post('/send-message', authToken.authMiddleware, scheduling.send_message_post)

    // Search for reports
    app.post('/search-reports', searchReports.controller)
}
