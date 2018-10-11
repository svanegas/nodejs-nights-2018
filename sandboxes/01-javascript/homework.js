'use strict';

const PERSON_URL = 'http://swapi.co/api/people/1'
const PERSON_REQUEST = {
  uri: PERSON_URL,
  json: true
}

// --- Callback style ---

// var request = require('request')
//
// request(PERSON_REQUEST, (error, response, person) => {
//   person.vehicles.map(url => {
//     request({ uri: url, json: true }, (vehErr, vehResponse, vehicle) => {
//       console.log(vehicle.name)
//     })
//   })
// })


// --- Promise style ---

// var requestPromise = require('request-promise')
//
// requestPromise(PERSON_REQUEST)
//   .then(person => {
//     return Promise.all(person.vehicles.map(url => requestPromise({ uri: url, json: true })))
//   })
//   .then(vehicles => vehicles.map(vehicle => console.log(vehicle.name)))
//   .catch(err => console.error(err, 'Something bad happened'))

// --- Async wait style ---

var requestPromise = require('request-promise')

async function run() {
  const person = await requestPromise(PERSON_REQUEST)
  const vehiclesUrls = person.vehicles
  const vehicles = await Promise.all(vehiclesUrls.map(url => {
    return requestPromise({ uri: url, json: true })
  }))
  vehicles.map(vehicle => console.log(vehicle.name))
}

run()
  .catch(err => console.error(err, 'Something bad happened'))
