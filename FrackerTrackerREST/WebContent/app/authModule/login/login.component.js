angular.module("authModule").component("login", {
	templateUrl : 'app/authModule/login/login.component.html',
	controller : function(authService, $location, $document) {
		var vm = this;
		

		vm.login = function(user) {
			authService.login(user).then(function(res) {
				console.log(user);
				$location.path('/home')
			})
			.catch(function(error){
				vm.error = true;
			})
		}
		
		vm.cancel = function() {   		
			$location.path('/')
	
		}		
	},
	controllerAs : 'vm'
});
