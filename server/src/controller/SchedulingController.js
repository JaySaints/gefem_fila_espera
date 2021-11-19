const Scheduling = require('../model/SchedulingModel')
const User = require('../model/UserModel')
const Bot = require('../telegram/bot').Bot

module.exports = {
    async enter_on_queue_post (req, res, next) {
        try {
            const result = await Scheduling.create({
                dateScheduling: req.body.dateScheduling,
                subject: req.body.subject,
                userId: req.body.userId,
                status: req.body.status
            })
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    },
    async list_queue_get (req, res, next) {
        try {
            Scheduling.belongsTo(User)
            const result = await Scheduling.findAll({
                attributes: ['id', 'userId', 'subject'],
                where: {
                    status: "em espera"
                },
                include: {
                    model: User,
                    as: 'User',
                    attributes: ['id', 'post', 'name', 'session', 'codArea', 'phone', 'role', 'email']
                }
            })
            if (result.length == 0) {
                res.status(500).send({success: false, msg: "Nem um militar na fila!!!"})
            } else {
                res.send({users: result})
            }
        } catch (error) {
            console.log(error)
            res.status(500).send({success: false, msg: "Nem um militar na fila!"})
        }
    },
    async update_status_queue_post (req, res, next) {
        try {
            
            const result = await Scheduling.update({
                status: req.body.status
            },{
                where: {
                    id: req.body.id
                }
            })

            if(req.body.status == "Em atendimento") {
                await Bot.sendMessage('888971468', `Iniciou atendimento`);  
                console.log('hello ----------------------------------------->');
            }
            res.status(200).send({success: true, msg: 'Elemento Atualizado!!!', return: result})
        } catch (error) {
            console.log(error)
            res.status(501).send({success: false, error: 'Erro ao atualizar!'})
        }
    },
    async in_attendance_get (req, res, next) {
        try {
            Scheduling.belongsTo(User)
            const result = await Scheduling.findAll({
                attributes: ['id', 'userId', 'subject', 'status'],
                where: {
                    status: "Em atendimento"
                },
                include: {
                    model: User,
                    attributes: ['id', 'post', 'name', 'session', 'codArea', 'phone', 'role', 'email']
                },
                limit: 1
            })
            if (result.length == 0) {
                res.send({success: false, msg: "Nem um militar na fila!!!", users: {User: {name: 'vazia!', post: 'Sala'}}})
            } else {
                res.send({users: result[0]})
            }
        } catch (error) {
            console.log(error)
            res.status(500).send({success: false, msg: "Nem um militar na fila!"})
        }
    }
}