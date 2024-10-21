import { LightningElement } from 'lwc';

import hasViewPermission from '@salesforce/userPermission/ViewAllData';
import hasCustomermission from '@salesforce/customPermission/show_data';

export default class PermissionInformationDemo extends LightningElement {

    get hasViewPermissionData() {
        return hasViewPermission;
    }

    get hasCustomermissionData() {
        return hasCustomermission;
    }
}