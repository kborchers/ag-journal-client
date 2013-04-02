"use strict";

angular.module('aerogearJournalApp')
    .factory( "dataService", function($rootScope) {
        return {
            notePipe: AeroGear.Pipeline({
                name: "notes",
                settings: {
                    baseURL: "http://localhost:8080/aerogear-journal/",
                    pageConfig: true
                }
            }).pipes.notes,
            noteStore: AeroGear.DataManager({
                name: "notes",
                type: "SessionLocal",
                settings: {
                    storageType: "localStorage"
                }
            }).stores.notes,
            notifier: AeroGear.Notifier({
                name: "noteNotifier",
                settings: {
                    autoConnect: true,
                    channels: [
                        {
                            address: "org.aerogear.messaging",
                            callback: function( message ) {
                                var msg,
                                    popup = $("#newNoteMessage").popup();
                                if ( message.text === "add" ) {
                                    msg = "New note added";
                                }
                                if ( message.text === "delete" ) {
                                    msg = "Note removed";
                                }
                                if ( message.text === "update" ) {
                                    msg = "Note updated";
                                }
                                popup.html("<p>" + msg + " - <a href='#/notes'>View Notes</a></p>");
                                popup.popup("open");
                                setTimeout( function(){popup.popup("close");}, 3000 );
                                $rootScope.$broadcast("updateNotes");
                            }
                        }
                    ],
                    connectURL: "http://localhost:7777/eventbus",
                    onConnect: function() {
                        console.log('Connected');
                    },
                    onDisconnect: function() {
                        console.log('Disconnected');
                    },
                    onConnectError: function() {
                        console.log('Connect Error');
                    }
                }
            }).clients.noteNotifier
        };
    });
