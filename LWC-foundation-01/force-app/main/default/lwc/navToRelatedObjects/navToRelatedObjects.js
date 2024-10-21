import { LightningElement } from 'lwc';

import {NavigationMixin} from 'lightning/navigation';
export default class NavToRelatedObjects extends NavigationMixin(LightningElement) {

    navToRelatedContact()
    {

        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes:{
                recordId:'001dM00000IWeb3QAD',
                objectApiName:'Account',
                relationshipApiName:'Contacts',
                actionName:'view'
            }
      })
    }

}