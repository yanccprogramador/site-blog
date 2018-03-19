'use strict'

const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  ACCESS_TOKEN: process.env.ACCESS_TOKEN
})
