scheduleApp.controller("scheduleDetailsController", function($scope, $routeParams, 
	FIREBASE_URL, $firebaseArray, $firebaseObject){

   $scope.details = [];

    var ref = new Firebase(FIREBASE_URL);
    var postRef = ref.child('schedule');
    $scope.details = $firebaseArray(postRef);

  });

