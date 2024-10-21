import { api, LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type';
import ACCOUNT_OWNER from '@salesforce/schema/Account.Owner.Name';
import REVENUE from '@salesforce/schema/Account.AnnualRevenue';

export default class WireGetRecordDemo extends LightningElement {
    @api recordId;
    accountData; // Store account data

    /*
    // Wire adapter to get account data based on recordId using fields 
    @wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NAME, ACCOUNT_TYPE, ACCOUNT_OWNER, REVENUE] })
    recordData({ data, error }) {
        if (data) {
            console.log(data);
            this.accountData = data.fields; // Assign the fields object
        } else if (error) {
            console.error('Error fetching account data:', error);
        }
    }
    */
    // Wire adapter to get account data based on recordId using layout 
    @wire(getRecord, { recordId: '$recordId', layoutTypes:['Full'],modes:['View']})
    recordData({ data, error }) {
        if (data) {
            console.log(data);
            this.accountData = data.fields; // Assign the fields object
        } else if (error) {
            console.error('Error fetching account data:', error);
        }
    }
}
