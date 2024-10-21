import { LightningElement, wire } from 'lwc';
import filterAccountByTpe from '@salesforce/apex/AccountController.filterAccountByTpe';

export default class WireApexWithParams extends LightningElement {
    filterAccValue = '';
    selectedType = ''; // Initialize selectedType to be used in combobox

    // Wire method with dynamic parameter
    @wire(filterAccountByTpe, { type: '$filterAccValue' })
    acntData;

    // Define the combobox options as a property, not a method
    acntOptions = [
        { label: 'Customer - Direct', value: 'Customer - Direct' },
        { label: 'Customer - Channel', value: 'Customer - Channel' },
        { label: 'Prospect', value: 'Prospect' },
        { label: 'Channel Partner / Reseller', value: 'Channel Partner / Reseller' }
    ];

    // Handle combobox change event
    change(event) {
        this.filterAccValue = event.target.value;
        this.selectedType = event.target.value; // Bind selected type
    }
}
