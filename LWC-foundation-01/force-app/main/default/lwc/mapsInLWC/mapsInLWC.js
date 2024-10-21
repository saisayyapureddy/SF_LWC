import { LightningElement,wire } from 'lwc';
import getAccounts  from '@salesforce/apex/MapsController.getAccounts';


export default class MapsInLWC extends LightningElement {

    markerTitle='Accounts Location'
    mapMarkers=[];
    selectedMarker;
    @wire(getAccounts)
    accountList({data,error})
    {
        if(data)
        {
            console.log(data);
            this.formateData(data);
        }
        else if(error)
        {
            console.log(error);
        }
    }



    // formateData(data)
    // {
    //    this.mapMarkers =  data.map((item) => 
    //     {
    //         return {
    //                 location:{
    //                     Street:item.BillingStreet || '',
    //                     City:item.BillingCity || '',
    //                     Country:item.BillingCountry || '',
    //                     State:item.BillingState || '',
    //                     PostalCode:item.BillingPostalCode|| ''
    //                 },
                
    //             icon:'utility:salesforce1',
    //             title:item.Name,
    //             value:item.Name,
    //             description:item.Industry


    //         }
    //     })
    //     this.selectedMarker =    this.mapMarkers.length &&  this.mapMarkers[0].value;
    //     console.log(this.mapMarkers);
    // }


    formateData(data) {
        this.mapMarkers = data.map((item) => {
            return {
                location: {
                    Street: item.BillingStreet || '',
                    City: item.BillingCity || '',
                    Country: item.BillingCountry || '',
                    State: item.BillingState || '',
                    PostalCode: item.BillingPostalCode || ''
                },
                icon: 'utility:salesforce1',
                title: item.Name,
                value: item.Name,
                description: item.Industry
            };
        });
        console.log(this.mapMarkers); // Check if markers are properly set
        if (this.mapMarkers.length) {
            this.selectedMarker = this.mapMarkers[0].value;
        }
    }
    

    callMarkerHandler(event)
    {
        this.selectedMarker = event.detail.selectedMarkerValue;
    }

}