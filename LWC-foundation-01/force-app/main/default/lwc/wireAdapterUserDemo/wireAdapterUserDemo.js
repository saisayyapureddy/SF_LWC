import { LightningElement, wire } from 'lwc';
import Id from '@salesforce/user/Id'; // Fetch current user's Id
import { getRecord } from 'lightning/uiRecordApi';

// Import required fields
import USER_NAME from '@salesforce/schema/User.Name';
import USER_EMAIL from '@salesforce/schema/User.Email';
import PROFILE from '@salesforce/schema/User.ProfileId';

// Define fields array
const fields = [USER_NAME, USER_EMAIL, PROFILE];

export default class WireAdapterUserDemo extends LightningElement {

    userId = Id; // Set userId to current user's Id
    details; // To store user details
    error;  // To store any errors
 

    // Use @wire to get the user record data
    @wire(getRecord, { recordId: '$userId', fields }) // Correctly use 'userId' for recordId
    userDetailsHandler({ data, error }) { // Destructure the response
        if (data) {
            console.log(data)
            this.details = data.fields; // Get fields from the data object
            this.error = undefined; // Clear any previous error
            console.log(this.details); // Log user details
        } else if (error) {
            this.error = error; // Capture the error if any
            this.details = undefined; // Clear the details
            console.error('Error:', this.error); // Log the error
        }
    }



     // Use @wire to get the user record data
     @wire(getRecord, { recordId: '$userId', fields }) // Correctly use 'userId' for recordId
     userDetails; // Destructure the response
        
     
}
