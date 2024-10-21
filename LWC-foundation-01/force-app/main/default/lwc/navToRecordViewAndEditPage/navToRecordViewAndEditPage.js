import { LightningElement } from 'lwc';

import {NavigationMixin} from 'lightning/navigation';
export default class NavToRecordViewAndEditPage extends NavigationMixin(LightningElement) {

    navToRecordViewHandler()
    {
        this[NavigationMixin.Navigate]({

            type :'standard__recordPage',
            attributes:{
                recordId: '003dM000005CmvdQAC',
                objectApiName: 'Contact',
                actionName:'view'

            }
        })
    }


    navToRecordEditHandler()
    {
        this[NavigationMixin.Navigate]({

            type :'standard__recordPage',
            attributes:{
                recordId: '003dM000005CmvdQAC',
                objectApiName: 'Contact',
                actionName:'edit'

            }
        })
    }

}