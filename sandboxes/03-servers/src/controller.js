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

function findDogIndex(id) {
  return dogs.findIndex(dog => dog.id === Number(id))
}

function updateDog(id, params) {
  const dog = findDog(id)
  if (!dog) return dog

  for (let key in params) {
    if (!dog.hasOwnProperty(key) || key == 'id') continue

    dog[key] = params[key]
  }
  return dog
}

function deleteDog(id) {
  const dogIndex = findDogIndex(id)
  if (dogIndex === -1) return false

  dogs = dogs.splice(dogIndex, 1)

  return true
}

module.exports = {
  validate: validateParams,
  dogs: dogs,
  findDog: findDog,
  updateDog: updateDog,
  deleteDog: deleteDog,
}
