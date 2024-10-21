import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT from '@salesforce/schema/Contact';
import TITLE from '@salesforce/schema/Contact.Title';

export default class GetListUiDemo extends LightningElement {
    contacts;

    //pagination fields
    nextPageToken=null
    previousPageToken=null;
    pageToken=null;

    title = TITLE;

    @wire(getListUi, {
        objectApiName: CONTACT,
        listViewApiName: 'AllContacts',
        pageSize:10,
        pageToken:'$pageToken',
        //sortBy:'title'
    
    })
    listData({ data, error }) {
        if (data) {
            console.log('data', data);
            this.contacts = data.records.records;
            this.nextPageToken = data.records.nextPageToken;
            this.previousPageToken = data.records.previousPageToken;
        } else {
            console.error('error', error);
        }
    }


    //Used for pagination to previous page
    previousHandler()
    {
        if(this.previousPageToken)
        {
            this.pageToken=this.previousPageToken
        }
    }
     //Used for pagination to next page
    nextHandler()
    {
        if(this.nextPageToken)
        {
            this.pageToken=this.nextPageToken
        }
    }
}
