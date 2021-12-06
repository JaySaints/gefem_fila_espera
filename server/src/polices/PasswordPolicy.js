const Joi = require('joi');

module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}')
            )
        });

        // schema options
         const options = {
            abortEarly: false, // include all errors
            allowUnknown: true, // ignore unknown props
            stripUnknown: true // remove unknown props
        };

        const {error, value} = schema.validate(req.body);

        if (error) {
            switch (error.details[0].context.key) {          
                case 'password':
                    res.status(400).send({
                        error: `A senha fornecida não correspondeu ao seguintes critérios:
                        <br>
                        1. Deve conter APENAS os seguintes caracteres: minúsculas, maiúsculas, numéricos;
                        <br>
                        2. Deve ter pelo menos 8 caracteres de comprimento e não mais que 32 caracteres; 
                        `
                    });
                    break;            
                default:
                    res.status(400).send({
                        error: 'Informações Inválidas!'
                    }); 
                    break;
            }
        } else {
            next();    
        }        
    }
}
