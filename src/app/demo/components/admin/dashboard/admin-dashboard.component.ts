import { Component, OnInit } from '@angular/core';
import { AdminDashboardStatsDto } from "../../../dtos/dashboard/admin-dashboard-stats.dto";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent implements OnInit {
  chartData: any;
  chartOptions: any;
  stats!: AdminDashboardStatsDto;

  totalUnpaidAmount: number = 0;
  unpaidMonthsCount: number = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<AdminDashboardStatsDto>(`${environment.apiBaseUrl}/admin/dashboard`).subscribe(data => {
      this.stats = data;

      this.totalUnpaidAmount = this.stats.refunds.monthlyRefunds
        .reduce((sum, r) => sum + (r.unpaidAmount || 0), 0);

      this.unpaidMonthsCount = this.stats.refunds.monthlyRefunds
        .filter(r => (r.unpaidAmount || 0) > 0).length;

      this.initChart();
    });
  }

  initChart() {
    if (!this.stats) return;

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const borderColor = documentStyle.getPropertyValue('--surface-border');
    const textMutedColor = documentStyle.getPropertyValue('--text-color-secondary');

    const labels = this.stats.refunds.monthlyRefunds.map(r => {
      const [year, month] = r.month.split('-');
      return new Date(+year, +month - 1).toLocaleString('default', { month: 'short' });
    });

    this.chartData = {
      labels,
      datasets: [
        {
          type: 'bar',
          label: 'Remboursé',
          backgroundColor: documentStyle.getPropertyValue('--green-700'),
          data: this.stats.refunds.monthlyRefunds.map(r => r.refundedAmount),
          barThickness: 32
        },
        {
          type: 'bar',
          label: 'Impayé',
          backgroundColor: documentStyle.getPropertyValue('--red-300'),
          data: this.stats.refunds.monthlyRefunds.map(r => r.unpaidAmount),
          barThickness: 32
        },
        {
          type: 'bar',
          label: 'En retard',
          backgroundColor: documentStyle.getPropertyValue('--orange-200'),
          data: this.stats.refunds.monthlyRefunds.map(r => r.lateAmount),
          barThickness: 32
        },
        {
          type: 'bar',
          label: 'Attendu',
          backgroundColor: documentStyle.getPropertyValue('--green-300'),
          data: this.stats.refunds.monthlyRefunds.map(r => r.expectedAmount),
          borderRadius: {
            topLeft: 8,
            topRight: 8,
            bottomLeft: 0,
            bottomRight: 0
          },
          borderSkipped: false,
          barThickness: 32
        },
      ]
    };

    this.chartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: { color: textColor }
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: { color: textMutedColor },
          grid: { color: 'transparent', borderColor: 'transparent' }
        },
        y: {
          stacked: true,
          ticks: { color: textMutedColor },
          grid: {
            color: borderColor,
            borderColor: 'transparent',
            drawTicks: false
          }
        }
      }
    };
  }
}
