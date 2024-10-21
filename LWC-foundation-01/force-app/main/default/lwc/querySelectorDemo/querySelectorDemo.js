import { LightningElement } from 'lwc';

export default class QuerySelectorDemo extends LightningElement {

    users=["Ram","sanju","smith","John"];
    afterChanged ;

    fetchHandler()
    {
        const elem = this.template.querySelector('h1');
        console.log(elem.innerText)
        elem.style.border='solid 1px red';
        /*
         if you want to modify the contnent of h1 tag use innerText or textContent
        innerText: This property allows you to get or set the text content inside an element, including only the visible text.
        textContent: This property also allows you to get or set the text content inside an element, but it will include all text, even hidden elements.
        elem.innerText = 'Hello World'
        */

        const elements =  this.template.querySelectorAll('.name')
        Array.from(elements).forEach((item) =>
        {
            console.log(item.innerText);
            item.setAttribute('title',item.innerText);
        })


        //lwc:dom='manual' means we are telling to lwc dom we are manupulating do manually 
        const manualDom = this.template.querySelector('.manualDom');
        manualDom.innerHTML='<p>Hello i am from dynamic child component</p>';
    }
}