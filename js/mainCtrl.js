var app = angular.module('quoteBook');
app.controller('mainCtrl', function($scope, dataService){
  $scope.quotes =dataService.getData();
  $scope.newQuote='';
  $scope.newAuthor='';


$scope.addData= function() {
  var quote = newObj();
  dataService.addData(quote);
  resetQuote();

  function newObj() {
    return {
    text: $scope.newQuote,
    author: $scope.newAuthor
  }
  }
  function resetQuote() {
    $scope.newQuote='';
    $scope.newAuthor=''
  }

}
$scope.removeData= function() {
  dataService.removeData($scope.newQuote);
  resetQuote();
  function resetQuote() {
    $scope.newQuote='';
  }
  }
});
