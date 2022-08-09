import { LightningElement,wire } from 'lwc';
import { subscribe,MessageContext } from 'lightning/messageService';
import COUNTING_UPDATE_CHANNEL from '@salesforce/messageChannel/Counting_Update__c';

export default class LwcSubComponent extends LightningElement {

counter=0;

@wire(MessageContext)
messageContext;

connectedCallback()
{
    this.subscribeToMessageChannel();

}

subscribeToMessageChannel()
{
    this.subscription = subscribe(
        this.messageContext,
        COUNTING_UPDATE_CHANNEL,
        (message)=>this.handleMessage(message)
        );
      
}

handleMessage(message)
{
  
    //alert("our message is"+JSON.stringify(message));


    if(message.operator == 'add')
    {
        this.counter=this.counter+message.constant;

    }
    else if(message.operator == 'sub')
    {

        this.counter=this.counter-message.constant;

    }
    else if(message.operator == 'mul')
    {
        this.counter=this.counter*message.constant;

    }
}

}