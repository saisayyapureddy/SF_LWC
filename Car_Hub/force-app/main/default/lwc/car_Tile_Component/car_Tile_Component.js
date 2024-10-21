import { LightningElement, wire } from 'lwc';
import getCars from '@salesforce/apex/CarController.getCars';

// Import LMS 
import { subscribe, MessageContext,publish } from 'lightning/messageService';
import CAR_FILTERED_MESSAGE from '@salesforce/messageChannel/CarsFiltered__c';

import CAR_SELECTED from '@salesforce/messageChannel/CarsSelected__c';

export default class Car_Tile_Component extends LightningElement {
    cars=[];
    error
    filters = {};
    carFilterSubscription

    @wire(getCars, {filters:'$filters'})
    carsHandler({data, error}){
        if(data){
            console.log(data)
            this.cars = data
        }
        if(error){
            this.error = error
            console.error(error)
        }
    }

     /**Load context for LMS */
     @wire(MessageContext)
     messageContext

     connectedCallback(){
         this.subscribeHandler()
     }

     subscribeHandler(){
         this.carFilterSubscription = subscribe(this.messageContext, CAR_FILTERED_MESSAGE, (message)=>this.handleFilterChanges(message))
     }
     handleFilterChanges(message){
         console.log(message.filters)
         this.filters ={...message.filters}
     }

     selectedEventHandler(event)
     {
        console.log('selected event is: '+event.detail.car);
        publish(this.messageContext, CAR_SELECTED, {
            carId: event.detail.car
        })
     }
}
