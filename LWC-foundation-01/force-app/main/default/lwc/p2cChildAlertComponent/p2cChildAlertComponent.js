import { api, LightningElement } from 'lwc';

export default class P2cChildAlertComponent extends LightningElement {

    //@api means public property we can assign this property in the parent class
   @api message;
   @api number;
   @api isValid;

}