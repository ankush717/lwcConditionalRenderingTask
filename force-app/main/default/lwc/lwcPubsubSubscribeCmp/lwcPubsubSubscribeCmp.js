import { LightningElement } from 'lwc';
import pubsub from 'c/pubsubjs';

export default class LwcPubsubSubscribeCmp extends LightningElement {

    message
    connectedCallback()
    {
           this.callSubscriber();

    }
    callSubscriber()
    {
        pubsub.subscribe('componentA',(message)=>{

            this.message=message;
          } )

    }
}