import { api, LightningElement } from 'lwc';

//import CAR_Hub logo
import CAR_HUB_LOGO from '@salesforce/resourceUrl/Car_logo';
export default class CarPlaceholder extends LightningElement {
     @api message;

     car_logo=CAR_HUB_LOGO;
}