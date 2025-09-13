import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reportReasonLabel'
})
export class ReportReasonLabelPipe implements PipeTransform {

    private statusMap: { [key: string]: string } = {
        FRAUD: 'Fraude',
        SPAM: 'Spam',
        HARASSMENT: 'Harcèlement',
        ABUSE: 'Abus',
        OTHER: 'Other',
    };

    transform(value: string): string {
        return this.statusMap[value] || value;
    }
}
