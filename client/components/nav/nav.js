

var Nav = angular.module('myApp');


Nav.controller('navCtrl', function(getService, $scope, $rootScope){


  $rootScope.navActive = false;




   $rootScope.$broadcast('navIsNotActive');



        $rootScope.beNavActive = function(){
              $rootScope.navActive = !$rootScope.navActive;
              //
              // $scope.burgerWrapperElement.toggleClass( "active" );


              if (!$rootScope.navActive) {
                  $rootScope.$broadcast('navIsNotActive');



              }else{
                 $rootScope.$broadcast('navIsActive');


              }

          };


});


Nav.directive('navDirective', function(){
  return{
    restrict: 'E',
    replace: 'true',
    templateUrl: 'components/nav/nav.html',
    link: function(){

    }
  }
});

Nav.directive('headerDirective', function(){
  return{
    restrict: 'E',
    replace: 'true',
    templateUrl: 'components/header/header.html',
    link: function(){

    }
  }
});
