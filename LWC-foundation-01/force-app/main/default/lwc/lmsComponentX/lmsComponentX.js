import { LightningElement,wire} from 'lwc';

import sampleLMS from "@salesforce/messageChannel/SampleMessageChannel__c";
import { subscribe,MessageContext,APPLICATION_SCOPE,unsubscribe } from 'lightning/messageService';

export default class LmsComponentX extends LightningElement {

    @wire(MessageContext)
    context;
    subscription;
    msgData

    connectedCallback()
    {
        this.calSubscriber()
    }


    //subscribe(MessageContext,messageChannel,listener,subscriber options)
    calSubscriber()
    {
        this.subscription = subscribe(this.context,sampleLMS,(message)=>{
            this.handelMessage(message)
        },{scope:APPLICATION_SCOPE})
    }


    handelMessage(message)
    {
        this.msgData=message.lmsData.value?message.lmsData.value:'No data found';
    }

    unsubscribeHandler()
    {
        unsubscribe(this.subscription)
    }
}