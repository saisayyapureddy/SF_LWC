import { LightningElement } from 'lwc';

import {NavigationMixin} from 'lightning/navigation';
export default class NavToWebPage extends NavigationMixin(LightningElement) {

    navToWebSite()
    {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.google.com/'
            }
    })
 }
}