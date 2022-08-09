import { LightningElement,wire,track } from 'lwc';

import websitePage from './websitePage.html';
import errorpage from './showErrorPage.html';


export default class LwcLifeCycleHooks extends LightningElement {

@track error;
@track stack;


render()
{

    if(this.error==true)
    {
        return errorpage;
    }
    else
    {
        return websitePage;

    }

}

    errorCallback(error,stack){

        alert('errorCallback is  running from parent');

       this.error=error;
       this.stack=stack;
    }
}

