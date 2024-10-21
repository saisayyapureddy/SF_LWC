import { LightningElement } from 'lwc';

import { deleteRecord } from 'lightning/uiRecordApi';
import{ShowToastEvent} from 'lightning/platformShowToastEvent';


export default class DeleteRecordBydeleteRecordApi extends LightningElement {



    record;
    deleteRecordHandler()
    {
        deleteRecord(this.record).then((result)=>
        {
            console.log('record deleted');
            this.showToast('Success',`You have successfully deleted the record `,'success');
        }).catch((error)=>
        {
            console.log('record not deleted')
        })
    }
    dataHandler(event)
    {
        this.record=event.target.value;
    }

    showToast(title,message,variant)
    {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(event);
    }

}