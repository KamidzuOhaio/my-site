 const years = ['2020', '2021', '2022', '2023', '2024'];
        const numberOfEmployees = [3, 240, 560, 1234, 5555];

        const ctx = document.getElementById('employeeChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: years,
                datasets: [{
                    label: 'Количество работников',
                    data: numberOfEmployees,
                    backgroundColor: 'lightred',
                    borderColor: 'red',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
 const days = Array.from({ length: 30 }, (_, i) => i + 1);
        const stockPrices = days.map(() => Math.floor(Math.random() * 100) + 50);

        const ctx2 = document.getElementById('stockPriceChart').getContext('2d');
        const stockPriceChart = new Chart(ctx2, {
            type: 'line',
            data: {
                labels: days,
                datasets: [{
                    label: 'Цена акции компании',
                    data: stockPrices,
                    fill: false,
                    borderColor: 'green',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'День'
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Цена акции'
                        }
                    }
                }
            }
        });