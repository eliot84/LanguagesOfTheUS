

//Out of 2154235576 participants




var mfPieChart = c3.generate({
bindto: '#mfPieChart',
    data: {
        // iris data from R
                

        columns: [
            ['Male', 48],
            ['Female', 51],
        ],
        type : 'pie'
    }
});

