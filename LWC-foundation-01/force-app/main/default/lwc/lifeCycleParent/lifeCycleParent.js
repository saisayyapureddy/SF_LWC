import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {


    isShowChild=false;
    //this is the first method called when the class is instantiated
    constructor()
    {
        super();
        console.log('parent constructor called')
    }

    //called when element is inserted in to the document
    connectedCallback()
    {
        console.log('parent connectedCallback called')
    }

    //called when component rendering is done 
    renderedCallback()
    {
        console.log('parent renderedCallback called')
    }

    disconnectedCallback()
    {
        alert('parent disconnected call back is called')
    }


    changeHandler()
    {
        //toggeling the button action b/w true or false 
        this.isShowChild=!this.isShowChild;
    }
    //when child component throws error same time parent component  Callback called automatically. and 
    //catch the error
    errorCallback(error,stack)
    {
         console.log(error.message);
         console.log(stack)
    }


}