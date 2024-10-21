import { LightningElement } from 'lwc';

import {NavigationMixin} from 'lightning/navigation';
export default class NavToAuraFromLwc extends NavigationMixin( LightningElement) {
    navToAuraHandler()
    {
        this[NavigationMixin.Navigate]({

            type:'standard__component',
            attributes:{
                 componentName:'c__navToAuraTarget'
            },state:{
                'c__id':'89779877'
            }
        })
    }
}