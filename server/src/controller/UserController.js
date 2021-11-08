const User = require('../model/UserModel')

module.exports = {
    // Function CREATE USER || method POST
    async create_user_post (req, res, next) {
        try {
            const user = await User.create({
                post: req.body.post,
                name: (req.body.name).toUpperCase(),
                session: req.body.session,
                email: req.body.email,
                codArea: req.body.codArea,
                phone: req.body.phone,
                role: req.body.role,
                hash: "hash",
                salt: "salt"
            })
            res.status(200).send({success: true, msg: 'Militar Registrada!', user: user});
        } catch (err) {
            res.status(400).send({
                error: 'Error undefined'
            })
        }
    }
}