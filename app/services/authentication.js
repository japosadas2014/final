scheduleApp.factory('Authentication', 
	function($firebase, 
		$firebaseAuth, 
		$routeParams, 
		$location, 
		FIREBASE_URL) {


		var ref = new Firebase(FIREBASE_URL);

		var myObject = {
			login: function(user) {
				return ref.authWithPassword({
					"email": user.email,
					"password": user.password		
				}, function(error) {
					if (error) {
						console.log("Login Failed!", error);
					} else {
						console.log("Authenticated successfully");
					}
				});

			}
		}
		return myObject;

/*		var ref = new Firebase(FIREBASE_URL);
		var auth = $firebaseAuth(ref);

		var myObject = {
			login: function(user) {
				return auth.$authWithPassword({
					email: user.email,
					password: user.password
			
				}); // authwithpassword
			} // login
		
		}

		return myObject;*/
	}); //factory
































