import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class CustomValidationForRecordEditDemo extends LightningElement {

    object_name =ACCOUNT_OBJECT;
    inputValue=''



            inputHandler(event)
            {
                this.inputValue = event.target.value;
            }

            handleSubmit(event)
            {   
             event.preventDefault();
            const inputCmp =  this.template.querySelector('lightning-input')
            const value = inputCmp.value;
            if(!value.includes('japan'))
            {
                inputCmp.setCustomValidity('The account name must include japan')
            }
            else{
                inputCmp.setCustomValidity('');
                const fields = event.detail.fields;
                fields.Name = value;
                this.template.querySelector('lightning-record-edit-form').submit(fields)
            }
            inputCmp.reportValidity();
            }

    handleSuccess(event)
    {
        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'Account Created & record id is '+event.detail.id+' successfully',
            variant: 'success',

    })
    this.dispatchEvent(evt)
    }

    errorHandler(event)
    {
        const evt = new ShowToastEvent({
            title: 'Account creation is failed ',
            message: event.detail.message,
            variant: 'error',

    })
    this.dispatchEvent(evt)
 }
}
