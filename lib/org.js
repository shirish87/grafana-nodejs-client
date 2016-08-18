'use strict'

var format = require('string-format-obj')

module.exports = {
  namespace: 'org',
  defaultVersion: 1,
  specs: [
    {
      version: 1,
      methods: [
        {
          name: 'getCurrent',
          method: 'GET',
          path: function () {
            return '/org'
          }
        },
        {
          name: 'getById',
          method: 'GET',
          path: function (orgId) {
            return format('/orgs/{orgId}', { orgId: orgId })
          }
        },
        {
          name: 'getByName',
          method: 'GET',
          path: function (orgId) {
            return format('/orgs/name/{orgName}', { orgId: orgId })
          }
        },
        {
          name: 'update',
          method: 'PUT',
          path: function (orgId) {
            return orgId ? format('/orgs/{orgId}', { orgId: orgId }) : '/org'
          }
          /** BODY:
          {
            "name":"Main Org."
          }
          */
        },
        {
          name: 'getUsers',
          method: 'GET',
          path: function (orgId) {
            return orgId ? format('/orgs/{orgId}/users', { orgId: orgId }) : '/org/users'
          }
        },
        {
          name: 'addUser',
          method: 'POST',
          path: function (orgId) {
            return orgId ? format('/orgs/{orgId}/users', { orgId: orgId }) : '/org/users'
          }
          /** BODY:
          {
            "role": "Admin",
            "loginOrEmail": "admin"
          }
          */
        },
        {
          name: 'updateUser',
          method: 'PATCH',
          path: function (userId, orgId) {
            return format(orgId ? '/orgs/{orgId}/users/{userId}' : 'api/org/users/{userId}', { orgId: orgId, userId: userId })
          }
          /** BODY:
          {
            "role": "Viewer",
          }
          */
        },
        {
          name: 'deleteUser',
          method: 'DELETE',
          path: function (userId, orgId) {
            return format(orgId ? '/orgs/{orgId}/users/{userId}' : 'api/org/users/{userId}', { orgId: orgId, userId: userId })
          }
        },
        {
          name: 'getAll',
          method: 'GET',
          path: '/orgs'
        }
      ]
    }
  ]
}
