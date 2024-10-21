import { LightningElement,api } from 'lwc';

export default class QuickAction extends LightningElement {
    @api recordId;
    @api invoke()
    {
        console.log('QuickAction'+this.recordId);
        window.open("https://google.com","_blank");
    }

}
