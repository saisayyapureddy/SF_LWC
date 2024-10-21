import { LightningElement } from 'lwc';


import {NavigationMixin} from 'lightning/navigation';
export default class NavToVFPage extends NavigationMixin( LightningElement) {

    navToVFPage()
    {
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/apex/navToVfPageFromLWC'
            }
        }).then(generatedUrl =>{
            console.log('Gen url -'+generatedUrl);
            window.open(generatedUrl);
        })
    }
}