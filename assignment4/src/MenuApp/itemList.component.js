(function () {
'use strict';

angular.module('MenuApp')
.component('itemList', {
  templateUrl: 'src/MenuApp/templates/itemList.template.html',
  bindings: {
    items: '<'
  },
  controller: 'ItemListController as itemList'
});

})();
