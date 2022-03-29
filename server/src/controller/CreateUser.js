const User = require('../model/UserModel')
const tools = require('../config/tools')

module.exports.func_create_user = async (req) => {
    const saltHash = tools.genPassword(req.body.password);
    const salt = saltHash.salt;
    const hash = saltHash.hash;

    var user = await User.create({
        post: req.body.post,
        name: (req.body.name).toUpperCase(),
        session: req.body.session,
        email: (req.body.email).toLowerCase(),
        codArea: req.body.codArea,
        phone: req.body.phone,
        role: req.body.role,
        hash: hash,
        salt: salt
    })

    return user
}