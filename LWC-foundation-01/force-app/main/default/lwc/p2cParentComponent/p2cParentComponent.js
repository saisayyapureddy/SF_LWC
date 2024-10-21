import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    //complex data array objects 
    carouselData =[
        {
            src :"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First Card",
            description :"First card description."

        },
        {
            src :"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card",
            description :"Second card description."
        },
        {
            src :"https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "Third Card",
            description :"Third card description."
        }

    ]

    percentage =9;
    numberAction(event)
    {
        this.percentage =event.target.value;
    }

    //getting child element tag and calling child public method
    sliderClick()
    {
        this.template.querySelector('c-p2c-child-slider-component').resetSlider();
    }
}

