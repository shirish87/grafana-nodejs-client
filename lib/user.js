'use strict'

var format = require('string-format-obj')

module.exports = {
  namespace: 'user',
  defaultVersion: 1,
  specs: [
    {
      version: 1,
      methods: [
        {
          name: 'getCurrent',
          method: 'GET',
          path: function () {
            return '/user'
          }
        },
        {
          name: 'changePassword',
          method: 'PUT',
          path: function () {
            return '/user/password'
          }
          /** BODY:
          {
            "oldPassword": "old_password",
            "newPassword": "new_password",
            "confirmNew": "confirm_new_password"
          }
          */
        },
        {
          name: 'setActiveOrg',
          method: 'POST',
          path: function (orgId) {
            return format('/user/using/{orgId}', { orgId: orgId })
          }
        },
        /** BODY: <empty> */
        {
          name: 'starDashboard',
          method: 'POST',
          path: function (dashboardId) {
            return format('/user/stars/dashboard/{dashboardId}', { dashboardId: dashboardId })
          }
        },
        /** BODY: <empty> */
        {
          name: 'unstarDashboard',
          method: 'DELETE',
          path: function (dashboardId) {
            return format('/user/stars/dashboard/{dashboardId}', { dashboardId: dashboardId })
          }
        },
        {
          name: 'getAll',
          method: 'GET',
          path: function () {
            return '/users'
          }
        },
        {
          name: 'getById',
          method: 'GET',
          path: function (userId) {
            return format('/users/{userId}', { userId: userId })
          }
        },
        {
          name: 'updateUser',
          method: 'PUT',
          path: function (userId) {
            return format('/users/{userId}', { userId: userId })
          }
        },
        {
          name: 'getOrgs',
          method: 'GET',
          path: function (userId) {
            return format(userId ? '/users/{userId}/orgs' : '/user/orgs', { userId: userId })
          }
        }
      ]
    }
  ]
}
