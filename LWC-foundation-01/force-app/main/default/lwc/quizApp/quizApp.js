import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    
    selected ={} //used to store the selected answers
    correct=0; //show the number correct answers
    submitInd = false; //the result Message on the screen
    questionsArray =[
        {
            id:"quesstion1",
            question:"which one of the following is not a template loop?",
            options:{
                a:"for:each",
                b:"iteratorLoop",
                c:"map"
            },
            correctAnswer:"c"
        },
        {
            id:"quesstion2",
            question:"which one of the following file is invalid in apex?",
            options:{
                a:".SVG",
                b:".JS",
                c:".Apex"
            },
            correctAnswer:"c"
        },

        {
            id:"quesstion3",
            question:"which one of the following file is not a directive?",
            options:{
                a:"for:each",
                b:"iterator loop",
                c:".@track"
            },
            correctAnswer:"c"
        }
    ]

    get allAnswered()
    {
        return !(Object.keys(this.selected).length === this.questionsArray.length)
    }

    //for applying dynamic style to our result message
    get isScoredFull()
    {
        return `slds-text-heading_large ${this.questionsArray.length===this.correct ?`slds-text-color_success`:`slds-text-color_error`}`
    }
    //this handler will call every time when user select options
    changeHandler(event)
    {
        //Object destructring
        const {name,value} =event.target;
        this.selected={...this.selected,[name]:value}
    }


    //used to submit the result
    submitHandler(event)
    {
        event.preventDefault();
        //here we are filtering the selected answers with correct answers
        const num =  this.questionsArray.filter( (item) => this.selected[item.id] ===item.correctAnswer)
        this.correct=num.length;
        this.submitInd = true;
        console.log('correct answers is : '+this.correct)
    }
    //to reset the result
    resetHandler(event)
    {
        this.selected={};
        this.correct=0;
        this.submitInd=false;
    }
}