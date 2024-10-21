import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT from '@salesforce/schema/Contact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class WireCreateRecordFunctionDemo extends LightningElement {

    formFields = {}; // Initializing formFields as an object to store field values

    contact = CONTACT;

    // Handler for input changes, correct target property access
    dataHandler(event) {
        const { name, value } = event.target; // Corrected to event.target and destructuring properly
        this.formFields[name] = value;
    }

    // Handler to create a record
    createHandler() {
        const recordInput = { // Corrected syntax for creating the record input
            apiName: this.contact.objectApiName,
            fields: this.formFields
        };
        createRecord(recordInput)
        .then((response) => {   
            console.log(response);
            this.showToast('Success', `Contact created with ID: ${response.id}`, 'success');
        })
        .catch((error) => {
            console.error(error);
            this.showToast('Error', error.body.message, 'error');
        });
    }

    // Show toast messages
    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant || 'error'
        });
        this.dispatchEvent(event);
    }
}
