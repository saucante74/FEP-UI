export class ChartHelper {

    static initChart(labels: string[], datas: number[]): [chartOptions: any, chartData: any] {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        const chartData = {
            labels: labels,
            datasets: [
                {
                    label: '',
                    data: datas,
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: .1,
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                }
            ]
        };

        const chartOptions = {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        autoSkip: true,
                        maxRotation: 0,
                        minRotation: 0,
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        return [chartOptions, chartData];
    }

    static initBarChart(): [chartOptions: any, chartData: any] {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const barData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: documentStyle.getPropertyValue('--primary-500'),
                    borderColor: documentStyle.getPropertyValue('--primary-500'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };

        const barOptions = {
            plugins: {
                legend: {
                    display: false,
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColor,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
            }
        };

        return [barOptions, barData];
    }

    static initPieChart(labels: string[], datas: number[]): [chartOptions: any, chartData: any] {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        const pieData = {
            labels: labels,
            datasets: [
                {
                    data: datas,
                    backgroundColor: [
                        documentStyle.getPropertyValue('--primary-900'),
                        documentStyle.getPropertyValue('--primary-700'),
                        documentStyle.getPropertyValue('--primary-500'),
                        documentStyle.getPropertyValue('--primary-300')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--primary-100'),
                        documentStyle.getPropertyValue('--primary-100'),
                        documentStyle.getPropertyValue('--primary-100')
                    ]
                }]
        };

        const pieOptions = {
            cutout: '70%',
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                },
                tooltip: {
                    displayColors: false,
                    callbacks: {
                        label: function(context){
                            var data = context.dataset.data,
                                label = context.label,
                                currentValue = context.raw,
                                total: number = 0;

                            for( var i: number = 0; i < data.length; i++ ){
                                total += data[i];
                            }
                            var percentage: number = parseFloat((currentValue/total*100).toFixed(1));

                            return label + ": " + percentage + '%';
                        }
                    }
                },
            },

        };

        return [pieOptions, pieData];
    }



    static formatDate(dateString: string): string {
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        const date = new Date(dateString);
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        let formattedDate: string;
        if (monthIndex === 0) {
            formattedDate = year.toString();
        } else {
            formattedDate = monthIndex.toString();
        }

        return formattedDate;
    }
}
