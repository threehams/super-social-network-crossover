'use strict';

var ResourceService = function($http) {
  return {
    index: function() {
      return $http.get('/api/resources').then(function(response) {
        return response.data;
      });
    }
  };
};

ResourceService.$inject = ['$http'];

module.exports = ResourceService;