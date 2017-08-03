var Newsletter = angular.module('myApp');


Newsletter.controller('newsletterCtrl', function(getService, $scope, $rootScope, $http){


$rootScope.showNewsletter=false;


$rootScope.showNewsFunction= function(){
  $rootScope.showNewsletter=!$rootScope.showNewsletter;
}

});//end of controller

Newsletter.directive('newsletterDirective', function(){
  return{
    restrict: 'E',
    replace: 'true',
    templateUrl: 'newsletter/newsletter.html',
    link: function(){

    }
  }
});
