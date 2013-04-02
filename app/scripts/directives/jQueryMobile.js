'use strict';

angular.module('aerogearJournalApp')
    .directive('jqueryMobile', function () {
        return function( $scope, el ) {
            $scope.$on( "$optimisticRenderComplete", function() {
                el.trigger("create");
                $("#mainContent").fadeIn();
            });
        };
    });
