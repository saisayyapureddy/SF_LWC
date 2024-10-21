import { LightningElement,wire} from 'lwc';
import sampleLMS from "@salesforce/messageChannel/SampleMessageChannel__c";
import { publish,MessageContext,APPLICATION_SCOPE } from 'lightning/messageService';

export default class LmsComponentA extends LightningElement {

    //this wire adapter gives information of all LWC using LMS
     @wire(MessageContext)
      context;


      input;
      inputHandler(event)
      {
        this.input=event.target.value;
      }


      //publish(MessageContext,messageChannel,Message)
      publishHandler()
      {
        publish(this.context,sampleLMS,{
            lmsData:{
                value:this.input
            }
        })
      }
}