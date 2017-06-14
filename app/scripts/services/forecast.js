'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.forecast
 * @description
 * # forecast
 * Factory in the weatherAppApp.
 */
angular.module('weatherAppApp')
  .factory('forecast', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=5&units=imperial&APPID=db25f1e3d1f9738a705b6a1f7ac9e6a2', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '4717560' // Paris, France ID
        },
        isArray:false
      }
    });
  });
