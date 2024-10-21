import { LightningElement } from 'lwc';
import DESCRIPION_ONE from '@salesforce/label/c.labelOne';
import DESCRIPION_TWO from '@salesforce/label/c.labelTwo';

export default class LabelsTextDemo extends LightningElement {

    Labels={

        labelOne:DESCRIPION_ONE,
        labelTwo:DESCRIPION_TWO
    }
}