
import { LightningElement, wire } from 'lwc';

import { getObjectInfo,getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPPORTUNITY from '@salesforce/schema/Opportunity';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
export default class WireGetObjectInfoAdaptor extends LightningElement {

    //defaultRecordTypeId;

    

    // using function 
    /*
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfoHandler({data,error})
    {
        this.defaultRecordTypeId = data.defaultRecordTypeId;
        console.log(data)
    }
        */


     // using property 
     @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
     objectInfo;
    

      // using function to get multipule data info

    objResult;
    objectArr =[ACCOUNT_OBJECT,OPPORTUNITY,CONTACT_OBJECT]
    @wire(getObjectInfos, { objectApiNames: '$objectArr' })
    objectInfosHandler({ data, error }) {
        if (data) {
            this.objResult = data;
            console.log('Object Info Data:', this.objResult);
        } else if (error) {
            this.error = error;
            console.error('Error fetching object infos:', this.error);
        }
    }
}
        
     
    
