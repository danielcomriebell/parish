

var Home = angular.module('myApp');


Home.controller('homeCtrl', function(getService, $scope, $rootScope, cfpLoadingBar){

$rootScope.isPage = "page-home";

var a;


        //...........................get ISSUE

          $rootScope.homeData = [];

          cfpLoadingBar.start();
          cfpLoadingBar.set(0.9) // Set the loading bar to 30%
          cfpLoadingBar.status() // Returns the loading bar's progress.

            // This service's function returns a promise, but we'll deal with that shortly

            getService.get('home')
            // then() called when son gets back
            .then(function(data) {


                $rootScope.homeData = data;


                cfpLoadingBar.complete();



            }, function(error) {
                // promise rejected, could log the error with: console.log('error', error);

            });


});
