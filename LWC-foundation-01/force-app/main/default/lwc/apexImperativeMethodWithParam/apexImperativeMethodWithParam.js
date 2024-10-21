import { LightningElement } from 'lwc';

import findAccountsBySearchKeyword from '@salesforce/apex/AccountController.findAccountsBySearchKeyword';
export default class ApexImperativeMethodWithParam extends LightningElement {

    key;
    accounts;
    timer;
    handleChange(event)
    {
        window.clearTimeout(this.timer);
        this.key = event.target.value;

       this.timer =  setTimeout(() => {
            this.callApex();
        }, 1500);
    }


    callApex()
    {
        findAccountsBySearchKeyword({enteredKey:this.key}).then((result)=>
            {
                console.log(result);
                this.accounts = result;
            }).catch((error)=>
            {
                console.log(error);
            })
    }












}

