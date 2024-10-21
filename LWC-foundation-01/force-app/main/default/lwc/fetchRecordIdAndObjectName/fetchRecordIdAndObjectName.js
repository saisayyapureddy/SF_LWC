
import { LightningElement,api } from 'lwc';

export default class FetchRecordIdAndObjectName extends LightningElement {
    @api recordId;
    @api objectApiName; 
    description= 'Here by default record id and object name will assigned with the values in which record page we placed this component  and that record page acts as a parent component'

    /*
        Here by default record id and object name will assigned  
        with the values in which record page we placed this component that record page acts as a parent component 

    */
}