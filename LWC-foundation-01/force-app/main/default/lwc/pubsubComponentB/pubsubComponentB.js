import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub'
export default class PubsubComponentB extends LightningElement {
    mess
    connectedCallback(){
        this.callbackFunction = (message)=>{
            this.mess = message
        }
        pubsub.subscribe('componentA', this.callbackFunction)
    }
    removeSubscriber()
    {
        pubsub.unsubscribe('componentA', this.callbackFunction)
    }
}