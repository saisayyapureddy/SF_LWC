import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import ACCOUNT_OBJECT  from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import REVENUE from '@salesforce/schema/Account.AnnualRevenue';
import WEBSITE from '@salesforce/schema/Account.Website';
import INDUSTRY from '@salesforce/schema/Account.Industry';




export default class LgRecordFormDemo extends LightningElement {

    accountObject = ACCOUNT_OBJECT;
    fieldList =[NAME_FIELD,PHONE_FIELD,REVENUE,WEBSITE,INDUSTRY];

   
    handleSuccess(event)
    {
        console.log(event.detail.id)

       var toastEvent =  new ShowToastEvent({
                title: 'Success',
                message: 'Account created with id '+event.detail.id+' successfully',
                variant: 'success'
        })
        this.dispatchEvent(toastEvent)
    }

    handleCancel()
    {
        var toastEvent =  ShowToastEvent({
                title: 'Error',
                message: 'Error occured while creating account',
                variant: 'success'
        })
        this.dispatchEvent(toastEvent)

    }

}