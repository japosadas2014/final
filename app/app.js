var scheduleApp = angular.module("scheduleApp", ["ngRoute", "firebase"])
.constant('FIREBASE_URL', 'https://jp-final-project.firebaseio.com');

scheduleApp.config(function ($routeProvider) {
    $routeProvider
        .when("/",  { controller: "loginController", templateUrl: "app/partials/login_partial.html" })
        .when("/register",  { controller: "registerController", templateUrl: "app/partials/register_partial.html" })
        .when("/add-schedule",  { controller: "scheduleController", templateUrl: "app/partials/add_schedule_partial.html" })
        .when("/schedule", {controller: "scheduleDetailsController", templateUrl: "app/partials/schedule_detail_partial.html" })
       .when("/signout",  {  templateUrl: "app/partials/signout_partial.html" })
        .otherwise({  templateUrl: "app/partials/404_page.html" });
});


