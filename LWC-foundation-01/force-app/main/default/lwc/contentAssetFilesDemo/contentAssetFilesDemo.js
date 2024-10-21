import { LightningElement } from 'lwc';
import ASSET_file from '@salesforce/contentAssetUrl/Cert4670174Associate20240712pdf';
import JS_HANDBOOK from '@salesforce/contentAssetUrl/javascripthandbookpdf';
export default class ContentAssetFilesDemo extends LightningElement {

    url =ASSET_file;
    jsBook =JS_HANDBOOK;
}