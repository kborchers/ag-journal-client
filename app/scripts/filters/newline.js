'use strict';

angular.module('aerogearJournalApp')
    .filter('newline', function () {
        return function( input ) {
            return input.replace( /\n/g, '<br/>' );
        };
    });
