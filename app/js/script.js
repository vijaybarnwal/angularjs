/**
 * @author manusis
 */

	angular.module('drag', ['timeModule']).
	  directive('draggable', function($document) {
	    var startX=0, startY=0, x = 0, y = 0;
	    return function(scope, element, attr) {
	      element.css({
	       position: 'relative',
	       border: '1px solid red',
	       backgroundColor: 'transparent',
	       cursor: 'pointer'
	      });
	      element.bind('mousedown', function(event) {
	        startX = event.screenX - x;
	        startY = event.screenY - y;
	        $document.bind('mousemove', mousemove);
	        $document.bind('mouseup', mouseup);
	      });
	 
	      function mousemove(event) {
	        y = event.screenY - startY;
	        x = event.screenX - startX;
	        element.css({
	          top: y + 'px',
	          left:  x + 'px'
	        });
	      }
	 
	      function mouseup() {
	        $document.unbind('mousemove', mousemove);
	        $document.unbind('mouseup', mouseup);
	      }
	    }
	  });
	  
	angular.module('timeModule', []).
		factory('time', function($timeout) {
	    var time = {};
	 
	    (function tick() {
	      time.now = new Date().toString();
	      $timeout(tick, 1000);
	    })();
	    return time;
	  });
	 
	// Notice that you can simply ask for time
	// and it will be provided. No need to look for it.
	function ClockCtrl($scope, time) {
	  $scope.time = time;
	}
	
	function Ctrl($scope) {
	  // $scope.user = {name: 'Vijay', last: 'Barnwal'};
	  $scope.master = {};
	  $scope.save = function(user) {
	  	$scope.master = angular.copy(user);
	  	
	  };
	  $scope.reset = function() {
	  	$scope.user = angular.copy($scope.master);
	  	// if($scope.user.email === undefined) {
      	// $scope.user.email = '';   
      // }
	  };
	  $scope.isUnchanged = function(user) {
	  	return angular.equals(user, $scope.master);
	  };
	  $scope.reset();
	  $scope.qty = 1;
	  $scope.cost = 19.95;
	}
	
	function GreetCtrl($scope) {
		$scope.name = 'Abhishek';
		$scope.action = function(){
			$scope.name = 'OK';
		}
	
	}
	function ListGreetCtrl($scope) {
		$scope.names = ["Abhishek", "satya", "vijay", "vipul"];
	}
	
	function ctrlcurr($window, $scope){
		var exprs = $scope.exprs = [];
		$scope.expr = '5*20|currency';
		$scope.addExpr = function(expr) {
			exprs.push(expr);
			($window.mockWindow || $window).alert('Are You sure? ' + $scope.expr);
		};
		//applying alert box on window
		$scope.greet = function(expr) {
			($window.mockWindow || $window).alert('Good Morning');
		};
		
		$scope.removeExpr = function (index) {
			exprs.splice(index, 1);
		};
	}
	
	
