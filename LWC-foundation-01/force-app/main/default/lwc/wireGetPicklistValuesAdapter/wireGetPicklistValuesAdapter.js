import { LightningElement, wire } from 'lwc';


import { getPicklistValues ,getObjectInfo} from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJ from '@salesforce/schema/Account';
import INDUSTRY from '@salesforce/schema/Account.Industry';
import TYPE from '@salesforce/schema/Account.Type';
export default class WireGetPicklistValuesAdapter extends LightningElement {

    industry = '';
    type='';
    correctData= [];

    @wire(getObjectInfo,{objectApiName: ACCOUNT_OBJ})
    objectInfo;

    //used to get industry picklist from account object 
    @wire(getPicklistValues, {recordTypeId:'$objectInfo.data.defaultRecordTypeId', fieldApiName: INDUSTRY})
    picklistValues({data,error})
    {
       if(data)
       {
        console.log(data)
         this.correctData =  [... this.setdataOrder(data)]
       }
       else{
           console.log(error)
       }
    }



    
    // get options() {
    //     return [
    //         { label: 'New', value: 'new' },
    //         { label: 'In Progress', value: 'inProgress' },
    //         { label: 'Finished', value: 'finished' },
    //     ];
    // }

    // in this method we are organising the data in the required format
    setdataOrder(data)
    {
        return data.values.map(item => ({ label: item.label, value: item.value }));
    }

    //return the industry picklist values
    get industryOptions()
    {
          return this.correctData; 
    }

    //return the type picklist values
    get typeOptions()
    {
          return this.correctData; 
    }


    handleChange(event) {
        this.industry = event.detail.value;
    }

    handleTypeChange()
    {
        this.type = event.detail.value;
    }

    //used to get industry picklist from account object 
    @wire(getPicklistValues, {recordTypeId:'$objectInfo.data.defaultRecordTypeId', fieldApiName: TYPE})
    picklistTypeValues({data,error})
    {
       if(data)
       {
        console.log(data)
         this.correctData =  [... this.setdataOrder(data)]
       }
       else{
           console.log(error)
       }
    }
}