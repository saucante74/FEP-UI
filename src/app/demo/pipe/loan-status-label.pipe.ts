import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'loanStatusLabel'
})
export class LoanStatusLabelPipe implements PipeTransform {

    private statusMap: { [key: string]: string } = {
        PENDING: 'En attente de validation par l\'administrateur',
        IN_PROGRESS: 'En cours',
        COMPLETED: 'Terminé',
        REJECTED: 'Rejeté',
        APPLIED: 'Candidature en cours',
        VALIDATED: 'Prêt validé par l\'administrateur',
    };

    transform(value: string): string {
        return this.statusMap[value] || value;
    }
}
