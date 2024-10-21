
import { LightningElement } from 'lwc';

export default class DynamicCss extends LightningElement {
    percentage =10;

    changeHandler(event)
    {
        this.percentage =event.target.value
    }

    //giving dynamic width to style element
    get widthPercentage()
    {
        return `width:${this.percentage}%`
    }
}