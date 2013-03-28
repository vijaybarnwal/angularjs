/**
 * @author manusis
 */

	angular.module('drag', ['timeModule', 'Test', 'MyreverseModule']).
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
	 var test = angular.module('Test',[]);
		test.controller('MainCtrl', function ($scope, $filter) {
    $scope.inputDate = 1345678300;
    $scope.convertDate = function () {
        var inputdate = $scope.inputDate;
        var inputdate_in_ms = inputdate*1000;
        // console.log("inputdate===>> "+ inputdate);
        var timesince = timeSince(inputdate_in_ms);
        // console.log("time since==>>> "+ timesince);
        $scope.outputDate = timesince;
        console.log($scope.outputDate);
    }    
});
	// Notice that you can simply ask for time
	// and it will be provided. No need to look for it.
	function ClockCtrl($scope, time) {
	  $scope.time = time;
	}
	
	function timeSince(timestamp) {
		
				// var timestamp_in_ms = timestamp*1000;
				var currdate				= new Date().getTime();
				var seconds					= Math.floor((currdate - timestamp) / 1000);
				var interval				= Math.floor(seconds / 31536000);
				if (interval > 1) {
						return interval + " years";
				}
				interval = Math.floor(seconds / 2592000);
				if (interval > 1) {
						return interval + " months";
				}
				interval = Math.floor(seconds / 86400);
				if (interval > 1) {
						return interval + " days";
				}
				interval = Math.floor(seconds / 3600);
				if (interval > 1) {
						return interval + " hours";
				}
				interval = Math.floor(seconds / 60);
				if (interval > 1) {
						return interval + " minutes";
				}
				return Math.floor(seconds) + " seconds";
				
				/*
console.log('timestamp: ' + timestamp);

		var ts_in_secs = Math.floor(timestamp / 1000);
		
console.log(new Date().getTime);

		var now_in_secs = Math.floor(new Date().getTime());
		
console.log('ts in secs: ' + ts_in_secs);		
		
		var ts_in_years  = Math.floor(ts_in_secs / 31536000);
		
console.log('ts in years: ' + ts_in_years);
		
		if (ts_in_years <= 0) {
			var ts_in_months = Math.floor(ts_in_secs / 2592000);
			
console.log('ts in months: ' + ts_in_months);

			if (ts_in_months <= 0) {
				var ts_in_days = Math.floor(ts_in_secs / 86400);
				
console.log('ts in days: ' + ts_in_days);

				if (ts_in_days <= 0) {
					var ts_in_hrs = Math.floor(ts_in_secs / 3600);
					
console.log('ts in hrs: ' + ts_in_hrs);

					if (ts_in_hrs <= 0) {
						var ts_in_mins = Math.floor(ts_in_secs / 60);
						
console.log('ts in mins: ' + ts_in_mins);


						if (ts_in_mins <= 0) {
							var ts_in_seconds = Math.floor(ts_in_secs);
							
console.log('ts in secs: ' + ts_in_seconds);
							
							var now_in_seconds = Math.floor(now_in_secs);
							
console
							
							var time_diff_in_secs = parseFloat(now_in_seconds - ts_in_seconds);
							
console.log('time diff in seconds: ' + time_diff_in_secs);

						}
					}
				}
			}
		}
		
return;
		
		var now = new Date().getTime();
		var now_in_years = Math.floor(now / (1000 * 31536000));
		
console.log('now in yrs: ' + now_in_years);
		
		
		

		
		var yrs_diff = parseInt(now_in_years - ts_in_years);
		
console.log('time diff yrs: ' + yrs_diff);*/

		
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
	  // $scope.isUnchanged = function(user) {
	  	// return angular.equals(user, $scope.master);
	  // };
	  $scope.reset();
	  $scope.qty = 1;
	  $scope.cost = 19.95;
	}
	
/*
	function GreetCtrl($scope) {
		$scope.name = 'Abhishek';
		$scope.action = function(){
			$scope.name = 'OK';
		}
	
	}
	function ListGreetCtrl($scope) {
		$scope.names = ["Abhishek", "satya", "vijay", "vipul"];
	}
	*/

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
	
	
/*
function mainCtrlmain($scope) {
	$scope.timeOfDay = 'morning';
	$scope.name = 'Nikki';
}

function ChildCtrl($scope) {
	$scope.name = 'Mattie';
}

function BabyCtrl($scope) {
	$scope.timeOfDay = 'evening';
	$scope.name = 'Gingerbreak Baby';
}*/
angular.module('MyreverseModule', []).
	filter('reverse', function() {
		return function (input, uppercase) {
			var out = "";
			for(var i=0; i<input.length; i++) {
				out = input.charAt(i) + out;
			}
			if (uppercase) {
				out = out.toUpperCase();
			}
			return out;
		}
	});
	function reverseText ($scope) {
		$scope.text = 'Vijay Barnwal';
	}

