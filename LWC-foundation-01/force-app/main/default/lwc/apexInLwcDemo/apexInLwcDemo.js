import { LightningElement, wire } from 'lwc';

import getAccountList from '@salesforce/apex/AccountController.getAccountList';
export default class ApexInLwcDemo extends LightningElement {

    @wire(getAccountList)
    accountList;

    acntDataFromFunction;


    @wire(getAccountList)
    acntData({data,error})
    {
        if(data)
        {
            this.acntDataFromFunction=data
        }
        else{
            console.error(error);
        }
    }

}