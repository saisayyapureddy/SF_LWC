import { LightningElement } from 'lwc';

export default class SlotDemoChildComponent extends LightningElement {

    handleFooter()
    {
        const footerElement = this.template.querySelector('.slds-card__footer')
        if(footerElement)
        {

            footerElement.classList.remove('slds-hide')
        }
    }
}