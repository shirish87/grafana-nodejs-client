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
          name: 'getBySlug',
          method: 'GET',
          path: function (slug) {
            return format('/dashboards/db/{slug}', { slug: slug })
          }
        },
        {
          name: 'del',
          method: 'DELETE',
          path: function (slug) {
            return format('/dashboards/db/{slug}', { slug: slug })
          }
        },
        {
          name: 'getHome',
          method: 'GET',
          path: function () {
            return '/dashboards/home'
          }
        },
        {
          name: 'getTags',
          method: 'GET',
          path: function () {
            return '/dashboards/tags'
          }
        },
        {
          name: 'search',
          method: 'GET',
          path: function () {
            return '/search'
          }
          /** QUERY STRING:
          query – Search Query
          tags – Tags to use
          starred – Flag indicating if only starred Dashboards should be returned
          tagcloud - Flag indicating if a tagcloud should be returned
          */
        },
        {
          name: 'createOrUpdate',
          method: 'POST',
          path: function () {
            return '/dashboards/db'
          }
        }
        /** BODY:
        {
          "dashboard": {
            "id": null,           // id = null to create a new dashboard
            "title": "Production Overview",
            "tags": [ "templated" ],
            "timezone": "browser",
            "rows": [
              {
              }
            ],
            "schemaVersion": 6,
            "version": 0
          },
          "overwrite": false      // Set to true if you want to overwrite existing dashboard with newer version or with same dashboard title
        }
        */
      ]
    }
  ]
}
