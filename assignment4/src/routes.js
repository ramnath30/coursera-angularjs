(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/categories/templates/home.template.html'
  })

  //Categories
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/categories/templates/categories.template.html',
    controller: 'MenuDataController as menudata',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  //Items for category
  .state('items', {
    url: '/items/{category}',
    templateUrl: 'src/categories/templates/itemList.template.html',
    controller: 'ItemListController as itemList',
    resolve: {
      items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.category);
      }]
    }
  })
  //
  // .state('mainList.itemDetail', {
  //   url: '/item-detail/{itemId}',
  //   templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
  //   controller: "ItemDetailController as itemDetail"
  // });

}

})();
