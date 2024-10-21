import { LightningElement, api } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import STAGE from '@salesforce/schema/Opportunity.StageName';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class QuickActionUpdateOpportunity extends LightningElement {

    @api recordId;

    @api invoke() {
        console.log('Invoking', this.recordId);

        // Constructing fields object with the record Id and the StageName field
        const fields = {
            Id: this.recordId,               // Record Id is needed
            [STAGE.fieldApiName]: 'Closed Won' // Correct the stage value to 'Closed Won'
        };

        const recordInput = { fields };

        // Using updateRecord correctly with the recordInput object
        updateRecord(recordInput)
            .then(() => {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Success',
                    message: 'Opportunity updated to Closed Won',
                    variant: 'success'
                }));
            })
            .catch(error => {
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Error',
                    message: error.body.message,  // Accessing error body correctly
                    variant: 'error'
                }));
            });
    }
}
