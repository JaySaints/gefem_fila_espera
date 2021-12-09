const dotenv = require('dotenv')
// dot.config({path: './.env'})

// const dotenv = require('dotenv')
// const buf = Buffer.from('BASIC=basic')
// const config = dotenv.parse(buf) // will return an object
// console.log(typeof config, config) // object { BASIC : 'basic' }

const result = dotenv.config()

if (result.error) {
  throw result.error
}

console.log(result.parsed)