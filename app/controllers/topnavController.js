function topnavController($scope) {

  $scope.$on('catClicked',function() {
    switchView();
  });

  $scope.$on('backClicked',function() {
    switchView();
  });

  function switchView() {
    $scope.viewList = !$scope.viewList;
    $scope.viewDetail = !$scope.viewDetail;
  }

  // Starting values
  $scope.viewList = false;
  $scope.viewDetail = false;


  scheduleApp.controller("topnavController", topnavController);

}