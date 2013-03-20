'use strict';

/* Controllers */
function PhoneListCtrl($scope , phone) {
	$scope.hello = "Hello,Welcome to Mobile World!"
	// $http.get('phones/phones.json').success(function(data){
		// $scope.phones = data.splice(0, 5);
		// $scope.phones = data;
		$scope.phones = phone.query();
	// });
  /*$scope.phones = [
    {"name": "Nexus S",
     "snippet": "Fast just got faster with Nexus S.",
     "age": 0},
    {"name": "Motorola XOOM™ with Wi-Fi",
     "snippet": "The Next, Next Generation tablet.",
     "age": 1},
    {"name": "MOTOROLA XOOM™",
     "snippet": "The Next, Next Generation tablet.",
     "age": 2}
  ];*/
 
  $scope.orderProp = 'age';
  
}

function PhoneDetailCtrl($scope, $routeParams, phone) {
  // $scope.phoneId = $routeParams.phoneId;
  // $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
    // $scope.phone = data;
    // $scope.mainImageUrl = data.images[0];
  // });
  $scope.phone = phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.mainImageUrl = phone.images[0];
  });
  $scope.setImage = function(imageUrl){
  	$scope.mainImageUrl = imageUrl;
  }
}
