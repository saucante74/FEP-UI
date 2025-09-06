import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'frenchDate'
})
export class FrenchDatePipe implements PipeTransform {
    transform(value: string | Date, format: 'short' | 'long' = 'long'): string {
        if (!value) return '';

        const date = value instanceof Date ? value : new Date(value);

        if (format === 'short') {
            return date.toLocaleDateString('fr-FR');
        }

        return date.toLocaleDateString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}
