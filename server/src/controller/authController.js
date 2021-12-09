const User = require('../models/User');
const utils = require('../config/tools');

module.exports = {
    async register (req, res, next) {
        try {
            const saltHash = utils.genPassword(req.body.password);
            const salt = saltHash.salt;
            const hash = saltHash.hash;

            const user = await User.create({
                email: req.body.email,
                hash: hash,
                salt: salt
            });
            res.send(user.toJSON());
        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
    },
    async login (req, res, next) {
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                }          
            }).then(user => {
                if(!user) {
                    res.status(403).send({
                        error: 'The email information was incorrect!'
                    })
                }
                // check the password match with the hash
                const isValidPassword = utils.validPassword(req.body.password, user.hash, user.salt);
                if(!isValidPassword) {
                    res.status(403).send({
                        error: 'The login information was incorrect!'
                    })
                }
                const userJson = user.toJSON();
                // generate signature Json Web Token
                const signatureJWT = utils.issueJWT(userJson);
                res.send({
                    success: true,
                    msg: 'You are logged now!',
                    user: userJson,
                    token: signatureJWT
                });            
            });      
        } catch (err) {
            res.status(403).send({
                error: 'Invalid login information!'
            })
        }
    },
    protectedPage (req, res, next) {
        res.send({success: true, msg: 'Hi! You are authenticated', user: req.jwt});
    }
}
