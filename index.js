'use strict'

var loadModules = require('./lib')
var modules = [
  'org',
  'user',
  'dashboard',
  'datasource',
  'preferences',
  'snapshot',
  'admin',
  'frontend'
]

function Client (accesskey, rootUri) {
  this.rootUri = rootUri.match(/\/$/) ? rootUri + 'api' : rootUri + '/api'
  this.clientOptions = {
    json: true,
    headers: { 'Authorization': 'Bearer ' + accesskey }
  }

  loadModules(this, modules)
}

module.exports = Client
