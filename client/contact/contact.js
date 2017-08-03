var Contact = angular.module('myApp');


Contact.controller('contactCtrl', function(getService, $scope, $rootScope, $http, cfpLoadingBar){


$rootScope.isPage = "page-contact";
$scope.contact = $rootScope.contactData;





        //...........................get CONTACT
          $rootScope.contactData = [];
          cfpLoadingBar.start();
          cfpLoadingBar.set(0.9) // Set the loading bar to 30%
          cfpLoadingBar.status() // Returns the loading bar's progress.

            // This service's function returns a promise, but we'll deal with that shortly

            getService.get('contact')
            // then() called when son gets back
            .then(function(data) {

                $rootScope.contactData = data;
                cfpLoadingBar.complete();

            }, function(error) {
                // promise rejected, could log the error with: console.log('error', error);

            });






//contact processing

$scope.formData = {};

$scope.submission = false;

$scope.submitForm = function(){
  $scope.formData.mandrill_subject = $scope.formData.subject.toUpperCase() + " QUESTION FROM PARISHNATION.COM";


   var mandrill = {
        "key": "Yb7uOGBfBFl6z1m8J0ivFw",
        "message": {
            "html": $scope.formData.body,
            "text": $scope.formData.body,
            "subject": $scope.formData.mandrill_subject,
            "from_email": $scope.formData.email,
            "from_name": $scope.formData.name,
            "to": [
                {
                    "email": "help@parishnationshop.com",
                    "name": "PARISHNATION.COM",
                    "type": "to"
                }
            ],
            "headers": {
                "Reply-To": $scope.formData.email
            }

        }
    }

    $http({
      method  : 'POST',
      dataType: 'JSON',
      url     : 'https://mandrillapp.com/api/1.0/messages/send.json',
      data    : mandrill
     })


    .success(function (data) {
          $scope.success = true;
          $scope.alertsuccess = true;
          $scope.formdata = {};
          $scope.hideContact = true;

    })
    .error(function (data) {
        $scope.error = true;
        $scope.hideContact = true;
    });
  };
        })
