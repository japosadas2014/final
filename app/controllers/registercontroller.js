scheduleApp.controller("registerController", function($scope, FIREBASE_URL) {

	$scope.errormsg = "";
	$scope.success = "";
	$scope.users = [];

	$scope.validateRegister = function(new_register) {

		var pname;
		var email;
		var username;
		var password;


		if (!new_register.pname)  {
			$scope.errormsg = "Person's name is missing";		
		}  else if (!new_register.email)  {
			$scope.errormsg = "Email is missing";	
		} else if (!is_valid_email(new_register.email)) {
			$scope.errormsg = "Email is incorrect";
		}  else if (!new_register.username)  {
			$scope.errormsg = "Username is missing";
		}  else if (!new_register.password)  {
			$scope.errormsg = "Password is missing";	
		} else if (!is_valid_password(new_register.password)) {
			$scope.errormsg = "Password must be between 8 to 15 characters which contain only characters, numeric digits and underscore and first character must be a letter.";	
		}  else {
			$scope.errormsg = '';
			$scope.success= 'Thank you for registering.';
			var pushRef = new Firebase(FIREBASE_URL + '/users');

			pushRef.push({
				personname: new_register.pname,
				creationDate: Firebase.ServerValue.TIMESTAMP,
				email: new_register.email,
				username: new_register.username,
				password: new_register.password

			}); 

			
		}
	};

});


function is_valid_email (item) {
	if (item.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
		return true;
	} else {
		return false;
	}
}


function is_valid_password (item) {
	if (item.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)){
		return true;
	} else {
		return false;
	}
}


