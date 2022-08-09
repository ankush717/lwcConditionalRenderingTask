import { LightningElement } from 'lwc';
import {loadScript,loadStyle} from 'lightning/platformResourceLoader';
import JQUERY  from '@salesforce/resourceUrl/jqueryfile';

export default class LwcJqueryCmp extends LightningElement {


renderedCallback()
{
    loadScript(this,JQUERY)
    .then(()=>{

       window.alert('JQUERY is loaded');
    })
    .catch(error=>{

        console.log('failed to load JQUERY'+error);

    });
}

hidetxt(event)
{

    $(this.template.querySelector('p')).hide();
}
showtext(event)
{
    $(this.template.querySelector('p')).show();
}

}