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
    $scope.sg = {};

    $scope.download = function () {
      var sg = $scope.sg;
      var promises = [];

      if (sg.base === true) {
        var sgBasePromise = $http.get('/styles/sg-base.less');
        promises.push(sgBasePromise);
      }
      if (sg.component) {
        if (sg.component.icons === true) {
          var sgComponentIconsPromise = $http.get('/styles/sg-component-icons.less');
          promises.push(sgComponentIconsPromise);
        }
        if (sg.component.grid === true) {
          var sgComponentGridPromise = $http.get('/styles/sg-component-grid.less');
          promises.push(sgComponentGridPromise);
        }
        if (sg.component.typography === true) {
          var sgComponentTypographyPromise = $http.get('/styles/sg-component-typography.less');
          promises.push(sgComponentTypographyPromise);
        }
      }

      $q.all(promises).then(function (response) {
        // Use map reduce to concatenate all the less files
        var lessSource = response.map(function(item) {
          return item.data;
        }).reduce(function(prev, curr) {
          return prev + curr;
        }, '');

        // Compile less to css
        less.render(lessSource, {
          compress: true
        }).then(function (output) {
          console.log(output);
          var css = output.css;
          var zip = new JSZip();
          var cssFolder = zip.folder('css');
          cssFolder.file('styleguide.css', css);
          zip.file('config.json', 'myconfig');
          var content = zip.generate({
            type: 'blob'
          });
          saveAs(content, 'styleguide.zip');
        });

      });

    };

  });