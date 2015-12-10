//English Only Speaking US Citizens by Race
// http://www.census.gov/data/tables/2000/dec/phc-t-42.html

/* 
     Census data collected in the year 2000 shows from a sample of 
     262,375,152 showed that on average 23% (60,361,574) of all participants 
     only spoke english. The chart illustrates the proportion of english only
     speakers by Race. 

     http://www.census.gov/data/tables/2000/dec/phc-t-42.html


Total Surveyed 262375152 

*/




var englishOnlyByRace2 = c3.generate({
        bindto: '#englishOnlyByRace2',

    data: {
      x: 'x',
        columns: [
            ['x', 'Anglo American', 'Native Hawaiian or other Pacific Islander', 'Hispanic or Latino', 'Black or African American', 'Asian', 'American Indian or Alaska Native'],
            ['English Only', 30, 200, 200, 400, 150, 250],
            ['2nd Language', 130, 100, 100, 200, 150, 50]
        ],
        type: 'bar',
        groups: [
            ['English Only', '2nd Language']
        ]
    },
    grid: {
        y: {
            lines: [{value:0}]
        }
    },
    axis: {
           rotated: true,
             x: {
                        type: 'category'
                    }
    }
});
















/*
var englishOnlyByRace2 = c3.generate({
	    bindto: '#englishOnlyByRace2',

                size: {
                    height: 375
                },
                bar: {
                    width: 15
                },
                padding: {
                    left: 100
                },
                color: {
                    pattern: ['#FABF62', '#ACB6DD']
                },
                data: {
      
                    x: 'x',
                    columns:
                        [
                      ['x', 'Anglo American', 'Native Hawaiian or other Pacific Islander', 'Hispanic or Latino', 'Black or African American', 'Asian', 'American Indian or Alaska Native'],
                      ['English Only Speaker', 67, 13, 12, 11, 7, 6]
                      ],

                    type: 'bar',
                   
                    color: function(inColor, data) {
                        var colors = [ '#0066ff', '#0066ff', '#33cc33', '#33cc33', '#33cc33', '#ff9900'];
                        if(data.index !== undefined) {
                            return colors[data.index];
                        }

                        return inColor;
                    }
                },

                 grid: {
      
        y: {
            show: true
        }
    },

                axis: {
                    y: {

                        max: 99,
                        min: 1,
            tick:{
            format: function(d){
                                return d + '%';
                               }
                 }
        },

                    rotated: true,
                    x: {
                        type: 'category'
                    }
                },
                tooltip: {
                    grouped: false
                },
                legend: {
                    show: false
                }
            });

*/







//English Only Speaking US Citizens by Race
// http://www.census.gov/data/tables/2000/dec/phc-t-42.html

/* 
     Census data collected in the year 2000 shows from a sample of 
     262,375,152 showed that on average 23% (60,361,574) of all participants 
     only spoke english. The chart illustrates the proportion of english only
     speakers by Race. 

     http://www.census.gov/data/tables/2000/dec/phc-t-42.html


Total Surveyed 262375152 


Anglo American: 175912498 67%
Native Hawaiian or other Pacific Islander: 347400 13%
Hispanic or Latino: 31569576 12%
Black or African American: 29396721 11%
Asian: 2003642 7% 
American Indian or Alaska Native: 1611831 6%
*/