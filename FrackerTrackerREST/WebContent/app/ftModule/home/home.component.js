angular.module("ftHome").component("home",{
	templateURL : 'app/ftModule/home/home.component.html',
	controller : function(ftService, $location, $scope,){
		var vm = this; 
		
		vm.wells = [];
		
		vm.reload
	},
	controllerAs : 'vm'
})