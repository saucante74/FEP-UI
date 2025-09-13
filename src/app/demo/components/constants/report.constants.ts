export interface ReportReasonOption {
    code: string;
    label: string;
}

export const REPORT_REASONS: ReportReasonOption[] = [
    { code: 'FRAUD', label: 'Fraude' },
    { code: 'SPAM', label: 'Spam' },
    { code: 'HARASSMENT', label: 'Harcèlement' },
    { code: 'ABUS', label: 'Abus' },
    { code: 'OTHER', label: 'Other' },
];

export const REPORT_STATUSES = [
    { code: true, label: 'Ouvert' },
    { code: false, label: 'Fermé' }
];
