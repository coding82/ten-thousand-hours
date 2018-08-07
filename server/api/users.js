const router = require('express').Router()
const {User, Plan} = require('../db/models')
const Sequelize = require('sequelize')
module.exports = router


// GET - all users

router.get('/', (req, res, next) => {
  return User.findAll()
    .then( users => res.json(users).status(200))
    .catch(next)
})

// GET - single user

router.get('/:id', (req, res, next) => {
  return User.findOne({where: {id: req.params.id}, include: [{model: Plan}]})
    .then( user => res.json(user).status(200))
    .catch(next)
})

router.post('/', (req, res, next) => {
  return User.create(req.body)
    .then( user => res.status(201).json(user))
    .catch(next)
})

