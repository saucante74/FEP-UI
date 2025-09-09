import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'refundStatusLabel'
})
export class RefundStatusLabelPipe implements PipeTransform {

    private statusMap: { [key: string]: string } = {
        PENDING: 'En attente',
        SUBMITTED: 'Soumis',
        APPROVED: 'Approuvé',
        COMPLETED: 'Terminé',
        CANCELLED: 'Annulé',
        PAID: 'Payé',
        LATE: 'En retard'
    };

    transform(value: string): string {
        return this.statusMap[value] || value;
    }
}
