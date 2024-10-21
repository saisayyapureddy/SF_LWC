import { LightningElement } from 'lwc';


import signin from './signIn.html';
import signup from './signUp.html';
import general from './renderTemplate.html'
export default class RenderTemplate extends LightningElement {

    temp='';
    render()
    {
        return this.temp === 'Signin' ? signin : this.temp==='Signup' ? signup : general;
        
    }


    handler(event)
    {
        this.temp = event.target.label;
    }

    backHandler(event)
    {
        this.temp = '';
    }

    handleSubmit(event)
    {
        alert(`${event.target.title} successfully!!`)
        console.log(`${event.target.title} successfully!!`);
    }

}