import { LightningElement } from 'lwc';

import pub from 'c/pubsub';
export default class IndvComponentB extends LightningElement {
    data;
    connectedCallback(){
        // this.callSubscriber()
        this.callbackFunction =(message)=>{
            this.data = message
        };
        pub.subscribe('indv', this.callbackFunction);
    }
    /*
    callSubscriber(){
        // pub.subscribe('indv', (message)=>{
        //     this.data = message
        // })

        pub.sub('indv', this.callbackFunction);
       
    }
        */

    removeSubscriber()
    {
        pub.unsubscribe('indv',  this.callbackFunction);
    }


}

