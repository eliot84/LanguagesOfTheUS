


var gradRates = c3.generate({
	bindto: '#gradRates',
    data: {
    	  x: 'x',
        columns: [
            ['x', '2011-01-01', '2012-01-01', '2013-01-01'],
            ['All Students', 71, 75, 75.6],
            ['Low Income Students', 60, 65, 67]
        ],
        type: 'bar'
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
    		tick:{
    		format: function(d){
    		                	return d + '%';
    		                   }
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

setTimeout(function () {
    gradRates.load({
        columns: [
            ['Children with Disabilities', 44, 48, 52.5]
        ]
    });
}, 1000);




/*
// Florida High School Graduation Rates for All Students pg 77

{
	2011: 71,
	2012: 75,
	2013: 75.6
}


//For Low Income Students

{
	2011: 60,
	2012: 65,
	2013: 67
}


//Children with Disabilities

{
	2011: 44,
	2012: 48,
	2013: 52.5
}




// http://www.governing.com/gov-data/high-school-graduation-rates-by-state.html



//SCHOOL DROPOUTS PG 27

{
	2011: 144,
	2010: 170,


}*/