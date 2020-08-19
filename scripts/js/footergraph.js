//data from google sheets

let vectorSoft = [];
let vectorHard = [];
const URL = "https://spreadsheets.google.com/feeds/cells/1QeLq2Xf2RWZE3LJyhd-tDNALVUGAgrt5K5jXwnCGXz4/oryipo/public/basic?alt=json";
fetch(URL)
  .then(response => response.json())
  .then(data => {
    // SOFT SKILLS
    let j = 0;
    for (let i = 127; i < 140; i++) {
      if(j < 4) {
        vectorSoft.push(parseFloat(data.feed.entry[i].content.$t));
      }
      j++;
    }
    //HARD SKILLS
    j = 0;
    for (let i = 253; i < 266; i++) {
      if(j < 4) {
        vectorHard.push(parseFloat(data.feed.entry[i].content.$t));
      }
      j++;
    }


  //Graph design

  let ctx = document.getElementById('footerChart').getContext('2d');
  let gradientFill = ctx.createLinearGradient(0, 0, 0, 300);
  gradientFill.addColorStop(0.4, 'rgba(93, 62, 179, 0.4)');
  gradientFill.addColorStop(0.6, 'rgba(70, 37, 161, 0.3)');
  gradientFill.addColorStop(1, 'rgba(128,0,128, 0)');

  let gradientFill2 = ctx.createLinearGradient(0, 0, 0, 500);

  gradientFill2.addColorStop(0.4, 'rgba(255,0,255, 0.4)');
  gradientFill2.addColorStop(0.6, 'rgba(148,0,211, 0.3)');
  gradientFill2.addColorStop(1,'rgba(128,0,128, 0)');

let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Week1', 'Week2', 'Week3', 'Week4'],
        datasets: [{
            label: 'Soft Skills', 
            tension: 0,
              borderColor: '#4154FF',
              pointBorderColor: 'white',
              pointBackgroundColor: 'white',
              pointBorderWidth: 1,     
              fill: true,
              backgroundColor: gradientFill,
              borderWidth: 2,
              data: vectorSoft,
        }, 
          { label: 'Hard skills',
            tension: 0,
              borderColor: '#FF00FF',
              pointBorderColor: 'white',
              pointBackgroundColor: 'white',
              pointBorderWidth: 1,
              fill: true,
              backgroundColor: gradientFill2,
              borderWidth: 2,
              data: vectorHard,
        }]
    },
    options: {
        legend: {
            labels:{
              fontColor: "rgba(192,192,192,1)",
            //   fontStyle: "bold",
              fontSize: 13.5,
            }
          },
      responsive: true,
      linearGradientLine: true,
        scales: {
          legend: {
            fontColor: "rgba(192,192,192,0.7)",
            fontStyle: "bold",
            
          },
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 10,
                    stepSize: 1,
                    fontColor: "rgba(192,192,192,0.7)",
                    padding:20,
                    
                },
                gridLines: {
                  color: 'rgba(130, 132, 149, 0.30)',
                  lineWidth: 1,

              }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "rgba(192,192,192,0.7)",
                },
                gridLines: {
                    color: 'rgba(200, 200, 200, 0.08)',
                    lineWidth: 1,
              },
          }]
        }
    }
});
});