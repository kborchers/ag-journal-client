'use strict';

angular.module('aerogearJournalApp')
    .controller('AddNoteCtrl', function( $scope, $location, $routeParams, dataService ) {
        if ( $routeParams.noteId ) {
            $scope.note = dataService.noteStore.read( $routeParams.noteId * 1 )[0];
        }

        $scope.save = function() {
            dataService.notePipe.save( $scope.note );
        };

        $scope.cancel = function() {
            $location.path("notes");
        };

        // Cleaner transitions - TODO: DRY this out of other files
        $scope.$on("$routeChangeStart", function() {
            $("#mainContent").hide();
        });
    });
