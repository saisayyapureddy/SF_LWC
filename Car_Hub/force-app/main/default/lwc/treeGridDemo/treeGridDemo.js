import { LightningElement, wire } from 'lwc';
import getAccountDetails from '@salesforce/apex/AccountController.getAccountDetails';

export default class TreeGridDemo extends LightningElement {
    gridData = [];

    // Fetch data using wire service
    @wire(getAccountDetails)
    accountDetails({ data, error }) {
        if (data) {
            console.log('Account Details:', data);
            this.formatData(data); // Format the data to include child records
        } else if (error) {
            console.error('Error:', error);
        }
    }

    // Tree grid columns
    columnsGrid = [
        { label: 'Id', fieldName: 'Id', type: 'text' },
        { label: 'Name', fieldName: 'Name', type: 'text' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' },
        { label: 'Website', fieldName: 'Website', type: 'url' }
    ];

    // Dummy data to be used for contacts
    dummyData = [
        {
            Name: 'Sai',
            Phone: '9900990',
            Website: 'saiSf.com'
        },
        {
            Name: 'Manasa',
            Phone: '9099',
            Website: 'manuSf.com'
        }
    ];

    // Method to format the data for the tree grid
    formatData(result) {
        this.gridData = result.map((account) => {
            const { Contacts, ...accountData } = account;
            
            // Add dummy contacts data if Contacts are available
            const updatedContacts = Contacts ? Contacts.map((con) => {
                return { ...con, '_children': this.dummyData }; // Append dummy data as child nodes
            }) : [];

            console.log(updatedContacts);

            // Return the account with updated contacts as children
            return { ...accountData, '_children': updatedContacts };
        });
    }
}
