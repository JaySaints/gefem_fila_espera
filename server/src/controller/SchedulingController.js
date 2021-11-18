const Scheduling = require('../model/SchedulingModel')

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
            const result = await Scheduling.findAll({
                where: {
                    status: "em espera"
                }
            })
            if (result.length == 0) {
                res.status(500).send({success: false, msg: "Nem um militar na fila!!!"})
            } else {
                res.send(result)
            }
        } catch (error) {
            console.log(error)
            res.status(500).send({success: false, msg: "Nem um militar na fila!"})
        }
    }
}