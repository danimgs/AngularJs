/* Creación de un nuevo módulo llamado myAppModule y guardamos
la referencia en la variable llamada 'myAppModule' */
//var myAppModule = angular.module("myAppModule"[]);
/* Usamos la variable 'myAppModule' para configurar el modulo
con el filtro */
/* myAppModule.filter("stripDashes", function () {
	return function (txt) {
		//Filtro que queramos darle
	};
}); */

/* Usamos la variable 'myAppModule' para configurar el modulo
con el controlador */
/* myAppModule.controller("MyFilterDemoCtrl", function ($scope) {
	//Codigo del controlador
}
);

angular.module('myAppModule', []);

angular.module('myAppModule').controller('MyFilterDemoCtrl', function ($scope) {
	// controller code would go here
}
);

angular.module('myAppModule').filter('stripDashes', function () {
	return function (txt) {

	}
}) */


/* Modulo de colores: Comentar el resto de codigo para que pueda funcionar*/
// Create the module
/* angular.module('myAppModule', []);
// configure the module with a controller
angular.module('myAppModule').controller('myProductDetailCtrl', function ($scope) {
	// Hide colors by default
	$scope.isHidden = true;
	//a function, placed into the scope, which
	// can toggle the value of the isHidden variable
	$scope.showHideColors = function () {
		$scope.isHidden = !$scope.isHidden;
	}
}
); */

/* CIUDADES */
/* var app = angular.module("myAppModule",[]);

app.controller('repeatController', function($scope) {
	$scope.cities = [
	  {country:'España', city:'Madrid'},
	  {country:'Alemania', city:'Kleve'},
	  {country:'Portugal', city:'Oporto'} 
	]
}); */


/* COLORES */
/* var myAppModule = angular.module('myAppModule', []);
myAppModule.controller('myDemoCtrl', function ($scope) {
	$scope.colorsArray = ['red', 'green', 'blue', 'purple', 'olive']
}
);
myAppModule.directive('colorList', function ($compile) {
	return {
		restrict: 'AE',
		template: "<button ng-click='showHideColors()' type='button'>"
			+ "{{isHidden ? 'Show Available Colors' : 'Hide Available Colors'}}"
			+ "</button><div ng-hide='isHidden' id='colorContainer'>"
			+ "</div>",
		link: function ($scope, $element) {
			// set default state of hide/show
			$scope.isHidden = true;
			// add function to manage hide/show state
			$scope.showHideColors = function () {
				$scope.isHidden = !$scope.isHidden;
			}
			// add colors divs to the document
			var colorContainer = $element.find('div');
			angular.forEach($scope.colorsArray, function (color) {
				var appendString = "<div style='background-color:" + color + "'>" + color + "</div > ";
				colorContainer.append(appendString);
			});
		}
	};
}); */

/* FORMULARIOS */
//Ejemplo 1
/* var myAppModule = angular.module('myAppModule',[]);
myAppModule.controller('myForm',function($scope){
	$scope.person = [
		{firstName:'Daniel', age:23,placeOfBirth:"Móstoles",country:"Spain"}
	  ]
}) */

//Ejemplo 2
/* var myAppModuleEj2 = angular.module('myAppModuleEj2',[]);
myAppModuleEj2.controller('myFormEj2',function($scope){
	$scope.showFirstName = function(){
		if(angular.isDefined($scope.firstName)){
			alert("Name: " + $scope.firstName);
		}else{
			alert("Name is empty, please enter a value");
		}
		
	}
}); */

/* Ejemplo 3 */
/* var myAppModule = angular.module('myAppModule',[]);
myAppModule.controller('myForm',function($scope){
	$socpe.person = {};
	$scope.person.newsletterOpIn = false;

	$scope.person.channels = [
		{value: "television", label: "Television"},
		{value: "radio", label: "radio"},
		{value: "social-media", label: "social-media"},
		{value: "other", label: "other"}
	];

	$scope.person.register = function(){
		$scope.firstNameInvalid = false;
		$scope.lastNameInvalid = false;
		$scope.emailInvalid = false;

		if(!$scope.registrationForm.firstName.$valid){
			$scope.firstNameInvalid = true;
		}
		if(!$scope.registrationForm.lastName.$valid){
			$scope.lastNameInvalid = true;
		}
		if(!$scope.registrationForm.email.$valid){
			$scope.emailInvalid = true;
		}
		if(!$scope.registrationForm.research.$valid){
			$scope.researchInvalid = true;
		}
		if($scope.registrationForm.$valid){
			$scope.doShow = true;
		}
	}
}); */

/* Ejemplo mas detallado */
var module = angular.module('myApp',[]);
module.factory('memberDataStoreService',function($http){
	var memberDataStore = {};

	memberDataStore.doRegistration = function(theData){
		var promise = $http({method: 'POST', url: 'memberservices/register',data: theData});
		return promise;
	}

	return memberDataStore;

}).controller("MyController",function ($scope,memberDataStoreService){
	$scope.person = {};
	$scope.person.newsletterOptIn = true;
	$scope.person.channels = [
		{value: "television", label: "Television"},
		{value: "radio", label: "radio"},
		{value: "social-media", label: "Social Media"},
		{value: "other", label: "Other"}		
	];

	$scope.register = function(){
		$scope.firstNameInvalid = false;
		$scope.lastNameInvalid = false;
		$scope.emailInvalid = false;
		$scope.researchInvalid = false;

		$scope.showSuccessMessage = false;
		$scope.showErrorMessage = false;

		if(!$scope.registrationForm.firstName.$valid){
			$scope.firstNameInvalid = true;
		}

		if(!$scope.registrationForm.lastName.$valid){
			$scope.lastNameInvalid = true;
		}

		if(!$scope.registrationForm.email.$valid){
			$scope.emailInvalid = true;
		}

		if(!$scope.registrationForm.research.$valid){
			$scope.researchInvalid = true;
		}

		if($scope.registrationForm.$valid){
			var promise = memberDataStoreService.doRegistration($scope.person);

			promise.success(function (data,status){
				$scope.showSuccessMessage = true;
			});

			promise.error(function (data,status){
				$scope.showErrorMessage = true;
			});
			
			$scope.doShow = true;
		}
	}
})



