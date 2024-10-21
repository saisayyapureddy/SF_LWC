import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccountList';
import {exportCSVFile} from 'c/csvGenService';

export default class CsvGenerationDemo extends LightningElement {
    accountData;
    accountHeaders = {
        Id: "Record Id",
        Name: "Name",
        Phone: "Phone",
        Industry: "Industry",
    };

    @wire(getAccounts)
    accountHandler({ data, error }) {
        if (data) {
            console.log(data);
            this.accountData = data;
        }
        if (error) {
            console.error(error);
        }
    }

    csvGenerator = () => {
        const headers = this.accountHeaders;
        const totalData = this.accountData;
        const fileTitle = "account_records";
        
        // Call downloadCSVFile with appropriate data
        exportCSVFile(headers, totalData, fileTitle);
    }

    
    
}
