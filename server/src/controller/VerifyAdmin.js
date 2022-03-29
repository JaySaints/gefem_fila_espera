const User = require('../model/UserModel')
const AddUser = require('./CreateUser')

module.exports.exist_admin = async () => {
    const admin = await User.findOne({
        where: {
            email: "admin@admin.com"   
        }
    })
    
    if(admin !== null) return

    const uu = await AddUser.func_create_user({ 
        body: {
            post: "Admin",
            name: "Admin",
            session: "Administration",
            email: "admin@admin.com",
            codArea: "41",
            phone: "Admin001",
            role: "2",
            password: "Admin001"
        }
    })    
}

    
