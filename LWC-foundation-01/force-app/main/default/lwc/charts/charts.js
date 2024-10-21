import { LightningElement, api } from 'lwc';
import chartJs from '@salesforce/resourceUrl/chartsandgraphs'
import {loadScript} from 'lightning/platformResourceLoader'
export default class Charts extends LightningElement {
    isChartJsInitialized = false
    chart
    @api type;
    @api chartData;
    @api chartlabels;
    @api chartHeading;

   lab =  ["Closed Won","Negotiation/Review","Id.Decision Makers","Proposal/Price Quote","Value Proposition","Prospecting","Needs Analysis","Qualification"];
    dt=[22,2,3,2,3,7,2,5]
connectedCallback(){
    console.log('connected call back callaed child ');
    console.log('Received chartData:', this.chartData);
    console.log('Received chartLabels:', this.chartlabels);
    console.log('Received chartHeading:', this.chartHeading);
}

    

    // lbl = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
    // dt =[99,98,100,10,11,12,5]
    

    renderedCallback() {
        if (this.isChartJsInitialized) {
            // If chart exists, destroy it before reinitializing to avoid errors
            return;
        }
    
        loadScript(this, chartJs + '/chartJs/Chart.js').then(() => {
            console.log("ChartJs loaded successfully");
            this.isChartJsInitialized = true;
            this.loadCharts();
        }).catch(error => {
            console.error(error);
        });
    }
    
    
    loadCharts(){
        window.Chart.platform.disableCSSInjection = true

        const canvas = document.createElement('canvas')
        this.template.querySelector('div.chart').appendChild(canvas)
        const ctx = canvas.getContext('2d')
        this.chart = new window.Chart(ctx, this.config())
    }
    config(){
        return {
            type: this.type?this.type:'doughnut',
            data: {
                labels: this.lab?this.lab:[], //this.chartLabels ? this.chartLabels : [], // Use chartLabels from parent
                datasets: [{
                    label: this.chartHeading, // Use chartHeading from parent
                    data: this.dt?this.dt:[],//this.chartData ? this.chartData : [], // Use chartData from parent
                    backgroundColor: [
                       'rgba(255, 87, 34, 0.8)',    // Vibrant Orange
                        'rgba(63, 81, 181, 0.8)',    // Indigo Blue
                        'rgba(0, 188, 212, 0.8)',    // Cyan
                        'rgba(76, 175, 80, 0.8)',    // Green
                        'rgba(255, 193, 7, 0.8)',    // Amber
                        'rgba(156, 39, 176, 0.8)',   // Deep Purple
                        'rgba(233, 30, 99, 0.8)',    // Pink
                        'rgba(103, 58, 183, 0.8)' 
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'right'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        }
    }
    
}