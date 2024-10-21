import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import MAKETYPE from '@salesforce/schema/Car__c.Make__c';
import getSimilarCars from '@salesforce/apex/CarController.getSimilarCar';
import CAR from '@salesforce/schema/Car__c';

//import Navigation

import { NavigationMixin } from 'lightning/navigation';


export default class SimilarCar extends NavigationMixin(LightningElement) {
    @api recordId; // This will automatically get the record ID of the current record page
    
    makeType;
    similarCars;
    @wire(getRecord,{
        recordId: '$recordId',
        fields: [MAKETYPE]  // Fetch required fields
    })
    carData({data,error})
    {
        if(data)
        {
            this.makeType = data.fields.Make__c.value;
            console.log('makeType '+this.makeType);
        }
        else if(error)
        {
            console.error('Error fetching data:', error);
        } 
    }


    fetchHandler()
    {
        console.log(this.makeType);
        console.log('record id '+this.recordId);
        getSimilarCars({record: this.recordId,makeType: this.makeType}).then((result) =>{
            console.log('Similar Cars:', result);
            this.similarCars = result;
        }).catch((error) => {
            console.error('Error fetching similar cars:', error);
        })

    }


    navigateToSimilarHandler(event)
    {
        console.log('id is '+event.target.dataset.id);  // Fetch the ID of the clicked similar car
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: event.target.dataset.id,
                objectApiName: CAR,
                actionName: 'view'
            }
        })
    }
}
