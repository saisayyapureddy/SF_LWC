import { LightningElement } from 'lwc';

import {NavigationMixin} from 'lightning/navigation';
export default class NavToLwcComponent extends NavigationMixin(LightningElement) {


    navToOtherLWC()
    {
         var defination ={
            componentDef: 'c:navToLwcTarget',
            attributes:{
                recordId:'89779877'
            }
        }

        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url:'/one/one.app#'+btoa(JSON.stringify(defination))
       }
     })
    }
}