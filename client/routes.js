
var Route =  angular.module('myApp.Routes', ['ngRoute', 'ngAnimate', 'ngResource', 'myApp.Services',
  'ngTouch'
  ])



Route.run(['$anchorScroll', '$route', '$rootScope', '$location','getService', function($anchorScroll, $route, $rootScope, $location, getService) {


  }]);



Route.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  // use the HTML5 History API
  $locationProvider.html5Mode(true);

  $routeProvider
  // $locationChangeStart

    .when('/about', {
      templateUrl: 'about/about.html',
      controller: 'aboutCtrl'
    })

    .when('/press', {
      templateUrl: 'press/press.html',
      controller: 'pressCtrl'
    })

    .when('/contact', {
      templateUrl: 'contact/contact.html',
      controller: 'contactCtrl'
    })

    .when('/lookbooks/:collection/:id', {
      templateUrl: 'lookbooks/lookbooks-detail.html',
      controller: 'lookbooksCtrl',
      reloadOnSearch:true
    })

    .when('/lookbooks/:collection/', {
      templateUrl: 'lookbooks/lookbooks.html'
    })


    .when('/archive', {
      templateUrl: 'archive/archive.html',
      controller: 'archiveCtrl'
    })

    // .when('/newsletter', {
    //   templateUrl: 'newsletter/newsletter.html'
    // })

    .when('/terms', {
      templateUrl: 'terms/terms.html'
    })

    .when('/', {
      templateUrl: 'home/home.html',
      controller: 'appCtrl',
      reloadOnSearch: false,
      resolve: {
        app: function ($q, $timeout) {
          var deferred = $q.defer();
          $timeout(function () {
            deferred.resolve();

          },200);

          return deferred.promise;
        }
      }
    })
//
// cfpLoadingBarProvider.includeSpinner = true;

    // put your least specific route at the bottom
    // .otherwise({redirectTo: '/'});


}]);


Route.controller('routeCtrl', ['$anchorScroll', '$location', '$scope','$window','$route','getService','$rootScope','$routeParams','$location','$window','$interval','$timeout', function ($anchorScroll, $location, $scope, $window, $route, getService, $rootScope, $routeParams, $location, $window, $interval, $timeout) {

    // $rootScope.pageLoading = true;












//..............................................................................mobile


//....this is the function that checks the header of the browser and sees what device it is

$rootScope.checkDevice = {
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
          return ($rootScope.checkDevice.Android() || $rootScope.checkDevice.BlackBerry() || $rootScope.checkDevice.iOS() || $rootScope.checkDevice.Opera() || $rootScope.checkDevice.Windows());
      }
  };

//........checks the width

  $scope.mobileQuery=window.matchMedia( "(max-width: 767px)" );
  $rootScope.isMobile=$scope.mobileQuery.matches;



//.........returning true if device

  if ($scope.checkDevice.any()){

    $rootScope.isDevice= true;

  }else{

      $rootScope.isDevice=false;

  }

  if (($rootScope.isDevice==true)&&($scope.isMobile==true)){

    $rootScope.isMobileDevice= true;

  }else{

      $rootScope.isMobileDevice=false;

  }







    if ($rootScope.isDevice){

        $rootScope.mobileLocation = function(url){

          $location.path(url).search();

        }



        $rootScope.mobileExternalLocation = function(url){

          $window.open(url, '_blank');

        }


    } else if (!$rootScope.isDevice){


        $rootScope.mobileLocation = function(url){

          return false;

        }


        $rootScope.mobileExternalLocation = function(url){

          return false;

        }

    }


}]);










Route.directive('pageLoadingSpinner', function($rootScope, $location, $window, $routeParams, cfpLoadingBar) {
  return {
    restrict: 'A',
    // templateUrl: 'components/loader.html',
    replace: true,
    link: function(scope, elem, attrs) {


      $rootScope.$on('$routeChangeStart', function() {

          // scope.hideStickers = false;
          // $rootScope.pageLoading = true;

          cfpLoadingBar.start();
// will insert the loading bar into the DOM, and display its progress at 1%.
// It will automatically call `inc()` repeatedly to give the illusion that the page load is progressing.

cfpLoadingBar.inc();
// increments the loading bar by a random amount.
// It is important to note that the auto incrementing will begin to slow down as
// the progress increases.  This is to prevent the loading bar from appearing
// completed (or almost complete) before the XHR request has responded.

cfpLoadingBar.set(0.9) // Set the loading bar to 30%
cfpLoadingBar.status() // Returns the loading bar's progress.
// -> 0.3

cfpLoadingBar.complete()
// Set the loading bar's progress to 100%, and then remove it from the DOM.



      });


      $rootScope.$on('$routeChangeSuccess', function() {

        // $rootScope.pageLoading = false;






      });
    }

  }

  });
