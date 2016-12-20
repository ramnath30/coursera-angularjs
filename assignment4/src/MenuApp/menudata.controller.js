(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuDataController', MenuDataController);


MenuDataController.$inject = ['MenuDataService', 'categories'];
function MenuDataController(MenuDataService, categories) {
  var menudata = this;
  menudata.categories = categories.data;
}

})();
