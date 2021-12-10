const Joi = require('joi');
const User = require('../model/UserModel')

module.exports = {
    async register (req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email(),            
            codArea: Joi.string()
                .min(2)
                .max(2)
                .regex(
                    new RegExp('^[0-9]')
                ),
            phone: Joi.string()
                .min(8)
                .max(9)
                .regex(
                    new RegExp('^[0-9]')
                )
        })

        // schema options
        const options = {
            abortEarly: false, // include all errors
            allowUnknown: true, // ignore unknown props
            stripUnknown: true // remove unknown props
        };
        
        const {error, value} = schema.validate(req.body, options)
        
        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'Erro: Informe um email válido!'
                    });
                    break;  
                case 'codArea':
                    res.status(400).send({
                        error: 'Erro: Verifique o DDD!',
                        errorLog: error
                    });
                    break;  
                case 'phone':
                    res.status(400).send({
                        error: 'Erro: Verifique o número de telefone!'
                    });
                    break;               
                default:
                    res.status(400).send({
                        error: 'Erro: Informações Inválidas!',
                        errorLog: error
                    }); 
                    break;
            }
        } else {
            next()
        }        
    }
}
