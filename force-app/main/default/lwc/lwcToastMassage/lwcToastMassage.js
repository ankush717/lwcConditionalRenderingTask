import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LwcToastMassage extends LightningElement {


    warning()
    {
           const evt=new ShowToastEvent
           (

            {
              title: 'Toast error',
              message: 'Array index our of bound',
              variant:'warning',
              mode:'dismissable'

            }

           );

           this.dispatchEvent(evt);


    }

}