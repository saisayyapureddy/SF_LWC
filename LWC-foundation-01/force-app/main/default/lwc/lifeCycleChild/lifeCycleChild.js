import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {

     //this is the first method called when the class is instantiated
     constructor()
     {
         super();
         console.log('child constructor called')
     }
 
     //called when element is inserted in to the document
     connectedCallback()
     {
         console.log('child connectedCallback called');
         throw new Error('child connectedCallback  is throwed error');
         
     }
 
     //called when component rendering is done 
     renderedCallback()
     {
         console.log('child renderedCallback called')
     }

     disconnectedCallback()
    {
        alert('child disconnected call back is called')
    }


}