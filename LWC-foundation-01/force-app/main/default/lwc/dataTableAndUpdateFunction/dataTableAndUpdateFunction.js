import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT from '@salesforce/schema/Contact';
import { updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DataTableAndUpdateFunction extends LightningElement {

    contacts; // Store the contacts 
    draftValues = []; // Track the draft values modified in the datatable

    columns = [
        {
            label: 'Id',
            fieldName: 'Id',
            editable: false
        },
        {
            label: 'Name',
            fieldName: 'Name',
            editable: true
        },
        {
            label: 'Title',
            fieldName: 'Title',
            editable: false
        },
        {
            label: 'Email',
            fieldName: 'Email',
            editable: true
        },
        {
            label: 'Phone',
            fieldName: 'Phone',
            editable: true
        }
    ];

    @wire(getListUi, {
        objectApiName: CONTACT,
        listViewApiName: 'AllContacts',
    })
    contactListData({ data, error }) {
        if (data) {
            console.log(data);
            this.contacts = data.records.records.map((item) => {
                return {
                    Id: this.getValue(item, 'Id'),
                    Name: this.getValue(item, 'Name'),
                    Title: this.getValue(item, 'Title'),
                    Email: this.getValue(item, 'Email'),
                    Phone: this.getValue(item, 'Phone')
                };
            });
        } else {
            console.log(error);
        }
    }

    // Helper method to extract field values
    getValue(data, field) {
        return data.fields[field].value;
    }

    // Handle Save for draft values
    handleSave(event) {
        // Ensure the Id field is included in the draft values
        const updatedFields = event.detail.draftValues.map((draft) => {
            return {
                fields: { ...draft, Id: draft.Id } // Ensure Id is part of the fields
            };
        });

        console.log(JSON.stringify(updatedFields));

        // Use Promise.all to update multiple records
        const promises = updatedFields.map((recordInput) => updateRecord(recordInput));

        Promise.all(promises)
            .then((response) => {
                this.showToast('Success', 'Successfully updated the records', 'success');
                this.draftValues = []; // Clear the draft values after a successful update
                console.log(response.Id);
                console.log('contacts updated')

            })
            .catch((error) => {
                this.showToast('Error', error.body.message, 'error');
                console.log(error);
            });
    }

    // Show toast notifications
    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(event);
    }
}


/*
import { LightningElement, wire } from 'lwc';
import {getListUi} from 'lightning/uiListApi'
import { updateRecord  } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
const COLS =[
    {label:'Id', fieldName:'Id'},
    {label:'Name', fieldName:'Name',editable:true},
    {label:'Title', fieldName:'Title'},
    {label:'Phone', fieldName:'Phone', editable:true},
    {label:'Email', fieldName:'Email', type:'email', editable:true}
]
export default class DataTableAndUpdateFunction extends LightningElement {
    contacts=[]
    columns = COLS
    draftValues=[]
    @wire(getListUi, {
        objectApiName:CONTACT_OBJECT,
        listViewApiName:'AllContacts'
    })listViewHandler({data, error}){
        if(data){
            console.log(data)
            this.contacts = data.records.records.map(item=>{
                return {
                    "Id": this.getValue(item, 'Id'),
                    "Name": this.getValue(item, 'Name'),
                    "Title": this.getValue(item, 'Title'),
                    "Phone": this.getValue(item, 'Phone'),
                    "Email": this.getValue(item, 'Email')
                }
            })
        }
        if(error){
            console.error(error)
        }
    }

    getValue(data, field){
        return data.fields[field].value
    }

    handleSave(event){
        console.log(JSON.stringify(event.detail.draftValues))
        const recordInputs=event.detail.draftValues.map(draft=>{
            const fields = {...draft};
            return { fields:fields };
        })
        const promises = recordInputs.map(recordInput=>updateRecord(recordInput))
        Promise.all(promises).then(()=>{
            console.log('COntact updated Successfully')
            this.draftValues=[]
        }).catch(error=>{
            console.error("Error updating the record", error)
        })
        
    }
}

*/