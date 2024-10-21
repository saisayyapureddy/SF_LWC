import { LightningElement, wire } from 'lwc';

import getContacts from '@salesforce/apex/AccountController.getContacts';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import {refreshApex} from '@salesforce/apex';

const COL =[
    {
        label: 'First Name',
        fieldName: 'FirstName',
        editable: true
    },
    {
        label: 'Last Name',
        fieldName: 'LastName',
        editable: true
    },
    {
        label: 'Phone',
        fieldName: 'Phone',
        editable: true
    },
    {
        label: 'Email',
        fieldName: 'Email',
        type:'Email'
    }
]
export default class RefreshDataWithoutPageRef extends LightningElement {

     contacts;
    columns = COL;
    draftValues = [];
    contactResult = null;

    @wire(getContacts)
    contactList(result) {
        this.contactResult = result;
        if (result.data) {
            this.contacts = result.data;
        } else if (result.error) {
            console.error('Error fetching contacts: ', result.error);
        }
    }

    saveHandler(event) {
        const draftValues = event.detail.draftValues;

        // Map draft values to the format required by updateRecord
        const recordInputs = draftValues.map(draft => ({
            fields: {
                Id: draft.Id,
                ...draft
            }
        }));

        console.log(
            'recordInputs',
            JSON.stringify(recordInputs));
        // Update records
        const updatePromises = recordInputs.map(recordInput => updateRecord(recordInput));

        Promise.all(updatePromises)
            .then(() => {
                this.draftValues = [];
                this.showToast('Success', 'Records Saved Successfully', 'success');
                return refreshApex(this.contactResult);
            })
            .catch(error => {
                this.showToast('Error', error.body.message, 'error');
            });
    }

    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(evt);
    }
}