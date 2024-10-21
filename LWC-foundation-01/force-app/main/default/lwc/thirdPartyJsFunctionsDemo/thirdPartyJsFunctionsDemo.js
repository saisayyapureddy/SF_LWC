import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment_js';
import ANIMATE from '@salesforce/resourceUrl/animate';
import {loadScript,loadStyle} from 'lightning/platformResourceLoader';

export default class ThirdPartyJsFunctionsDemo extends LightningElement {

    dateInput;
    dateInd =false;
    renderedCallback()
    {   
        if(this.dateInd)
        {
            return
        }else{

            /*
            Code Explanation:
            Promise.all(): You're using this to ensure that multiple promises are executed concurrently and all need to be
             resolved before proceeding.loadScript(): This is part of the Lightning Web Components platform resource loader 
             (loadScript is from the lightning/platformResourceLoader module), and you're loading the Moment.js script
            dynamically.
            
            main use of promise is to handle asynchronous operations and make them synchronous.
            below i  used promise.all to load multiple scripts and then used .then to execute the code once all the scripts are loaded.
            if we have only single script to load, then we can use loadScript directly.

            below two style scripts are loading now 
            */

            Promise.all([
                loadStyle(this,ANIMATE+'/animate/animate.min.css'),
                loadScript(this,MOMENT+'/moment/moment.min.js')
            ])
            .then(()=>{
                this.displayDate()

            }).catch(error=>{
                console.log('error is '+error);
            })
            this.dateInd=true;
     }
            
   }


 displayDate()
    {  
        
        this.dateInput  = moment().format('LLLL');
        console.log(dateInput);
    }
}