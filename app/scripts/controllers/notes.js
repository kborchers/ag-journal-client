'use strict';

angular.module('aerogearJournalApp')
    .controller('NotesCtrl', function( $scope, $filter, $location, $routeParams, dataService ) {
        $scope.filter = $filter;
        $scope.search = {};
        $scope.currentPage = parseInt( $routeParams.pageNum, 10 ) || 0;
        $scope.pageSize = 6;
        $scope.gridClass = "";
        $scope.pageRange = [];
        $scope.numberOfPages = 0;
        $scope.getNumberOfPages = function( dataLength ) {
            var result = Math.ceil(dataLength/$scope.pageSize);
            return result === 0 ? 1 : result;
        };
        var notePipe = dataService.notePipe;
        var noteStore = dataService.noteStore;

        $scope.performSearch = function() {
            $scope.showLoader = true;
            notePipe.read({
                offsetValue: $scope.currentPage * $scope.pageSize,
                limitValue: $scope.pageSize,
                success: function( data ) {
                    noteStore.save( data, true );
                    $scope.searchResults = data;
                    processLayout();
                    $scope.$apply(function() {
                        $scope.$emit("$viewContentLoaded");
                    });
                    notePipe.read({
                        paging: false,
                        success: function( data ) {
                            $scope.numberOfPages = $scope.getNumberOfPages( data.length );
                            $scope.pageRange = [];
                            for( var i=0; i < $scope.numberOfPages; i++) {
                                $scope.pageRange.push( i );
                            }
                            $scope.showLoader = false;
                            $scope.$apply();
                        }
                    });
                }
            });
        };

        $scope.previous = function() {
            if ( $scope.currentPage > 0 ) {
                $location.path("notes/" + ($scope.currentPage - 1));
            }
        };

        $scope.next = function() {
            if( $scope.currentPage < ( $scope.numberOfPages - 1 ) ) {
                $location.path("notes/" + ($scope.currentPage + 1));
            }
        };

        $scope.filterSearchResults = function(result) {
            var flag = true;
            for(var key in $scope.search){
                if($scope.search.hasOwnProperty(key)) {
                    var expected = $scope.search[key];
                    if( expected === null || expected === "" ) {
                        continue;
                    }
                    var actual = result[ key ];
                    if( angular.isObject( expected ) ) {
                        flag = flag && angular.equals( expected, actual );
                    }
                    else {
                        flag = flag && ( actual.toString().indexOf( expected.toString() ) !== -1 );
                    }
                    if( flag === false ) {
                        return false;
                    }
                }
            }
            return true;
        };

        $scope.remove = function( noteId ) {
            notePipe.remove( noteId, {
                success: function() {
                    $scope.performSearch();
                }
            });
        };

        $scope.edit = function( noteId ) {
            $location.path("note/" + noteId);
        };

        $scope.showHideNoteMenu = function( note ) {
            var current = $scope["note-menu-" + note.id];
            $scope["note-menu-" + note.id] = !current;
        };

        // Listen for note updates from other clients
        $scope.$on("updateNotes", function() {
            $("#mainContent").hide();
            $scope.performSearch();
        });

        // Cleaner transitions - TODO: DRY this out of other files
        $scope.$on("$routeChangeStart", function() {
            $("#mainContent").hide();
        });

        $scope.performSearch();

        function processLayout() {
            if ( $scope.pageSize % 2 === 0 && $scope.searchResults.length > 1 ) {
                $scope.gridClass = "ui-grid-a";
            } else if ( $scope.pageSize % 3 === 0 && $scope.searchResults.length > 2 ) {
                $scope.gridClass = "ui-grid-b";
            }
        }
    });
