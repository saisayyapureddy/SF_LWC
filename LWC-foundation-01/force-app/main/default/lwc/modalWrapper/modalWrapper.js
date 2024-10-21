import { LightningElement } from 'lwc';

export default class ModalWrapper extends LightningElement {
    showModal=false;
    openModal()
    {
        this.showModal=true;
    }
    closeHandler()
    {
        this.showModal=false;
    }
}