'use strict';

angular.module('aerogearJournalApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
      // Cleaner transitions - TODO: DRY this out of other files
        $scope.$on("$routeChangeStart", function() {
            $("#mainContent").hide();
        });
  }]);
