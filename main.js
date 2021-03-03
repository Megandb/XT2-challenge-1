
Chart.defaults.global.defaultFontColor = 'white';
Chart.defaults.global.defaultFontFamily = 'Arial';

var ctx = document.getElementById('firstChart').getContext('2d');
var firstChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2 months in', '4 months in', '6 months in', '8 months in', '10 months in', '12 months in', '14 months in'],

        datasets: [{
            label: 'water supply in Liters',
            data: [89404, 69000, 54000, 44702, 20000, 10000, 2106, 1000],
            backgroundColor: [
                'rgba(2, 33, 91, 0.7)',
                'rgba(4, 52, 147, 0.7)',
                'rgba(33, 90, 202, 0.7)',
                'rgba(67, 124, 236, 0.7)',
                'rgba(144, 180, 249, 0.7)',
                'rgba(217, 230, 255, 0.7)',
                'rgba(235, 242, 255, 0.7)'
            ],
            borderColor: [
                'rgba(2, 33, 91, 1)',
                'rgba(4, 52, 147, 1)',
                'rgba(33, 90, 202, 1)',
                'rgba(67, 124, 236, 1)',
                'rgba(144, 180, 249, 1)',
                'rgba(217, 230, 255, 1)',
                'rgba(235, 242, 255, 1)'
            ],
            borderWidth: 1

        }]
    },
    options: {

        scales: {

            yAxes: [{

                ticks: {
                    beginAtZero: true
                }
            
            }]
        }

    }
});

var ctx = document.getElementById('secondChart').getContext('2d');
var secondChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2 months in', '4 months in', '6 months in', '8 months in', '10 months in', '12 months in', '14 months in'],

        datasets: [{
            label: 'Meat calories',
            data: [55156500, 37277000, 34397500, 31518000, 23638500, 15759000, 7879500, 5032800],
            backgroundColor: [
                'rgba(164, 74, 63, 1)',
                'rgba(164, 74, 63, 1)',
                'rgba(164, 74, 63, 1)',
                'rgba(164, 74, 63, 1)',
                'rgba(164, 74, 63, 1)',
                'rgba(164, 74, 63, 1)',
                'rgba(164, 74, 63, 1)'
            ],
            borderColor: [
                'rgba(164, 74, 63, 1)',
                'rgba(164, 74, 63, 1)',
                'rgba(164, 74, 63, 1)',
                'rgba(164, 74, 63, 1)',
                'rgba(164, 74, 63, 1)',
                'rgba(164, 74, 63, 1)',
                'rgba(164, 74, 63, 1)'
            ],


            borderWidth: 1
        },
        {
            label: 'Vegetables calories',
            data: [42156500, 32030498, 29908300, 23047250, 18039674, 14039384, 3049500, 209485],
            backgroundColor: [
                'rgba(255, 221, 210, 1)',
                'rgba(255, 221, 210, 1)',
                'rgba(255, 221, 210, 1)',
                'rgba(255, 221, 210, 1)',
                'rgba(255, 221, 210, 1)',
                'rgba(255, 221, 210, 1)',
                'rgba(255, 221, 210, 1)'
            ],
            borderColor: [
                'rgba(255, 221, 210, 1)',
                'rgba(255, 221, 210, 1)',
                'rgba(255, 221, 210, 1)',
                'rgba(255, 221, 210, 1)',
                'rgba(255, 221, 210, 1)',
                'rgba(255, 221, 210, 1)',
                'rgba(255, 221, 210, 1)'
            ],


            borderWidth: 1
        }

        ]
    },
    options: {

        scales: {

            yAxes: [{

                ticks: {
                    beginAtZero: true
                }
            
            }]
        }

    }
});

var ctx = document.getElementById('thirdChart').getContext('2d');
var thirdChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Fuel left', 'Fuel used '],

        datasets: [{
            label: 'Fuel',
            data: [69, 31],
            backgroundColor: [
                'rgba(196, 69, 54, 1)',
                'rgba(119, 46, 37, 1)'
                ,
            
            ],
            borderColor: [
                'rgba(196, 69, 54, 1)',
                'rgba(119, 46, 37, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {

        scales: {

        }

    }
});
