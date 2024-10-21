import { LightningElement } from 'lwc';

export default class Modal extends LightningElement {
    iconHandler()
    {
       this.dispatchEvent(new CustomEvent('close'));
    }

    slotFooterHandler()
    {
        const elementHeader  = this.template.querySelector('.slds-modal__footer');
         if(elementHeader)
         {
            elementHeader.classList.remove('slds-hide');
         }
    }

    hederslotHandler()
    {
         
         const element  = this.template.querySelector('slds-modal__header');
         if(element)
         {
            element.classList.remove('.remove-header');
         }
    }
}