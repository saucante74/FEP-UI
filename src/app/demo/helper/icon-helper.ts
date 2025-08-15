const TYPE_REAL_ESTATE = 'Real Estate';
const TYPE_STOCK = 'Stock';
const TYPE_CRYPTOCURRENCY = 'Cryptocurrency';
const TYPE_SAVINGS = 'Savings';
const ICON_REAL_ESTATE = 'pi pi-home';
const ICON_STOCK = 'pi pi-chart-line';
const ICON_CRYPTOCURRENCY = 'pi pi-compass';
const ICON_DEFAULT = 'pi pi-dollar';

export class IconHelper {
    static getIcon(type: string): string {
        if (TYPE_REAL_ESTATE === type) {
            return ICON_REAL_ESTATE;
        }
        if (TYPE_STOCK === type) {
            return ICON_STOCK;
        }
        if (TYPE_CRYPTOCURRENCY === type) {
            return ICON_CRYPTOCURRENCY;
        }

        return ICON_DEFAULT;
    }
}
