'use strict';

/**
 * @ngdoc function
 * @name angularStarterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularStarterApp
 */
angular.module('angularStarterApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
