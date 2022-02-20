'use strict'

const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || '' // page title

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'/code-name/',
  outputDir:'docs',
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
})
