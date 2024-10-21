import { api, LightningElement } from 'lwc';

export default class P2cChildSliderComponent extends LightningElement {
    val =20;
    sliderHandler(event)
    { 
        this.val =event.target.value

    }
    @api
    resetSlider()
    {
        this.val=50;
    }
}