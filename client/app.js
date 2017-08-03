

angular.module('myApp', ['ngRoute', 'ngAnimate', 'ngResource',
  'ngTouch',
  'myApp.Routes',
  'myApp.Services',
  'myApp.Press',
  'mailchimp',
  'angular-loading-bar',
  'cfp.loadingBar'
])

.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
   cfpLoadingBarProvider.includeSpinner = false;
 }])


.controller('appCtrl', function(getService, $scope, $rootScope, cfpLoadingBar){



        //............................................................GET requests.........................................................







       setTimeout(function(){


      },1000);  // end timeout







});
