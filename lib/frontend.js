'use strict'

module.exports = {
  namespace: 'frontend',
  defaultVersion: 1,
  specs: [
    {
      version: 1,
      methods: [
        {
          name: 'getSettings',
          method: 'GET',
          path: function () {
            return '/frontend/settings'
          }
        },
        {
          name: 'renewSession',
          method: 'GET',
          path: function () {
            return '/login/ping'
          }
        }
      ]
    }
  ]
}
