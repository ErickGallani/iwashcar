(function () {

    'use strict';

    angular.module('app')
        .config(config)
        .run(run);

    function config($stateProvider, $urlRouterProvider, $httpProvider) {

        // default route configuration when there's no url match
        $urlRouterProvider.otherwise("/");

        // app routes
        $stateProvider
            .state('login', {
                url: "/",
                views: {
                    "main": {
                        templateUrl: "js/app/views/usuario/login.html",
                        controller: 'LoginController',
                        controllerAs: 'loginCtrl'
                    }
                }
            })
            .state('principal', {
                url: "/principal",
                views: {
                    "main": {
                        templateUrl: "js/app/views/principal/main.html",
                        controller: 'PrincipalController',
                        controllerAs: 'principalCtrl'
                    }
                }
            })
            .state('requisitar', {
                url: "/requisitar",
                views: {
                    "main": {
                        templateUrl: "js/app/views/requisitar/index.html",
                        controller: 'RequisitarController',
                        controllerAs: 'reqCtrl'
                    },
                    "menuBar": {
                        templateUrl: "js/app/views/menu/header.html",
                        controller: 'MenuController',
                        controllerAs: 'menuCtrl'
                    }
                }
            });

    }

    function run($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    }

})();
