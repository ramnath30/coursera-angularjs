(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/MenuApp/templates/categories.template.html',
  bindings: {
    categories: '<'
  },
  controller: 'MenuDataController as menudata'
});

})();
