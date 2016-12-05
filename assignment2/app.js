(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  this.items = ShoppingListCheckOffService.toBuyItems;
  this.buy = function(index) {
    ShoppingListCheckOffService.buy(index);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  this.items = ShoppingListCheckOffService.alreadyBoughtItems;
}

function ShoppingListCheckOffService() {
  this.toBuyItems = [
    {name: "Apples", quantity: "5"},
    {name: "Bananas", quantity: "3"},
    {name: "Carrots", quantity: "10"},
    {name: "Daikons", quantity: "3"},
    {name: "Endives", quantity: "10"}
  ];

  this.alreadyBoughtItems = [];

  this.buy = function(index) {
    this.alreadyBoughtItems.push(this.toBuyItems[index]);
    this.toBuyItems.splice(index, 1);
  }

}
})();
