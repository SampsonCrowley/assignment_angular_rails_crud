pins.controller('UserCtrl', ['$scope', '$state', 'Auth',
  function($scope, $state, Auth) {



    $scope.$on('devise:login', function(){
      $state.go('pins.new')
    })

    $scope.$on('devise:new-session', function(){
      $state.go('pins.new')
    })


    $scope.login = function(loginForm, loginData) {
      Auth.login(loginData)
        .then(r => $state.go('pins.new'))
        .catch(e => { alert("Invalid Credentials") })
    }
  }]);
