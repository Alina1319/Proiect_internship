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

function createChart(softS, hardS) {
  
  var ctx = document.getElementById('chartSkillsAverage').getContext('2d');
  var ctx2 = document.getElementById('chartSkillsAverageHard').getContext('2d');
  
  //First graph

  // new Chart(ctx, {
  //   type: 'line',
  //   data: {
  //     labels: ['Week1', 'Week2', 'Week3', 'Week4'],
  //     datasets: [{
  //       label: 'Soft Skills',
  //       data: softSkills,
  //       backgroundColor: [
  //       'rgba(255, 255, 255, 0)'
  //       ],
  //       borderColor: [
  //       'rgba(255, 0, 0, 1)'
  //       ],
  //       borderWidth: 2
  //       }]
  //   },
  //   options: {
  //     responsive: true,
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero: true
  //         }
  //       }]
  //     }
  //   }
  // });

  // new Chart(ctx2, {
  //   type: 'line',
  //   data: {
  //     labels: ['Week1', 'Week2', 'Week3', 'Week4'],
  //     datasets: [{
  //       label: 'Hard Skills',
  //       data: hardSkills,
  //       backgroundColor: [
  //       'rgba(255, 255, 255, 0)'
  //       ],
  //       borderColor: [
  //       'rgba(255, 0, 0, 1)'
  //       ],
  //       borderWidth: 2
  //       }]
  //   },
  //   options: {
  //     responsive: true,
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero: true
  //         }
  //       }]
  //     }
  //   }
  // });

  let gradientFillBarChart = ctx.createLinearGradient(500, 0, 100, 0);
  //Grapgh design intern page
  gradientFillBarChart.addColorStop(1, 'rgba(42,67,101)');
  gradientFillBarChart.addColorStop(0.2, '#f49080');
  gradientFillBarChart.addColorStop(0.7, 'rgba(50,90,146)');
    new Chart(ctx, {
        type: 'horizontalBar',
        data: {
          labels: ['Week1', 'Week2', 'Week3', 'Week4'],
          datasets: [{
            label: 'Average Soft Skills',
            data: softSkills,
            borderColor: gradientFillBarChart,
            backgroundColor:gradientFillBarChart,
            borderWidth: 2,
            }]
        },
        options: {
          legend: {
              labels:{
                fontColor: "black",
                fontSize: 14,
              }
            },
        responsive: true,
          scales: {
              yAxes: [{
                barPercentage: 0.5,
                  ticks: {
                      padding:20,
                      fontColor: "black",
                      fontSize:14,
                  },
                  gridLines: {
                    color: 'rgba(130, 132, 149, 0.30)',
                }
              }],
              xAxes: [{
                  ticks: {
                      fontColor: "black",
                      min: 0,
                      max: 10,
                      stepSize: 1,
                      padding:10,
                      fontSize:14,
                  },
            }]
          }
      }
      });
  
  
      new Chart(ctx2, {
        type: 'horizontalBar',
        data: {
          labels: ['Week1', 'Week2', 'Week3', 'Week4'],
          datasets: [{
            label: 'Average Hard Skills',
            data: hardSkills,
            borderColor: gradientFillBarChart,
            backgroundColor:gradientFillBarChart,
            borderWidth: 2,
            }]
        },
        options: {
          legend: {
              labels:{
                fontColor: "black",
                fontSize: 14,
              }
            },
        responsive: true,
          scales: {
              yAxes: [{
                barPercentage: 0.5,
                  ticks: {
                      padding:20,
                      fontColor: "black",
                      fontSize:14,
                  },
                  gridLines: {
                    color: 'rgba(130, 132, 149, 0.30)',
                }
              }],
              xAxes: [{
                  ticks: {
                      fontColor: "black",
                      min: 0,
                      max: 10,
                      stepSize: 1,
                      padding:10,
                      fontSize:14,
                  },
            }]
          }
      }
      });





  console.log("SOFT SKILLS AVERAGE: "+softS+"\n HARD SKILLS AVERAGE: "+hardS);
}

console.log("_ api-spreadsheets.js LOADED _");