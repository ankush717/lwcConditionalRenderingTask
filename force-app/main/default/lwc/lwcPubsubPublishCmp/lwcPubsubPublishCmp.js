import { LightningElement } from 'lwc';
import pubsub from 'c/pubsubjs';

export default class LwcPubsubPublishCmp extends LightningElement 
{

    message
    inputHandler(event) 
    {

       this.message=event.target.value;

    }

   publishHandler()
   {
            pubsub.publish('componentA',this.message); 

   }
                
}