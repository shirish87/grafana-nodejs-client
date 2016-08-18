'use strict'

var format = require('string-format-obj')

module.exports = {
  namespace: 'admin',
  defaultVersion: 1,
  specs: [
    {
      version: 1,
      methods: [
        {
          name: 'createUser',
          method: 'POST',
          path: function () {
            return '/admin/users'
          }
          /** BODY:
          {
            "name":"User",
            "email":"user@graf.com",
            "login":"user",
            "password":"userpassword"
          }
          */
        },
        {
          name: 'deleteUser',
          method: 'DELETE',
          path: function (userId) {
            return format('/admin/users/{userId}', { userId: userId })
          }
        },
        {
          name: 'setPermissions',
          method: 'PUT',
          path: function (userId) {
            return format('/admin/users/{userId}/permissions', { userId: userId })
          }
        },
        {
          name: 'changePassword',
          method: 'POST',
          path: function (userId) {
            return format('/admin/users/{userId}/password', { userId: userId })
          }
          /** BODY:
          {
            "password":"newPassword"
          }
          */
        },
        {
          name: 'getStats',
          method: 'GET',
          path: function () {
            return '/admin/stats'
          }
        },
        {
          name: 'getSettings',
          method: 'GET',
          path: function () {
            return '/admin/settings'
          }
        }
      ]
    }
  ]
}
