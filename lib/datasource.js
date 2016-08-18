'use strict'

var format = require('string-format-obj')

module.exports = {
  namespace: 'datasource',
  defaultVersion: 1,
  specs: [
    {
      version: 1,
      methods: [
        {
          name: 'getAll',
          method: 'GET',
          path: function () {
            return '/datasources'
          }
        },
        {
          name: 'getById',
          method: 'GET',
          path: function (datasourceId) {
            return format('/datasources/{datasourceId}', { datasourceId: datasourceId })
          }
        },
        {
          name: 'getByName',
          method: 'GET',
          path: function (datasourceName) {
            return format('/datasources/name/{datasourceName}', { datasourceName: datasourceName })
          }
        },
        {
          name: 'getIdByName',
          method: 'GET',
          path: function (datasourceName) {
            return format('/datasources/id/{datasourceName}', { datasourceName: datasourceName })
          }
        },
        {
          name: 'create',
          method: 'POST',
          path: function () {
            return '/datasources'
          }
        },
        {
          name: 'update',
          method: 'PUT',
          path: function (datasourceId) {
            return format('/datasources/{datasourceId}', { datasourceId: datasourceId })
          }
        },
        {
          name: 'del',
          method: 'DELETE',
          path: function (datasourceId) {
            return format('/datasources/{datasourceId}', { datasourceId: datasourceId })
          }
        }
      ]
    }
  ]
}
