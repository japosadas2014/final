scheduleApp.controller("loginController", 
	function($scope, 
		$location, 
		$firebaseAuth, 
		FIREBASE_URL
		){


var ref = new Firebase(FIREBASE_URL);

$scope.login = function(new_user) {
ref.authWithPassword({
  email    : new_user.email,
  password : new_user.password
}, function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});
}



});  






/*


	$scope.login = function(){
		Authentication.login($scope.user)
		.then(function(user){
			$location.path("/add-schedule");
		}).catch(function(error){
			$scope.message = error.message;
		}); // login
	} // end function


function loginController($scope){
$scope.login = {};

$scope.errormsg = "";

	$scope.validateLogin = function(login) {
		if (!angular.isDefined($scope.login.user))  {
			$scope.errormsg = "Username is missing";		
		}  else if (!angular.isDefined($scope.login.password))  {
			$scope.errormsg = "Password is missing";	
		} else {
			$scope.errormsg = '';
			 location.href = '#/add-schedule';
		}
	};

	scheduleApp.controller("loginController", loginController);

	
}*/