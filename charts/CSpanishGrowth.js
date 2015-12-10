//Spanish Prominence

/*
var chart = c3.generate({
		bindto: '#spanishGrowth',
    data: {
        columns: [              
        ['x', '1980-01-01', '1990-01-01', '2000-01-01', '2010-01-01'],
        ['Spanish', 23, 31.8, 46.9, 59.5],
        ['Other non English', 1.6, 1.9, 2, 2.8]
        ],
       type: 'bar',
        groups: [
            ['Spanish', 'Other non English']
        ]
    },
     grid: {
    
        y: {
            show: true
        }
    },
    axis: {
    	  x: {
            type: 'timeseries',
            tick: {
                format: '%Y'
            }
     
        }
    }
}); */

///




var spanishGrowth = c3.generate({
	bindto: '#spanishGrowth',
    data: {
    	  x: 'x',
        columns: [
      ['x', '1980-01-01', '1990-01-01', '2000-01-01', '2010-01-01'],
        ['Other non English', 1.6, 1.9, 2, 2.8],
        ['Spanish', 23, 31.8, 46.9, 59.5]   
        ],
        type: 'bar'
    },
     legend: {
       // position: 'right'
    },

    color: {
        pattern: ['#ccff99', '#99ccff', '#ffcccc']
    },

    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    },
     grid: {
    
        y: {
            show: true
        }
    },
    axis: {

    	y: {
    		label: { 
    			text: 'Millions',
    			position: 'outer-middle',
    			   }
    		
    	         
    	},

       x: {
            type: 'timeseries',
            tick: {
                format: '%Y'
            }
     
        }
}
});

