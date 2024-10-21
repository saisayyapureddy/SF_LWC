import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    
    name='Sai';
    title='Salesforce';
    description='used to track the changes for object and array properties and re-render the ui';
    isShow=false;

    @track
    address={
        street:'123 Main Street',
        city:'San Francisco',
        state:'CA',
        zip:'94105'
    }

    changeHandler(event){
        
        this.title=event.target.value;
    }

    AddressChange(event){
        this.address.city=event.target.value;
        //if we are not using the Track u can use spread operator and assign the value
        //this.address={...this.address,city:event.target.value};
    }

    show(event)
    {
       this.isShow=true;
    }
}