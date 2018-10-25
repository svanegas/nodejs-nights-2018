'use strict'

const Router = require('koa-router')
const controller = require('./controller')
const schemas = require('./schemas')
const log = require('./logger')

const router = new Router()

router.get('/', ctx => {
  ctx.body = 'Hello world from Router'
})

router.get('/dogs', ctx => {
  ctx.body = controller.dogs
})

router.get('/dogs/:id', ctx => {
  const dog = controller.findDog(ctx.params.id)
  if (!dog) {
    ctx.status = 404
    log.warn('No dog found')
    return
  }

  ctx.body = dog
})

router.post('/dogs', ctx => {
  const schema = schemas.postSchema
  const validation = controller.validate(ctx.request.body, schema)
  if (!validation.valid) {
    ctx.status = 400
    ctx.body = {
      errors: validation.errors,
    }
    return
  }

  controller.dogs.push(ctx.request.body)

  ctx.body = controller.dogs
})

router.put('/dogs/:id', ctx => {
  const schema = schemas.putSchema
  const validation = controller.validate(ctx.request.body, schema)
  if (!validation.valid) {
    ctx.status = 400
    ctx.body = {
      errors: validation.errors,
    }
    return
  }

  const dog = controller.updateDog(ctx.params.id, ctx.request.body)
  if (!dog) {
    ctx.status = 404
    log.warn('No dog found')
    return
  }

  ctx.body = dog
})

router.patch('/dogs/:id', ctx => {
  const schema = schemas.patchSchema
  const validation = controller.validate(ctx.request.body, schema)
  if (!validation.valid) {
    ctx.status = 400
    ctx.body = {
      errors: validation.errors,
    }
    return
  }

  const dog = controller.updateDog(ctx.params.id, ctx.request.body)
  if (!dog) {
    ctx.status = 404
    log.warn('No dog found')
    return
  }

  ctx.body = dog
})

router.delete('/dogs/:id', ctx => {
  const dog = controller.deleteDog(ctx.params.id)
  if (!dog) {
    ctx.status = 404
    log.warn('No dog found')
    return
  }

  ctx.status = 204
})

module.exports = router.routes()
