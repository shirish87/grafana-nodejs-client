'use strict'

var format = require('string-format-obj')

module.exports = {
  namespace: 'snapshot',
  defaultVersion: 1,
  specs: [
    {
      version: 1,
      methods: [
        {
          name: 'getById',
          method: 'GET',
          path: function (snapshotId) {
            return format('/snapshots/{snapshotId}', { snapshotId: snapshotId })
          }
        },
        {
          name: 'del',
          method: 'DELETE',
          path: function (snapshotId) {
            return format('/snapshots/{snapshotId}', { snapshotId: snapshotId })
          }
        },
        {
          name: 'create',
          method: 'POST',
          path: function () {
            return '/snapshots'
          }
          /** BODY:
          {
            "dashboard": {
              "editable":false,
              "hideControls":true,
              "nav":[
              {
                "enable":false,
              "type":"timepicker"
              }
              ],
              "rows": [
                {

                }
              ],
              "style":"dark",
              "tags":[],
              "templating":{
                "list":[
                ]
              },
              "time":{
              },
              "timezone":"browser",
              "title":"Home",
              "version":5
              },
            "expires": 3600
          }
          */
        }
      ]
    }
  ]
}
