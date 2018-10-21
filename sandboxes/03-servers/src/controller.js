'use strict'

var dogs = require('./dogs')
const { validate } = require('./utils/validator')
const log = require('./logger')

function validateParams(body, schema) {
  return validate(body, schema)
}

function findDog(id) {
  return dogs.find(dog => dog.id === Number(id))
}

function updateDog(id, params) {

}

function deleteDog(id) {
  log.info(typeof(dogs))
  const result = []
  // TODO: How to fkin do this
  // for (dog in dogs) {
  //   if (dog.id !== Number(id)) {
  //     result.push(dog)
  //   }
  // }
  // dogs = result
}

module.exports = {
  validate: validateParams,
  dogs: dogs,
  findDog: findDog,
  updateDog: updateDog,
  deleteDog: deleteDog,
}
