const CURRENCY_CODE_USD: string = 'USD';
const CURRENCY_CODE_EUR: string = 'EUR';
const CURRENCY_CODE_GPB: string = 'GPB';
export const CURRENCIES_CODE: string[] = [
    CURRENCY_CODE_USD,
    CURRENCY_CODE_EUR,
    CURRENCY_CODE_GPB,
]

export class SettingHelper {
    static getCurrencyName(currencyCode: string): string {
        const currencyNames: { [key: string]: string } = {
            [CURRENCY_CODE_USD]: 'dollar',
            [CURRENCY_CODE_EUR]: 'euro',
            [CURRENCY_CODE_GPB]: 'pound',
        };

        if (!(currencyCode in currencyNames)) {
            throw new Error('Unknown Currency');
        }
        return currencyNames[currencyCode];
    }

    static getCurrencyCode(currencyName: string): string {
        const currencyNames: { [key: string]: string } = {
            ['dollar']: CURRENCY_CODE_USD,
            ['euro']: CURRENCY_CODE_EUR,
            ['pound']: CURRENCY_CODE_GPB,
        };

        if (!(currencyName in currencyNames)) {
            throw new Error('Unknown Currency');
        }
        return currencyNames[currencyName];
    }
}
