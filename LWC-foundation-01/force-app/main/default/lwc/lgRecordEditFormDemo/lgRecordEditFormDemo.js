import { LightningElement } from 'lwc';
import OBJECT_NAME from '@salesforce/schema/Contact';
import NAME from '@salesforce/schema/Contact.Name';
import EMAIL from '@salesforce/schema/Contact.Email';
import TITLE from '@salesforce/schema/Contact.Title';
import ACCOUNT from '@salesforce/schema/Contact.AccountId';
export default class LgRecordEditFormDemo extends LightningElement {
    object_name = OBJECT_NAME;
    fields = {
        accountField: ACCOUNT,
        nameField: NAME,
        emailField: EMAIL,
        titleField: TITLE
    }

    resteHandler()
    {
        const resetField = this.template.querySelectorAll('lightning-input-field')
        Array.from(resetField).forEach(element => {
            element.reset();
        });
    }
}