'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.citysearch
 * @description
 * # citysearch
 * Factory in the weatherAppApp.
 */
angular.module('weatherAppApp')
  .factory('citysearch', function ($resource) {
    // Service logic
    // ...


    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=db25f1e3d1f9738a705b6a1f7ac9e6a2', {}, {
      find: {
        method: 'GET',
        params: {
          query: 'seattle'
        },
        isArray: false
      }
    });
  });
