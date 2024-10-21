import { api, LightningElement, wire } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi';

export default class WireGetRecordUiDemo extends LightningElement {
    @api recordId;

    formFields = [
        {
            fieldName: 'AccountNumber',
            label: 'Account Number',
            type: 'text'
        },
        {
            fieldName: 'AnnualRevenue',
            label: 'Annual Revenue',
            type: 'number'
        },
        {
            fieldName: 'BillingCity',
            label: 'Billing City',
            type: 'text'
        },
        {
            fieldName: 'BillingCountry',
            label: 'Billing Country',
            type: 'text'
        }
    ];

    @wire(getRecordUi, {
        recordId: '$recordId',
        layoutTypes: ['Full'],
        modes: ['Edit']
    })
    recordLayoutData({ data, error }) {
        if (data) {
            console.log('Record Data:', data);
            
            if (data.records && data.records[this.recordId]) {
                const recordFields = data.records[this.recordId].fields;

                // Map formFields to include field values
                this.formFields = this.formFields.map(item => {
                    return {
                        ...item,
                        value: recordFields[item.fieldName] ? recordFields[item.fieldName].value : 'N/A' // Default to 'N/A' if field not found
                    };
                });
            }
        } else if (error) {
            console.log('Error:', error);
        }
    }
}
