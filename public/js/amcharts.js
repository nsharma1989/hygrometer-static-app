var myapp = angular.module('hygrometerApp', []);

myapp.controller('appController', ['$scope', function($scope){
	$scope.data = [{
	                "year": "1950",
	                "value": -0.307
	            }, {
	                "year": "1951",
	                "value": -0.168
	            }, {
	                "year": "1952",
	                "value": -0.073
	            }, {
	                "year": "1953",
	                "value": -0.027
	            }, {
	                "year": "1954",
	                "value": -0.251
	            }, {
	                "year": "1955",
	                "value": -0.281
	            }, {
	                "year": "1956",
	                "value": -0.348
	            }, {
	                "year": "1957",
	                "value": -0.074
	            }, {
	                "year": "1958",
	                "value": -0.011
	            }, {
	                "year": "1959",
	                "value": -0.074
	            }, {
	                "year": "1960",
	                "value": -0.124
	            }, {
	                "year": "1961",
	                "value": -0.024
	            }, {
	                "year": "1962",
	                "value": -0.022
	            }, {
	                "year": "1963",
	                "value": 0
	            }, {
	                "year": "1964",
	                "value": -0.296
	            }, {
	                "year": "1965",
	                "value": -0.217
	            }, {
	                "year": "1966",
	                "value": -0.147
	            }, {
	                "year": "1967",
	                "value": -0.15
	            }, {
	                "year": "1968",
	                "value": -0.16
	            }, {
	                "year": "1969",
	                "value": -0.011
	            }, {
	                "year": "1970",
	                "value": -0.068
	            }, {
	                "year": "1971",
	                "value": -0.19
	            }, {
	                "year": "1972",
	                "value": -0.056
	            }, {
	                "year": "1973",
	                "value": 0.077
	            }, {
	                "year": "1974",
	                "value": -0.213
	            }, {
	                "year": "1975",
	                "value": -0.17
	            }, {
	                "year": "1976",
	                "value": -0.254
	            }, {
	                "year": "1977",
	                "value": 0.019
	            }, {
	                "year": "1978",
	                "value": -0.063
	            }, {
	                "year": "1979",
	                "value": 0.05
	            }, {
	                "year": "1980",
	                "value": 0.077
	            }, {
	                "year": "1981",
	                "value": 0.12
	            }, {
	                "year": "1982",
	                "value": 0.011
	            }, {
	                "year": "1983",
	                "value": 0.177
	            }, {
	                "year": "1984",
	                "value": -0.021
	            }, {
	                "year": "1985",
	                "value": -0.037
	            }, {
	                "year": "1986",
	                "value": 0.03
	            }, {
	                "year": "1987",
	                "value": 0.179
	            }, {
	                "year": "1988",
	                "value": 0.18
	            }, {
	                "year": "1989",
	                "value": 0.104
	            }, {
	                "year": "1990",
	                "value": 0.255
	            }, {
	                "year": "1991",
	                "value": 0.21
	            }, {
	                "year": "1992",
	                "value": 0.065
	            }, {
	                "year": "1993",
	                "value": 0.11
	            }, {
	                "year": "1994",
	                "value": 0.172
	            }, {
	                "year": "1995",
	                "value": 0.269
	            }, {
	                "year": "1996",
	                "value": 0.141
	            }, {
	                "year": "1997",
	                "value": 0.353
	            }, {
	                "year": "1998",
	                "value": 0.548
	            }, {
	                "year": "1999",
	                "value": 0.298
	            }, {
	                "year": "2000",
	                "value": 0.267
	            }, {
	                "year": "2001",
	                "value": 0.411
	            }, {
	                "year": "2002",
	                "value": 0.462
	            }, {
	                "year": "2003",
	                "value": 0.47
	            }, {
	                "year": "2004",
	                "value": 0.445
	            }, {
	                "year": "2005",
	                "value": 0.47
	            }];
              
              $scope.data1 = [{
	                "year": "1950",
	                "value": -0.307
	            }, {
	                "year": "1951",
	                "value": -0.168
	            }, {
	                "year": "1952",
	                "value": -0.073
	            }];

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
	            "theme": "none",
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
			    }, {
			        "id":"v2",
			        "axisColor": "#FCD202",
			        "axisThickness": 2,
			        "axisAlpha": 1,
			        "position": "right"
			    }, {
			        "id":"v3",
			        "axisColor": "#B0DE09",
			        "axisThickness": 2,
			        "gridAlpha": 0,
			        "offset": 50,
			        "axisAlpha": 1,
			        "position": "left"
			    }],
	            "graphs": [{
			        "valueAxis": "v1",
			        "lineColor": "#FF6600",
			        "bullet": "round",
			        "bulletBorderThickness": 1,
			        "hideBulletsCount": 30,
			        "title": "red line",
			        "valueField": "visits",
					"fillAlphas": 0
			    }, {
			        "valueAxis": "v2",
			        "lineColor": "#FCD202",
			        "bullet": "square",
			        "bulletBorderThickness": 1,
			        "hideBulletsCount": 30,
			        "title": "yellow line",
			        "valueField": "hits",
					"fillAlphas": 0
			    }, {
			        "valueAxis": "v3",
			        "lineColor": "#B0DE09",
			        "bullet": "triangleUp",
			        "bulletBorderThickness": 1,
			        "hideBulletsCount": 30,
			        "title": "green line",
			        "valueField": "views",
					"fillAlphas": 0
			    }],
	            "chartScrollbar": {},
	            "chartCursor": {
        			"cursorPosition": "mouse"
    			},
	            "dataDateFormat": "dd-mm-yyyy",
	            "categoryField": "date",
			    "categoryAxis": {
			        "parseDates": true,
			        "axisColor": "#DADADA",
			        "minorGridEnabled": true
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
		    firstDate.setDate(firstDate.getDate() - 100);

		        var visits = 1600;
		        var hits = 2900;
		        var views = 8700;


		    for (var i = 0; i < 100; i++) {
		        // we create date objects here. In your data, you can have date strings
		        // and then set format of your dates using chart.dataDateFormat property,
		        // however when possible, use date objects, as this will speed up chart rendering.
		        var newDate = new Date(firstDate);
		        newDate.setDate(newDate.getDate() + i);

		        visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
		        hits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
		        views += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);

		        chartData.push({
		            date: newDate,
		            visits: visits,
		            hits: hits,
		            views: views
		        });
		    }
		    return chartData;
		}
                
        initChart();   
      }       
    }
}) ;