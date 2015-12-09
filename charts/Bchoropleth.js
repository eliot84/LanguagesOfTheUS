

google.load('visualization', '1', {'packages': ['geochart']});
google.setOnLoadCallback(drawStateOtherLanguages);

function drawStateOtherLanguages() {
  var data = google.visualization.arrayToDataTable([
['State', 'Farms'],
    ['Alabama', 3],
    ['Alaska', 1],
    ['Arizona', 20],
    ['Arkansas', 2],
    ['California', 180],
    ['Colorado', 10],
    ['Conneticut', 9],
    ['Delaware', 1],
    ['Florida', 60],
    ['Geogria', 15],
    ['Hawaii', 4],
    ['Idaho', 2],
    ['Illinois', 33],
    ['Indiana', 6],
    ['Iowa', 3],
    ['Kansas', 4],
    ['Kentucky', 2],
    ['Louisiana', 4],
    ['Maine', 1],
    ['Maryland', 11],
    ['Massachusetts', 17],
    ['Michigan', 10],
    ['Minnesota', 7],
    ['Mississippi', 1],
    ['Missouri', 4],
    ['Montana', 1],
    ['Nebraska', 2],
    ['Nevada', 9],
    ['New Hampshire', 1],
    ['New Jersey', 30],
    ['New Mexico', 2], ///
    ['New York', 67],
    ['North Carolina', 12],
    ['North Dakota', 0],
    ['Ohio', 9],
    ['Oklahoma', 4],
    ['Oregon', 7],
    ['Pennsylvania', 15],
    ['Rhode Island', 3],
    ['South Carolina', 4],
    ['South Dakota', 1],
    ['Tennessee', 5],
    ['Texas', 100],
    ['Utah', 4],
    ['Vermont', 1],
    ['Virginia', 14],
    ['Washington', 14],
    ['West Virginia', 1],
    ['Wisconsin', 6],
    ['Wyoming', 1]
  ]);
  
  var opts = {
    region: 'US',
    displayMode: 'regions',
    resolution: 'provinces',
      width: '100%',
        height: '100%',
 chartArea: {
            left: "1%",
            top: "1%",
            height: "94%",
            width: "94%"
        },
    colorAxis: {colors: ['#91D8F0', '#1426F0']}


  };
  var geochart = new google.visualization.GeoChart(
      document.getElementById('stateOtherLanguage'));
  geochart.draw(data, opts);
};

