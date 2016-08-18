'use strict'

module.exports = {
  namespace: 'preferences',
  defaultVersion: 1,
  specs: [
    {
      version: 1,
      methods: [
        {
          name: 'getUserPrefs',
          method: 'GET',
          path: function () {
            return '/user/preferences'
          }
        },
        {
          name: 'setUserPrefs',
          method: 'PUT',
          path: function () {
            return '/user/preferences'
          }
          /** BODY:
          {
            "theme": "",
            "homeDashboardId":0,
            "timezone":"utc"
          }
          */
        },
        {
          name: 'getOrgPrefs',
          method: 'GET',
          path: function () {
            return '/org/preferences'
          }
        },
        {
          name: 'setOrgPrefs',
          method: 'PUT',
          path: function () {
            return '/org/preferences'
          }
          /** BODY:
          {
            "theme": "",
            "homeDashboardId":0,
            "timezone":"utc"
          }
          */
        }
      ]
    }
  ]
}
