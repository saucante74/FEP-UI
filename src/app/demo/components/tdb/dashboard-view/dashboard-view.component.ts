import { Component, OnInit } from '@angular/core';
import { DashboardStatsDTO } from "../../../models/dashboard/dashboard-stats.dto";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard-view.component.html'
})
export class DashboardViewComponent implements OnInit {
    chartData: any;
    chartOptions: any;
    stats!: DashboardStatsDTO;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get<DashboardStatsDTO>('/api/dashboardStats')
            .subscribe(data => {
                this.stats = data;

                const labels = data.monthlyRefunds.map(r => {
                    const [year, month] = r.month.split('-');
                    return new Date(+year, +month - 1).toLocaleString('default', { month: 'short' });
                });

                const personalWallet = data.monthlyRefunds.map(r => r.totalAmount);
                const corporateWallet = data.monthlyRefunds.map(r => r.totalAmount * 0.75);
                const investmentWallet = data.monthlyRefunds.map(r => r.totalAmount * 0.5);

                this.chartData = {
                    labels,
                    datasets: [
                        {
                            label: 'Personal Wallet',
                            backgroundColor: '#42A5F5',
                            data: personalWallet
                        },
                        {
                            label: 'Corporate Wallet',
                            backgroundColor: '#66BB6A',
                            data: corporateWallet
                        },
                        {
                            label: 'Investment Wallet',
                            backgroundColor: '#FFA726',
                            data: investmentWallet
                        }
                    ]
                };

                this.chartOptions = {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                color: '#495057',
                                font: {
                                    size: 14
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            stacked: false,
                            ticks: {
                                color: '#495057',
                                font: {
                                    size: 12
                                }
                            },
                            grid: {
                                display: false
                            }
                        },
                        y: {
                            stacked: false,
                            ticks: {
                                color: '#495057',
                                font: {
                                    size: 12
                                }
                            },
                            grid: {
                                color: '#ebedef'
                            }
                        }
                    }
                };
            });
    }
}
