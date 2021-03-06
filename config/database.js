const path = require('path')
const dotEnvPath = path.resolve('.env')

/**
 * since mocha don't see enviroment variables we have to use dotenv
 */
require('dotenv').config({ path: dotEnvPath })

module.exports = {
  development: {
    'url': process.env.DATABASE_URL,
    'dialect': 'postgres'
  },
  production: {
    'url': process.env.DATABASE_URL_PRODUCTION,
    'dialect': 'postgres',
    'ssl': true,
    'dialectOptions': {
      'ssl': {
        'require': true
      }
    }
  }
}
