import { LightningElement } from 'lwc';
import USER_ID from '@salesforce/user/Id';
import IS_GUEST from '@salesforce/user/isGuest';
export default class GetUserInfoDemo extends LightningElement {
    user_id =  USER_ID;
    is_guest = IS_GUEST;
}