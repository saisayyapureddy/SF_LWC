import { LightningElement } from 'lwc';

import {NavigationMixin} from 'lightning/navigation';
export default class NavToTab extends NavigationMixin(LightningElement) {

        navToTabHandler()
        {
            this[NavigationMixin.Navigate]({
                type: 'standard__navItemPage',
                attributes: {
                    apiName: 'Life_cycle_hooks'
                }
        })
    }
}