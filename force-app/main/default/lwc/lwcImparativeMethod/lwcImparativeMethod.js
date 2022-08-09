import { LightningElement,track } from 'lwc';
import getAccount from '@salesforce/apex/ContactController.getContactList'

export default class LwcImparativeMethod extends LightningElement {
    
    @track data;
    @track error='';  
    
        handleLoad()
        {
            getAccount()
            .then(result=>{

                  this.data=result;

             })

             .catch(error=>{

                 this.error = error;

             })

        }

    
}