import { LightningElement } from 'lwc';
import pub from 'c/pubsub'
export default class IndvComponentA extends LightningElement {
    data;

    dataHandler(event)
    {
       this.data=event.target.value;
    }

    sendData()
    {
        
        pub.publish('indv',this.data);
    }
}