// 01 - strict mode
// 'use strict'
//
// const obj = {
//   firstName: 'John'
// }
//
// Object.freeze(obj)
// obj.firstName = 'Mark'
// console.log(obj.firstName)

// 02 - var let const
function test(condition) {
  if (condition) {
    var name = 'Hola'
    // const name2 = 'Chao'
  }
  console.log(name)
}
test(true)

const obj = {
  first: 'John'
}
obj.first = 'Mark' // OK
obj = {} // Not - Okay
