scheduleApp.controller("scheduleController", function($scope, FIREBASE_URL) {
	$scope.program = {};
	$scope.errormsg = "";
	$scope.success = "";
	$scope.schedule = [];

	$scope.addDetail = function(new_program) {
		if (!new_program.filmtitle) {
			$scope.errormsg = "Title is missing";
		}  else if (!new_program.rating)  {
			$scope.errormsg = "Rating dropdown was not selected";	
		}  else if (!new_program.genre)  {
			$scope.errormsg = "Genre dropdown was not selected";
		}  else if (!new_program.year)  {
			$scope.errormsg = "Year is missing";
		} else if (!is_valid_year(new_program.year)) {
			$scope.errormsg = "Year is in the incorrect numeric format: YYYY";
		}  else if (!new_program.runtime)  {
			$scope.errormsg = "Run Time is missing";
		} else if (!is_valid_runtime(new_program.runtime)) {
			$scope.errormsg = "Run Time is in the incorrect numeric format";
		} else if (!new_program.url)  {
			$scope.errormsg = "URL is missing";
		} else if (!is_valid_url(new_program.url)) {
			$scope.errormsg = "URL is in the incorrect format: http://www.abc.com";
		} else {
			$scope.errormsg = '';
			$scope.success= 'Submit successful';

			var pushRef = new Firebase(FIREBASE_URL + '/schedule');
			pushRef.push({
				filmtitle: new_program.filmtitle,
				creationDate: Firebase.ServerValue.TIMESTAMP,
				rating: new_program.rating,
				year: new_program.year,
				genre: new_program.genre,
				runtime: new_program.runtime,
				filmdescription: new_program.filmdescription,
				url: new_program.url,
				image: imageUpped 
			});
		}	
	}		

	var imageUpped;

	$scope.addImage = function(new_image) {
		filepicker.setKey("ArnCVV3SAaRjVTRznh6Abz");

		filepicker.pick(
		{
			mimetypes: ['image/*', 'text/plain'],
			container: 'window',
			services:['COMPUTER'],
		},
		function(Blob){
			imageUpped = Blob.url;
			console.log(imageUpped);
		},
		function(FPError){
			console.log(FPError.toString());
		}
		);
		}; //filepicker





	}); 


function is_valid_year (item) {
	if (item.match(/^[0-9]{4}$/)){
		return true;
	} else {
		return false;
	}
}


function is_valid_runtime (item) {
	if (item.match(/^[0-9]{2,3}$/)){
		return true;
	} else {
		return false;
	}
}

function is_valid_url (item) {
	if (item.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)){
		return true;
	} else {
		return false;
	}
}

