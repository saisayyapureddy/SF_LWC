import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList=['Audi','Benetle','Ferrari','Ford','Jeep','Mazda'];

    companyList=[
        
            {
                id:1,
                companyName:'Amazon',
                ceo:'Sai'
            },
            {
                id:2,
                companyName:'Facebook',
                ceo:'Mark'
            },
            {
                id:3,
                companyName:'Google',
                ceo:'Nadella'
            },
            {
                id:4,
                companyName:'Microsoft',
                ceo:'Manu'
            }
        
    ]
    
}