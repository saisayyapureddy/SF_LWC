import { LightningElement } from 'lwc';
import LOCALE from '@salesforce/i18n/locale';
import CURRENCY from '@salesforce/i18n/currency'

export default class InternalisationDemo extends LightningElement {

    number = 543432.343;
    formatedNumber = new Intl.NumberFormat(LOCALE,{
        style:'currency',
        currency:CURRENCY,
        currencyDisplay:'symbol'
    }).format(this.number);
}