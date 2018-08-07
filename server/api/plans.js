const router = require('express').Router()
const {Plan, User} = require('../db/models')
module.exports = router


// GET - all Plans

router.get('/', (req, res, next) => {
  return Plan.findAll()
    .then( plans => res.json(plans).status(200))
    .catch(next)
})

// GET - single Plan

router.get('/:id', (req, res, next) => {
  return Plan.findOne({where: {id: req.params.id}, include: [{model: User}]})
    .then( plan => res.json(plan).status(200))
    .catch(next)
})

router.post('/', (req, res, next) => {
  return Plan.create(req.body)
    .then( plan => res.status(201).json(plan))
    .catch(next)
})


router.put('/:id', (req, res, next) => {
  return Plan.update(req.body, {where: {id: req.params.id}, returning: true})
    .then( ([_, updated]) => res.status(201).json(updated[0]))
    .next(next)
})

// Need to consider if I would need routers for completedAt, currentHours columns.

router.delete('/:id', (req, res, next) => {
  Plan.destroy({where: {id: req.params.id}})
    .then( () => res.sendStatus(204))
    .catch(next)
})
