'use strict';

// Disable all jQuery Mobile routing
$.mobile.ajaxEnabled = false;
$.mobile.linkBindingEnabled = false;
$.mobile.hashListeningEnabled = false;
$.mobile.pushStateEnabled = false;

// Close panel after clicking menu link
$("#menu-panel a").on("click", function() {
    $("#menu-panel").panel( "close" );
});

angular.module('aerogearJournalApp', ['ngSanitize'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/notes', {
                templateUrl: 'views/notes.html',
                controller: 'NotesCtrl'
            })
            .when('/notes/:pageNum', {
                templateUrl: 'views/notes.html',
                controller: 'NotesCtrl'
            })
            .when('/note', {
                templateUrl: 'views/addNote.html',
                controller: 'AddNoteCtrl'
            })
            .when('/note/:noteId', {
                templateUrl: 'views/addNote.html',
                controller: 'AddNoteCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
