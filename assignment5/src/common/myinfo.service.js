(function () {
  "use strict";

  angular.module('common')
  .service('MyInfoService', MyInfoService);

  MyInfoService.$inject = ['$http', 'ApiBasePath'];

  function MyInfoService($http, ApiBasePath) {
    var service = this;

    var info = {firstName: '', lastName: '', email: '', phone: '',
    favoriteItem: ''};

    var favoriteData;

    service.getInfo = function () {
      return info;
    };

    service.saveInfo = function (info1) {
      info = info1;
    };

    service.getMenuItem = function (shortName) {
      var url = ApiBasePath + '/menu_items/' + shortName + '.json';
      console.log("URL: ",  url);
      return $http.get(url).then(function(response) {
        console.log("Favorite object", response.data);
        favoriteData = response.data;
      });
    };

    service.getFavoriteData = function () {
      return favoriteData;
    };

    service.getApiBasePath = function() {
      return ApiBasePath;
    };

  }
})();
