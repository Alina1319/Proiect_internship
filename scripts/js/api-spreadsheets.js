/*  DON'T DELETE !!!!
https://spreadsheets.google.com/feeds/worksheets/1QeLq2Xf2RWZE3LJyhd-tDNALVUGAgrt5K5jXwnCGXz4/public/basic?alt=json
*/

export var softSkills = [];
export var hardSkills = [];

export function getDataFromSpreadsheet(url) {

  fetch(url)
  .then(response => response.json())
  .then(data => {
  		//console.log(data.feed.title.$t);
   		//console.log("SOFT SKILLS:");
   		for (var i = 85; i < 98; i++) {
        softSkills.push(parseFloat(data.feed.entry[i].content.$t));
   			//console.log(data.feed.entry[i].content);
   		}
   		//console.log("HARD SKILLS:");
   		for (var i = 154; i < 167; i++) {
        hardSkills.push(parseFloat(data.feed.entry[i].content.$t));
   			//console.log(data.feed.entry[i].content);
   		}
      createChart(softSkills, hardSkills);
   });
}


// TODO: EXPORT createChart and create charts.js
function createChart(softS, hardS) {
  
  var ctx = document.getElementById('chartSkillsAverage').getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Week1', 'Week2', 'Week3', 'Week4'],
      datasets: [{
        label: 'Soft Skills',
        data: softSkills,
        backgroundColor: [
        'rgba(255, 255, 255, 0)'
        ],
        borderColor: [
        'rgba(255, 0, 0, 1)'
        ],
        borderWidth: 2
      }, {
        label: 'Hard skills',
        data: hardSkills,
        backgroundColor: [
        'rgba(255, 255, 255, 0)'
        ],
        borderColor: [
        'rgba(0, 0, 255, 1)'
        ],
        borderWidth: 2
      }]
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  console.log("SOFT SKILLS AVERAGE: "+softS+"\n HARD SKILLS AVERAGE: "+hardS);
}

console.log("_ api-spreadsheets.js LOADED _");