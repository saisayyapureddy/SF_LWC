import { LightningElement } from 'lwc';

export default class C2pParentCommunicationComponent extends LightningElement {
    showChild =false;
    msg;

    showChildHandler()
    {
        this.showChild =true;
    }

    closeHandler(event)
    {
        this.showChild=false;
        this.msg=event.detail.message;
    }
}