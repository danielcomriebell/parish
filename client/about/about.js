

var About = angular.module('myApp');


About.controller('aboutCtrl', function(getService, $scope, $rootScope, cfpLoadingBar){

$rootScope.isPage = "page-about";
$scope.soundAction = "SOUND";
$scope.video_volume = 0;
$rootScope.aboutVideo = document.getElementById("about-video");
$rootScope.aboutVideo.volume = 0;








        //...........................get ABOUT
          $rootScope.aboutData = [];
          cfpLoadingBar.start();
          cfpLoadingBar.set(0.9) // Set the loading bar to 30%
          cfpLoadingBar.status() // Returns the loading bar's progress.

            // This service's function returns a promise, but we'll deal with that shortly

            getService.get('about')
            // then() called when son gets back
            .then(function(data) {

                $rootScope.aboutData = data;

                cfpLoadingBar.complete();



            }, function(error) {
                // promise rejected, could log the error with: console.log('error', error);

            });
























setTimeout(function(){




$rootScope.volume = function() {
    if ($scope.video_volume == 0){

          $rootScope.aboutVideo.volume = 1;
          $scope.video_volume = 1;
          $scope.soundAction = "SOUND";

    }else{

          $rootScope.aboutVideo.volume =0;

          $scope.video_volume = 0;
        // $rootScope.myVideo.pause();
        $scope.soundAction = "QUIET";
    }

}


    $rootScope.playPause = function() {
        if ($rootScope.aboutVideo.paused){
        console.log("play");
            $rootScope.aboutVideo.play();
        }

        else{
        $rootScope.aboutVideo.pause();
        }

    }

}, 600);




//pause when you leave the page
    $scope.$on('$destroy', function () {
      $rootScope.aboutVideo.pause();
    });

});
