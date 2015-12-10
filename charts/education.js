//Educational attainment does not necessarily correlate directly to multilingualism

//Defining further we can see that through educational attainment
//151,154,979 participants with educational attainment only spoke english.


var education = c3.generate({
        bindto: '#education',

    data: {
      x: 'x',
        columns: [
           /* ['x', 'Black or African American', 'Anglo American', 'Native Hawaiian or other Pacific Islander', 'Hispanic or Latino', 'Black or African American', 'Asian', 'American Indian or Alaska Native'],
            ['English Only', 88, 56, 21, 93, 21, 71],
            ['Multilingual', 12, 44, 79, 7, 79, 29]*/

           ['x', 'Less than 9th Grade', 'Some High School', 'High School Graduate', 'Some College', 'Associate', 'Bachelor', 'Graduate/Professional Degree'],
                      ['English Only Speaker', 4.8, 11, 30, 21, 6, 16, 8.7]
        ],
        type: 'bar',
        groups: [
            ['English Only', '2nd Language']
        ]
    },
    grid: {
        y: {
            show: true,

            lines: [{value:0}]
        }
    },
    axis: {
           rotated: true,
             y: {
                tick:{
                     format: function(d){
                                return d + '%';
                               }
                 }
             },


             x: {
                        type: 'category'
                    }
    },

});
