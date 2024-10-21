import { LightningElement } from 'lwc';

export default class C2pChildModelComponent extends LightningElement {
    


    closeHandler()
    {
        //creating custom event and dispatching event to parent component and parent 
        //component can listen this event and take action acccordingly
        const myEvent = new CustomEvent('close',{
            detail:{
                message:'Model success fully showed and closed '
            }
        });
        this.dispatchEvent(myEvent);

    }
    
}