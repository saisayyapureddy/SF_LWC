import { LightningElement, wire } from 'lwc';

import CAR from '@salesforce/schema/Car__c';
import CAR_NAME  from '@salesforce/schema/Car__c.Name';
import PICTURE_URL from '@salesforce/schema/Car__c.Picture_URL__c';

import CATEGORY_FIELD from '@salesforce/schema/Car__c.Category_Category_c_Picklist__c'; 
import MAKE_FIELD from '@salesforce/schema/Car__c.Make__c';
import MSRP_FIELD from '@salesforce/schema/Car__c.MSRP__c';
import FUEL_FIELD from '@salesforce/schema/Car__c.Fuel_Type__c';
import SEATS_FIELD from '@salesforce/schema/Car__c.Number_of_Seats__c';
import CONTROL_FIELD from '@salesforce/schema/Car__c.Control__c'


// import Message Channel LMS
import CAR_SELECTED from '@salesforce/messageChannel/CarsSelected__c';
import { subscribe,MessageContext,unsubscribe } from 'lightning/messageService';



// getFieldValue function is used to extract field values from record fields
import {getFieldValue} from 'lightning/uiRecordApi'

//navigation
import { NavigationMixin } from 'lightning/navigation';
export default class Car_Card_Component extends NavigationMixin(LightningElement) {
    car =CAR;
    category= CATEGORY_FIELD;
    make= MAKE_FIELD;
    msrp= MSRP_FIELD;
    fuel= FUEL_FIELD;
    seats= SEATS_FIELD;
    control= CONTROL_FIELD;

    recordId;

    carSelectedSubscription;
    carName;
    carUrl;

    // configure message context
    @wire(MessageContext)
    messageContext;

    handleRecordLoaded(event)
    {
        const {records} = event.detail;
        const recordData = records[this.recordId];
        this.carName = getFieldValue(recordData, CAR_NAME);
        this.carUrl = getFieldValue(recordData, PICTURE_URL);
    }

    connectedCallback()
    {
        this.subscribeHandler()
    }
    subscribeHandler(){
        this.carSelectedSubscription = subscribe(this.messageContext, CAR_SELECTED, (message)=>this.handleCarSelection(message))
    }

    handleCarSelection(message)
    {
        // console.log('in handle car selection '+message)
        // console.log('in handle car selection '+message.carId);
        this.recordId = message.carId;
    }

    get carDetails()
    {
        return this.carName?this.carName: 'Car Details'
    }

    //navigate to slected car record page
    handleNavigation()
    {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId, // Using the record ID passed from the parent
                objectApiName: CAR.objectApiName, // Ensure this is a string for object API name
                actionName: 'view'
            }
      })
    }

}