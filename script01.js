document.addEventListener("DOMContentLoaded", function() {
var ctx = document.getElementById('nationality').getContext('2d');
var nationalityChart = new Chart(ctx, {
type: 'doughnut',
data: {
labels: ['Русские', 'Американцы', 'Китайцы', 'Индийцы'],
datasets: [{
label: 'Национальности сотрудников',
data: [30, 25, 20, 25],
backgroundColor: [
'rgba(255, 99, 132, 0.6)',
'rgba(54, 162, 235, 0.6)',
'rgba(255, 206, 86, 0.6)',
'rgba(75, 192, 192, 0.6)'
]
}]
},
options: {
title: {
display: true,
text: 'Распределение национальностей сотрудников'
},
}
});
});