'use strict'

const Router = require('koa-router')
const { handleErrors, handleNotFound } = require('../middleware/errors')
const { authenticate } = require('../middleware/authentication')
const dogs = require('../controllers/dogs')
const users = require('../controllers/users')

const router = new Router()
router.use(handleErrors)

/* PUBLIC ROUTES */

router.post('/session/user', users.login)
router.post('/users', users.signUp)

/* PRIVATE ROUTES */

router.get('/dogs', authenticate, dogs.getAll)
router.get('/dogs/:id', authenticate, dogs.getById)
router.post('/dogs', authenticate, dogs.addDog)

router.use(handleNotFound)

module.exports = router.routes()