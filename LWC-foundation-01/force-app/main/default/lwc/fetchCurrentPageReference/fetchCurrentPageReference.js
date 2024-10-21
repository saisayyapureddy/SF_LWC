import { LightningElement,wire } from 'lwc';

import {CurrentPageReference} from 'lightning/navigation';
export default class FetchCurrentPageReference extends LightningElement {

    @wire(CurrentPageReference)
    currentPageReference;

    get pageRef(){
        return this.currentPageReference? JSON.stringify(this.currentPageReference,'null',3):'No data Found'
 }
}