(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')
  .directive('foundItems', FoundItemsDirective)

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '=',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };

    return ddo;
  }

  function FoundItemsDirectiveController() {
    // var list = this;
    //
    // list.cookiesInList = function () {
    //   for (var i = 0; i < list.items.length; i++) {
    //     var name = list.items[i].name;
    //     if (name.toLowerCase().indexOf("cookie") !== -1) {
    //       return true;
    //     }
    //   }
    //
    //   return false;
    // };
  }

  NarrowItDownController.$inject = ['MenuSearchService'];

  function NarrowItDownController(MenuSearchService) {
    var narrow = this;
    narrow.searchTerm = "";

    narrow.getMatchedMenuItems = function () {
      var term  = narrow.searchTerm.toLowerCase();
      var matchedItems = [];

      var promise = MenuSearchService.getMatchedMenuItems(term);
      //filter results by term's occurrence
      promise.then(function (response) {
        var items = response.data.menu_items;
        var i;
        for(i = 0; i < items.length; i++) {
          if(items[i].description.toLowerCase().indexOf(term) >= 0) {
            matchedItems.push(items[i]);
          }
        }
        console.log("returning matchedItems: " + matchedItems.length);
        narrow.found = matchedItems;
      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
        narrow.found = [];
      });

    };

    narrow.removeItem = function (itemIndex) {
      console.log("In removeItem: ", itemIndex);
      narrow.found.splice(itemIndex, 1);
    };

  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  // If not specified, maxItems assumed unlimited
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (term) {
      //return empty array if no search term is given
      if(term.length < 1) {
        return matchedItems;
      }

      //obtain results from HTTP URL
      var promise = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      });

      return promise;

    };

  }

})();
