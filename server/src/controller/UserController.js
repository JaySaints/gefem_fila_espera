const User = require('../model/UserModel')

module.exports = {
    // Function create user account => POST
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
            res.status(200).send({success: true, msg: 'Militar Registrado!', user: user});
        } catch (err) {
            res.status(400).send({
                error: 'Error undefined'
            })
        }
    },

    // Function get all user => GET
    async all_user_get (req, res, next) {
        try {
            const users = await User.findAll({
                attributes: ['id', 'post', 'name', 'session', 'codArea', 'phone', 'role']
            })
            res.send({success: true, allUsers: users})
        } catch (error) {
            res.status(500).send({success: false, error: 'Ocorreu um erro ao tentar encontrar os usuários cadastrados.'})
        }    
    },

    // Function get one user => GET
    async one_user_get (req, res, next) {
        try {
            const user = await User.findOne({
                where: { id: req.params.uid },                
                attributes: ['id', 'post', 'name', 'session', 'codArea', 'phone', 'role']
            })
            if (!user) {
                res.status(500).send({success: false, error: 'Usuário não existe.'})
            }
            res.status(200).send({success: true, user: user})
        } catch (error) {
            res.status(500).send({success: false, error: 'Usuário não encontrado.'})
        }
    },

    // Update user information => POST
    async update_user_post (req, res, next) {
        try {
            await User.update({
                name: (req.body.name).toUpperCase(),
                post: req.body.post,
                session: req.body.session,
                email: req.body.email,
                codArea: req.body.codArea,
                phone: req.body.phone,
                role: req.body.role
            }, {
                where: {
                    id: req.params.uid
                }
            })
            res.status(200).send({success: true, msg: 'Dados atualizados.'})
        } catch (error) {
            console.log(error)
            res.status(500).send({error: 'Ocorreu um erro ao tentar atualizar os dados!'})
        }
    },

    // Delete user account
    async delete_user_delete (req, res, next) {
        try {
            const user = await User.destroy({
                where: {
                    id: req.params.uid
                }
            })
            if (!user) {
                res.status(500).send({success: false, error: 'Usuário não encontrado!'})
            }
            res.status(200).send({success: true, msg: "Usuário deletado!"})
        } catch (error) {
            res.status(500).send({success: false, error: 'Usuário não encontrado.'})
        }
    }
}