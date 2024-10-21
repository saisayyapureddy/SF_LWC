import { LightningElement, wire } from 'lwc';


import { getPicklistValuesByRecordType,getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT from '@salesforce/schema/Account';
export default class WireGetPicklistValuesByRecordTypeId extends LightningElement {

    account = ACCOUNT
    //to display the selected value
    accountSource;
    indSource;


    @wire(getObjectInfo,{objectApiName: ACCOUNT})
    objectInfo;

    //to set the formated data to display in the combobox
    acntSource;
    industrySource;

    @wire(getPicklistValuesByRecordType,{objectApiName:'account',recordTypeId:'$objectInfo.data.defaultRecordTypeId'})
    picklistValues({data,error})
    {
        if(data)
        { 
            console.log(data);
            this.acntSource = this.setDataForComboBox(data.picklistFieldValues.AccountSource)
            this.industrySource = this.setDataForComboBox(data.picklistFieldValues.Industry)
        }
        else{
            console.log(error);
        }

    }


    //to return to the formated data to display in the combobox
    get accountSourceOptions()
    {   
        return this.acntSource;
    }
    //to return to the formated data to display in the combobox
    get industryOptions()
    {
        return this.industrySource;
    }
    

    //set the data format to send to the combobox
    setDataForComboBox(data)
    {
        return data.values.map(
            (item)=>({label:item.label,value:item.value}))


    }

    //handle the selected field value
    handleChange(event)
    {
        //destructure the event
        const {name,value} = event.target
        if(name === 'account')
        {
            this.accountSource = value;
        }
        if(name === 'industry')
            {
                this.indSource = value;
            }
    }
}