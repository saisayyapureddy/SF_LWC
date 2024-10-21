import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DataValidation extends LightningElement {


    startDate;
    endDate;
    handleDateChange(event)
    {
        const{name,value} = event.target;
        this[name] = value;
    }

    validationHandler()
    {
        if(this.validate(this.startDate,this.endDate))
        {
            console.log('date is valid ');
        }
        else{
            
            console.log('date is not valid ');

            const evt = new ShowToastEvent({
                title: 'Date validation',
                message: 'startDate must be less than endDate ',
                variant: 'error'
            });
            this.dispatchEvent(evt);
        }
    }

        validate(startDate,endDate)
        {
            return new Date(startDate) < new Date(endDate)
           
    }

}
    