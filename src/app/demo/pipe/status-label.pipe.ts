import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'statusLabel'
})
export class StatusLabelPipe implements PipeTransform {

    private statusMap: { [key: string]: string } = {
        PENDING: 'En attente de validation',
        IN_PROGRESS: 'En cours',
        COMPLETED: 'Terminé',
        REJECTED: 'Rejeté',
    };

    transform(value: string): string {
        return this.statusMap[value] || value;
    }
}
