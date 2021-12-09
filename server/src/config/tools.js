const crypto = require('crypto');
const jsonwebtoken = require('jsonwebtoken');
const config = require('./Settings');

function validPassword(password, hash, salt) {
    var hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === hashVerify;
}

function genPassword(password) {
    var salt = crypto.randomBytes(32).toString('hex');
    var genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    
    return {
      salt: salt,
      hash: genHash
    };
}

function issueJWT(user) {

    const expiresIn = 60 * 60 * 24 * 7; // ONE WEEK

    const payload = {
        sub: user.id,
        email: user.email,
        role: user.role,
        iat: Date.now()
    };

    const signedToken = jsonwebtoken.sign(payload, config.authentication.PRIV_KEY, { expiresIn: expiresIn, algorithm: 'RS256' });

    return {
        token: "Bearer " + signedToken,
        expires: expiresIn
    }
}

function authMiddleware(req, res, next){
// Validates if there is a token in the header request
    try {
        const tokenParts = req.headers.authorization.split(' ');

        // tokenParts[1].match(/\S+\.\S+\.\S+/) --> this method check if the tokem is has parts between the points
        if (tokenParts[0] === 'Bearer' && tokenParts[1].match(/\S+\.\S+\.\S+/) !== null) {
            try {
                const verification = jsonwebtoken.verify(tokenParts[1], config.authentication.PUB_KEY, { algorithms: ['RS256'] });
                // console.log('verification ', verification);
                next();      
            } catch (err) {
                res.status(401).json({success: false, error: "You are not authorized to visit this route!"});
            }    
        } else{
            res.status(401).json({success: false, error: "You are not authorized to visit this route!"});
        }
    } catch (err) {
        res.send({success: false, error: 'Error, invalid token!'})
    }
}

function isAuthAdmin(req, res, next) {
    // Validates if there is a token in the header request
    try {
        const tokenParts = req.headers.authorization.split(' ');

        // tokenParts[1].match(/\S+\.\S+\.\S+/) --> this method check if the tokem is has parts between the points
        if (tokenParts[0] === 'Bearer' && tokenParts[1].match(/\S+\.\S+\.\S+/) !== null) {
            try {
                const verification = jsonwebtoken.verify(tokenParts[1], config.authentication.PUB_KEY, { algorithms: ['RS256'] });

                if (verification.role === 2) {
                    next();                          
                } else {
                    res.status(401).json({success: false, error: "Você não está autorizado a visitar esta página!"}); 
                }

            } catch (err) {
                res.status(401).json({success: false, error: "You are not authorized to visit this route!"});
            }    
        } else{
            res.status(401).json({success: false, error: "You are not authorized to visit this route!"});
        }
    } catch (err) {
        res.send({success: false, error: 'Error, invalid token!'})
    }
}

  module.exports.validPassword = validPassword;
  module.exports.genPassword = genPassword;
  module.exports.issueJWT = issueJWT;
  module.exports.authMiddleware = authMiddleware;
  module.exports.isAuthAdmin = isAuthAdmin;
    