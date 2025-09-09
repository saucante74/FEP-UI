import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'roleLabel'
})
export class RoleLabelPipe implements PipeTransform {

    private roleMap: { [key: string]: string } = {
        LENDER: 'Prêteur',
        BORROWER: 'Emprunteur',
        ADMIN: 'Administrateur'
    };

    transform(value: string): string {
        return this.roleMap[value] || value;
    }
}
