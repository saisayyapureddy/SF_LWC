import { api, LightningElement } from 'lwc';

export default class Tile_car extends LightningElement {
    @api car = {};

    handleClick()
    {
        this.dispatchEvent(new CustomEvent('selected', { detail:{
            car: this.car.Id
        }  }));
    }
}
