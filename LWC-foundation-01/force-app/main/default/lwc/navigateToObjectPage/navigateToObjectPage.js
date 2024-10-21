import { LightningElement } from 'lwc';


import {NavigationMixin} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils';
import Title from '@salesforce/schema/Contact.Title';

export default class NavigateToObjectPage extends NavigationMixin(LightningElement) {
        
    navToObjectHandler()
    {
        this[NavigationMixin.Navigate]({

            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
                //here it navigates to account list page
        },state:{
            filterName: 'Recent'
        }
    }
      )
    }

    navToRecordCreateHandler()
    {
        this[NavigationMixin.Navigate]({

            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
                //here it navigates to account create page
        }}
      )
    }


     navToRecordCreateWithDefaultHandler()
    {
        const defV = encodeDefaultFieldValues({
                 FirstName: 'Jane',
                LastName: 'Smith',
                LeadSource: 'other'
        })
        
        this[NavigationMixin.Navigate]({ 
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
                //here it navigates to account create page
        },state:{
            defaultFieldValues:defV
        }
    }
      )
    }



    navToFilesHandler()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                 objectApiName: 'ContenetDocument',
                 actionName: 'home'
            }
    
        })
    }
}
