(function () {
  'use strict';

  angular.module('MenuApp')
  .service('MenuDataService', MenuDataService)
  .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')

  MenuDataService.$inject = ['$http', 'ApiBasePath']
  // If not specified, maxItems assumed unlimited
  function MenuDataService($http, ApiBasePath) {
    var service = this;

    service.getAllCategories = function () {
      console.log("In getAllCategories");
      //obtain results from HTTP URL
      var promise = $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json"),
      });

      return promise;
    };

    service.getItemsForCategory = function (category) {
      console.log("In getItemsForCategory", category);
      //obtain results from HTTP URL
      var promise = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params:{category: category}
      });

      return promise;
    };

  }
})();
