var myapp = angular.module('hygrometerApp', []);

myapp.controller('appController', ['$scope', function($scope){
	$scope.data = [];

}]);

myapp.directive('amChart',
   function () {
       return {
           restrict: 'E',
           replace: true,
           scope: {
              chartId: '@'
           },
           template: '<div id="{{chartId}}" style="min-width: 310px; height: 400px; margin: 0 auto"></div>',
           link: function (scope, element, attrs) {
                var chart = false;
               
                var initChart = function() {
                var chartData = generateChartData();
                  if (chart) chart.destroy();
                  var config = scope.config || {};
                 
                   chart = AmCharts.makeChart(scope.chartId, {
	            "type": "serial",
	            "theme": "light",
	            "marginLeft": 20,
	            "pathToImages": "http://www.amcharts.com/lib/3/images/",
	            "dataProvider": chartData,
	            "synchronizeGrid":true,
	            "valueAxes": [{
			        "id":"v1",
			        "axisColor": "#FF6600",
			        "axisThickness": 2,
			        "axisAlpha": 1,
			        "position": "left"
			    }],
	            "graphs": [{
			        "valueAxis": "v1",
			        "lineColor": "#ff0040",
			        "title": "CH01, SE14",
			        "valueField": "s1",
					"fillAlphas": 0,
					"lineThickness": 2
			    }, {
			        "valueAxis": "v2",
			        "lineColor": "#80ff00",
			        "title": "CH03 SE01",
			        "valueField": "s2",
					"fillAlphas": 0,
					"lineThickness": 2
			    }, {
			        "valueAxis": "v3",
			        "lineColor": "#0080ff",
			        "title": "CH01 SE01",
			        "valueField": "s3",
					"fillAlphas": 0,
					"lineThickness": 2
			    }],
	            "chartScrollbar": {},
	            "chartCursor": {
        			"cursorPosition": "mouse"
    			},
	            "dataDateFormat": "dd-mm-yyyy",
	            "categoryField": "date",
			    "categoryAxis": {
			    	"minPeriod": "mm",
			        "parseDates": true,
			        "axisColor": "#DADADA",
			        "minorGridEnabled": true,
			        "minHorizontalGap": 55,
			        "guides": [{
			            "date": "21:10",
      					"toDate": "21:20",
					    "fillAlpha": .5,
					    "fillColor": "#00ff88"
			        }]
			    },
			    "export": {
			    	"enabled": true,
			        "position": "bottom-right"
			     }
	        });
                    
                        
        };

        // generate some random data, quite different range
		function generateChartData() {
		    var chartData = [];
		    var firstDate = new Date();
		    firstDate.setMinutes(firstDate.getDate() + 1);

		        var s1 = 5;
		        var s2 = -5;
		        var s3 = -10;


		    for (var i = 0; i < 5; i++) {
		        // we create date objects here. In your data, you can have date strings
		        // and then set format of your dates using chart.dataDateFormat property,
		        // however when possible, use date objects, as this will speed up chart rendering.
		        var newDate = new Date(firstDate);
		        newDate.setMinutes(newDate.getMinutes() + i);

		        s1 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
		        s2 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
		        s3 += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

		        chartData.push({
		            date: newDate,
		            s1: s1,
		            s2: s2,
		            s3: s3
		        });
		    }
		    return chartData;
		}
                
        initChart();   
      }       
    }
}) ;