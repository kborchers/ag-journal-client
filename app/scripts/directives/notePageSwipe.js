'use strict';

angular.module('aerogearJournalApp')
    .directive('notePageSwipe', function () {
        return function($scope, el) {
            el.on("swipeleft", function() {
                $scope.$apply(function(){
                    $scope.next();
                });
            });

            el.on("swiperight", function() {
                $scope.$apply(function(){
                    $scope.previous();
                });
            });
        };
    });
