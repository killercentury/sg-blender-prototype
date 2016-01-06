'use strict';

/**
 * @ngdoc function
 * @name angularStarterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularStarterApp
 */
angular.module('angularStarterApp')
  .controller('MainCtrl', function ($scope, $http, $q) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.download = function () {
      var promise1 = $http.get('/bower_components/foundation/css/foundation.css');
      var promise2 = $http.get('/bower_components/bootstrap/dist/css/bootstrap.css');

      $q.all([promise1, promise2]).then(function (response) {
        var css = response[0].data + response[1].data;

        var zip = new JSZip();
        var cssFolder = zip.folder('css');
        cssFolder.file('styleguide.css', css);
        zip.file('config.json', 'myconfig');
        var content = zip.generate({
          type: 'blob'
        });
        saveAs(content, "styleguide.zip");
      });
    };

  });