import { api, LightningElement } from 'lwc';

export default class SetterDemoChildComponent extends LightningElement {

    userData
   @api 
   get user()
   {
        return this.userData;
   }

   // this case always setter will recieve data from parent
   set user(data)
   {
       let newAge = data.age*2
       //below we are using spread operator to create shallow copy of object 
       //when we use spread operator if the property already existing on the left hand side and the same new right hand side property
       //right hand side property will ovverride the value 
       //see below it's ovveriding if suppose previous age is 25 and now age is 50s
       this.userData={...data, age:newAge,"location":"Hyderabad"}
   }
}