import { LightningElement } from 'lwc';

export default class CustomLightningCardComponent extends LightningElement {

    handleSlot()
    {
        const slotElement = this.template.querySelector('footer');
        if(slotElement)
        {
            slotElement.classList.remove('slds-hide');
        }
    }
}