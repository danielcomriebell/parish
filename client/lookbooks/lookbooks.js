

var Lookbooks = angular.module('myApp');


Lookbooks.controller('lookbooksCtrl', ["getService", "$scope", "$rootScope", "$route", "$location", "$routeParams","cfpLoadingBar", function(getService, $scope, $rootScope, $route, $location, $routeParams, cfpLoadingBar){


$rootScope.isPage = "page-lookbook";
// $rootScope.burgerHide = false;

$scope.realId = parseInt($routeParams.id) - 1;
$scope.lookbookDetailImage=1;

$rootScope.id;

$rootScope.$on( "$routeChangeSuccess", function(event, next, current) {
$rootScope.id = $routeParams.id -1;


if ($routeParams.id){

  console.log("is detail");
  $rootScope.burgerHide = true;


}else {

  console.log("not detail");
  $rootScope.burgerHide = false;

}




});









//...........................get LOOKBOOK
  $rootScope.lookbookData = [];
  cfpLoadingBar.start();
  cfpLoadingBar.set(0.9) // Set the loading bar to 30%
  cfpLoadingBar.status() // Returns the loading bar's progress.

    // This service's function returns a promise, but we'll deal with that shortly

    getService.get('lookbooks/'+$routeParams.collection)
    // then() called when son gets back
    .then(function(data) {

        $rootScope.lookbookData = data;

        cfpLoadingBar.complete();



    }, function(error) {
        // promise rejected, could log the error with: console.log('error', error);

    });
















$scope.nextId = parseInt($routeParams.id) + 1;
$scope.prevId = parseInt($routeParams.id)- 1;







//navigating with keys
       jQuery(document.documentElement).keyup(function (event) {
         // handle cursor keys
         if ( (event.keyCode == 37) && ($scope.prevId > 0)) {
           // go left
       return $location.path('lookbooks/'+$routeParams.collection +'/' + $scope.prevId).search();


     } else if ((event.keyCode == 39) && ($scope.nextId <= ($scope.lookbookData.data.length))) {

           // go right
           return $location.path('lookbooks/'+$routeParams.collection +'/'+ $scope.nextId).search();


         }
         else if ((event.keyCode == 39) && ($scope.nextId > ($scope.lookbookData.data.length))){

            return $location.path('lookbooks/'+$routeParams.collection +'/' + '/1').search();

         }
         else if((event.keyCode == 37) && ($scope.prevId == 0)){

           return $location.path('lookbooks/'+$routeParams.collection +'/' + $scope.lookbookData.data.length).search();

         }

       });





       $scope.goPrevious = function(){

           if ($scope.prevId > 0) {
             // go left
              return $location.path('lookbooks/'+$routeParams.collection +'/' + $scope.prevId).search();

           }else if($scope.prevId == 0){

              return $location.path('lookbooks/'+$routeParams.collection +'/' + + $scope.lookbookData.data.length).search();

           }
       }

       $scope.goNext=function(){
          if ($scope.nextId > $scope.lookbookData.data.length){
             return $location.path('lookbooks/'+$routeParams.collection +'/'+'1').search();

         } else if ($scope.nextId <= ($scope.lookbookData.data.length)) {
           return $location.path('lookbooks/'+$routeParams.collection +'/' + $scope.nextId).search();

         }

       }


       if($scope.checkDevice){

       $scope.swipeRight = function(){

           if ($scope.prevId > 0) {
             // go left
              return $location.path('lookbooks/'+$routeParams.collection +'/'+ $scope.prevId).search();

           }else if($scope.prevId == 0){

              return $location.path('lookbooks/'+$routeParams.collection +'/'+ $scope.lookbookData.data.length).search();

           }
       }

       $scope.swipeLeft=function(){
          if ($scope.nextId > $scope.lookbookData.data.length){
             return $location.path('lookbooks/'+$routeParams.collection+ '/1').search();

         } else if ($scope.nextId <= ($scope.lookbookData.data.length)) {
           return $location.path('lookbooks/'+$routeParams.collection  +'/'+ $scope.nextId).search();

         }

       }
     }







}]);

Lookbooks.directive('imageFadeDirective', function($rootScope, $location, $timeout, $window){
	return{
		restrict:'A',
    link: function(scope, elem, attr){

      setTimeout(function() {

      var windowHeight = $window.innerHeight;

      //       var height = elem.height;
        scope.imageWidth = elem[0].offsetHeight;
        var imageScroll = elem[0].offsetTop;


      scope.thisElement = elem;
      scope.thisID = scope.thisElement.attr("id");

      // scope.child = elem.children();
      // scope.thisID = scope.child.attr("id");


       var thisChild = angular.element( document.querySelector( '#'+scope.thisID ));


         scope.elementID = parseInt(scope.thisID.substring(12));

       if(scope.elementID <= 7){

         scope.thisElement.addClass("fadeScroll");

       }



      jQuery($window).bind("scroll.image_fade_scroll", function(event) {




        var scrolled = false;

            var window_scroll = jQuery($window).scrollTop();



            if ((window_scroll > (imageScroll - (windowHeight/1.2)))&&(scrolled==false)){

                scope.thisElement.addClass("fadeScroll");

                thisChild.addClass("fadeUp");

                var scrolled = true;

            }

      });



  }, 600);

    }
	}
});
