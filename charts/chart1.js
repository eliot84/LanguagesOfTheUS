    console.log('yo yo yo');






var chart = c3.generate({
	 bindto: '#chartA',
    data: {
        order: 'desc', 
        x: 'x',
       xFormat: '%Y', // 'xFormat' can be used as custom format of 'x'
       columns: [
            ['x', '1980', '1990', '2000', '2010'],
                //Spoke a language other than English at home 	23060040	        31844979	     46951595	     59542596
            //['Spanish or Spanish Creole',                   	 11116194,	         17345064,	      28101052,	      36995602],
['Chinese',	                                           630806,	          1319462,	       2022143,	       2808692],
['French',                                      	  1550751,	          1930404,	       2097206,        2069352],
['Tagalog',	                                           474150,	           843251,	       1224241,	       1573720],
['Vietnamese',	                                       197588,	           507069,	       1009627,	       1381488],
['Korean',	                                           266280,	           626478,        	894063,	       1137325],
['German',	                                          1586593,	          1547987,	       1383442,	       1067651],
['Russian',	                                           173226,	           241798,         	706242,      	854955],
['Italian',	                                          1618344,         	  1308648,	       1008370,	        725223],
['Portuguese',                                         351875,	           430610,	        564630,     	688326],
['Polish',	                                           820647,	           723483,	        667414,	        608333],
['Japanese',	                                       336318,	           427657,	        477997,	        443497],
['Persian',	                                           106992,	           201865,	        312085,	        381408],
['Greek',	                                           401443,         	   388260,	        365436,	        307178],
['Serbo-Croatian',	                                   150255,	           142078,        	233865,	        284077],
['Armenian',	                                       100634,	           149694,	        202708,      	240402],
['Yiddish',	                                           315953,	           213064,	        178945,	        154763]
        ]

    },
      tooltip: {
        grouped: false // Default true
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d'
            }
        }
    }
});

setTimeout(function () {
    chart.load({
        columns: [
          //  ['data3', 400, 500, 450, 700, 600]
        ]
    });
}, 1000);






var eightys = 
[
['Chinese', 630806],
['French', 1550751],
['Tagalog', 474150],
['Vietnamese', 197588],
['Korean', 266280],
['German', 1586593],
['Russian', 173226],
['Italian', 1618344],
['Portuguese', 351875],
['Polish', 820647],
['Japanese', 336318],
['Persian', 106992],
['Greek', 401443],
['Serbo-Croatian', 150255],
['Armenian', 100634],
['Yiddish', 315953]
]        







eightys.sort(function (a,b){
a = a[1];
b = b[1];
return a == b ? 0 : (a > b ? -1 : 1)

});

console.log(eightys[0]);



   $('.showIt').html(eightys[4]); 


//document.write(eightys[1] + "<br />");







/*
	                                           	1980               	1990	         2000	         2010
	                                           	
Spoke a language other than English at home 	23060040	        31844979	     46951595	     59542596
Spanish or Spanish Creole                   	11116194	        17345064	     28101052	     36995602
Chinese	                                         630806	         1319462	      2022143	      2808692
French                                      	 1550751	         1930404	      2097206       2069352
Tagalog	                                           474150	           843251	      1224241	      1573720
Vietnamese	                                       197588	           507069	      1009627	      1381488
Korean	                                           266280	           626478         	894063	      1137325
German	                                         1586593	         1547987	      1383442	      1067651
Russian	                                           173226	           241798         	706242     	854955
Italian	                                         1618344         	 1308648	      1008370	        725223
Portuguese                                      351875	           430610	        564630      	688326
Polish	                                           820647	           723483	        667414	        608333
Japanese	                                       336318	           427657	        477997	        443497
Persian	                                           106992	           201865	        312085	        381408
Greek	                                           401443         	   388260	        365436	        307178
Serbo-Croatian	                                   150255	           142078         	233865	        284077
Armenian	                                       100634	           149694	        202708      	240402
Yiddish	                                           315953	           213064	        178945	        154763

*/

   