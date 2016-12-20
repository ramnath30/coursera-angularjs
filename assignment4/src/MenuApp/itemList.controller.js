(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemListController', ItemListController);

ItemListController.$inject = ['MenuDataService', 'items'];
function ItemListController(MenuDataService, items) {
  var itemList = this;
  console.log(items);
  itemList.items = items.data.menu_items;
}

})();
