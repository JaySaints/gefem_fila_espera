const User = require('../model/UserModel')
const tools = require('../config/tools')
const searchUser = require('./SearchUsersController')

module.exports = {
    // Function create user account => POST
    async create_user_post (req, res, next) {
        try {
            const saltHash = tools.genPassword(req.body.password);
            const salt = saltHash.salt;
            const hash = saltHash.hash;

            const user = await User.create({
                post: req.body.post,
                name: (req.body.name).toUpperCase(),
                session: req.body.session,
                email: req.body.email,
                codArea: req.body.codArea,
                phone: req.body.phone,
                role: req.body.role,
                hash: hash,
                salt: salt
            })
            res.status(200).send({success: true, msg: 'Militar Registrado!', user: user});
        } catch (err) {
            res.status(400).send({
                error: 'Error undefined'
            })
        }
    },
    // Function Login user account
    async login_user_post (req, res, next) {
        try {
            const {email, password} = req.body
            await User.findOne({
                where: {
                    email: (email).toLowerCase()
                }
            }).then(user => {
                if(!user) {
                    res.status(403).send({ error: 'As Informações de login estão incorretas!' })
                }

                // Verify password match with hash password!
                const isValidPassword = tools.validPassword(password, user.hash, user.salt);                
                if(!isValidPassword) {
                    res.status(403).send({
                        error: 'As Informações de login estão incorretas!'
                    })
                }
                
                // Result match User
                const userJson = user.toJSON();
                
                // // generate signature Json Web Token
                const signatureJWT = tools.issueJWT(userJson);
                                
                // Send Info User and Signature for client request
                res.send({
                        msg: 'Success Login!',
                        success: true,
                        user: userJson,
                        token: signatureJWT
                    });  
            }); 

        } catch (err) {
            res.status(403).send({
                error: 'An error has occured trying to log in!!'
            })
        }
    },
    // Function get all user => GET
    async all_user_get (req, res, next) {
        try {
            const search = req.query.search
            if (search) {
                const users = await searchUser.search(search)
                res.send({success: true, users: users})
            } else {
                const users = await User.findAll()
                res.send({success: true, users: users})
            }
    
        } catch (error) {
            res.status(500).send({success: false, error: 'Ocorreu um erro ao tentar encontrar os usuários cadastrados.'})
            console.log(error)
        }    
    },

    // Function get one user => GET
    async one_user_get (req, res, next) {
        try {
            const user = await User.findOne({
                where: { id: req.params.uid },                
                attributes: ['id', 'post', 'name', 'session', 'codArea', 'phone', 'role', 'email']
            })
            if (!user) {
                res.status(500).send({success: false, error: 'Usuário não existe.'})
            }
            res.status(200).send({success: true, user: user})
        } catch (error) {
            res.status(500).send({success: false, error: 'Usuário não encontrado.'})
        }
    },

    async one_user_post (req, res, next) {
        try {
            const user = await User.findOne({
                where: { id: req.body.uid },                
                attributes: ['id', 'post', 'name', 'session', 'codArea', 'phone', 'role', 'email']
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

    // Update profile information => POST
    async update_profile_post (req, res, next) {
        try {
            await User.update({
                name: (req.body.name).toUpperCase(),
                post: req.body.post,
                session: req.body.session,
                email: req.body.email,
                codArea: req.body.codArea.toString(),
                phone: req.body.phone.toString(),
            }, {
                where: {
                    id: req.params.uid
                }
            })

            if (req.body.password) {
                const saltHash = tools.genPassword(req.body.password);
                const salt = saltHash.salt;
                const hash = saltHash.hash;

                await User.update({
                    hash: hash,
                    salt: salt
                }, {
                    where: {
                        id: req.params.uid
                    }
                })
            }
            res.status(200).send({success: true, msg: 'Dados atualizados.'})
        } catch (error) {
            console.log(error)
            res.status(500).send({error: 'Ocorreu um erro ao tentar atualizar os dados!'})
        }
    },

    async reset_password_get (req, res, next) {

     try {
        const user = await User.findOne({
            where: { id: req.params.uid }
        })
        const saltHash = tools.genPassword((user.phone.toString()));
        const salt = saltHash.salt;
        const hash = saltHash.hash;

        await User.update({
            hash: hash,
            salt: salt
        }, {
            where: {
                id: req.params.uid
            }
        })   

        res.send({success: true, msg: 'Senha redefinida!'})
     } catch (error) {
        console.log(error)
        res.send({success: false, msg: 'Erro ao redefinir a senha!'})
     }
    },

    // Delete user account
    async delete_user_get (req, res, next) {
        try {
            const user = await User.destroy({
                where: {
                    id: req.params.uid
                }
            })
            console.log(user)
            if (!user) {
                res.status(500).send({success: false, error: 'Usuário não encontrado!'})
            }
            res.status(200).send({success: true, msg: "Usuário deletado!"})
        } catch (error) {
            res.status(500).send({success: false, error: 'Usuário não encontrado.'})
        }
    }
}