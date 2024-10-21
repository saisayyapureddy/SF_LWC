import { api, LightningElement } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
    @api msg;

    sendData()
    {
        const eve = new CustomEvent('sendmsg',{
            detail:{
                message:'hey this data is cmng  from lwc to aura'
            }
        })
        this.dispatchEvent(eve);
    }
}