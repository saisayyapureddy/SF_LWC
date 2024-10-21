import { api, LightningElement, wire } from 'lwc';

import { getRecord } from 'lightning/uiRecordApi';
import { getFieldValue,getFieldDisplayValue } from 'lightning/uiRecordApi';

import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type';
import ACCOUNT_OWNER from '@salesforce/schema/Account.Owner.Name';
import REVENUE from '@salesforce/schema/Account.AnnualRevenue';

export default class WireGetFieldAndFieldDisplayValues extends LightningElement {

    @api recordId;
    acnt_name;
    acnt_type;
    acnt_owner;
    acnt_revenue;


    @wire(getRecord, { recordId: '$recordId', layoutTypes:['Full'],modes:['View']})
    recordData({ data, error }) {
        if (data) {
           this.acnt_name = getFieldValue(data, ACCOUNT_NAME);
           this.acnt_type = getFieldValue(data, ACCOUNT_TYPE);
           this.acnt_owner = getFieldDisplayValue(data, ACCOUNT_OWNER);
           this.acnt_revenue  = getFieldDisplayValue(data, REVENUE);

        } else if (error) {
            console.error('Error fetching account data:', error);
        }
    }
}
