import { LightningElement } from 'lwc';

import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class ShowToastNotification extends LightningElement {


    SuccessHandler()
    {
       this.showToast('Success','You have successfully created {0} account {1}' ,'success')
    }

    ErrorHandler()
    {
        this.showToast('Error','There is something is wrong, please try again after some time ','error')
    }

    InfoHandler()
    {
        this.showToast('Info','salesforce season winter is coming now ','info')
    }

    WarningHandler()
    {
        this.showToast('Warning','please enter valid data','warning')
    }
   

    showToast(title,message,variant)
    {
        const eve =  new ShowToastEvent({
            title,
            message,
            variant,
            messageData: [
                'salesforce',{
                    url:'https://www.lightningdesignsystem.com/',
                    label:'Click here',
                    target:'_blank'
                }
            ]
            // mode:'sticky'
           // mode used to make the toast message sticky
      })
      this.dispatchEvent(eve)
    }
}