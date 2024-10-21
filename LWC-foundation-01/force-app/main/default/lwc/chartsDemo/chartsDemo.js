import { LightningElement, wire } from 'lwc';
import getOpportunities from '@salesforce/apex/OpportunityController.getOpportunities'
export default class ChartsDemo extends LightningElement {
    pieChartLabels=[]
    pieChartData=[]


    connectedCallback()
    {
        console.log('conncected call back from parent')
    }
    
    @wire(getOpportunities)
    opportunityHandler({data, error}){
        if(data){
            console.log('inhandler')
            console.log(data)
            console.log('inhandler')
            const result = data.reduce((json, val) => ({
                ...json,
                [val.StageName]: (json[val.StageName] || 0) + 1
            }), {});
        
            // Logging the result object to make sure it contains keys and values
            console.log('Result:', JSON.stringify(result));
        
            if (Object.keys(result).length) {
                // Ensure you're making an immutable assignment to LWC tracked properties
                this.pieChartLabels = Object.keys(result);
                this.pieChartData = Object.values(result);
                // Logging to verify the pieChartLabels and pieChartData
                console.log("Pie Chart Labels: ", this.pieChartLabels);
                console.log("Pie Chart Data: ", this.pieChartData);
            }
        
        }
        if(error){
            console.error(error)
        }
    }
}