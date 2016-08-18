'use strict'

var needle = require('needle')

function findSpec (mod, version) {
  for (var i = 0; i < mod.specs.length; i++) {
    if (mod.specs[i].version === version) {
      return mod.specs[i]
    }
  }
}

function loadModule (mod, context) {
  var defaultVersion = mod.defaultVersion || 1
  var spec = findSpec(mod, defaultVersion)
  if (!spec) {
    return
  }

  context[mod.namespace] = spec.methods.reduce(function (m, method) {
    m[method.name] = function () {
      var args = Array.prototype.slice.call(arguments)
      var rootUri = this.rootUri
      var clientOptions = this.clientOptions

      return new Promise(function (resolve, reject) {
        var data = (args.length && typeof args[args.length - 1] === 'object') ? args.pop() : null

        needle.request(method.method, rootUri + method.path(args), data, clientOptions, function (err, res) {
          if (err) {
            return reject(err)
          }

          resolve(res.body)
        })
      })
    }.bind(context)

    return m
  }, {})
}

module.exports = function loadModules (context, modules) {
  modules.forEach(function (m) {
    var mod = require('./' + m)
    if (mod.namespace) {
      loadModule(mod, context)
    }
  })
}
