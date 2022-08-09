import { LightningElement,wire } from 'lwc';
import { publish,MessageContext } from 'lightning/messageService';
import COUNTING_UPDATE_CHANNEL from '@salesforce/messageChannel/Counting_Update__c';

export default class LwcPubComponent extends LightningElement {

@wire(MessageContext)
messageContext;

handleIncrement(){

//alert("Increment working");

//another way to write a payload
// const payload =;
//publish(this.messageContext, COUNTING_UPDATE_CHANNEL,{ operator:'add', constant :1 } )


const payload ={
    operator:'add',
    constant:1
};

publish(this.messageContext, COUNTING_UPDATE_CHANNEL,payload)

}

handleDecrement()
{

        const payload ={
        operator:'sub',
        constant:1
    };

    publish(this.messageContext, COUNTING_UPDATE_CHANNEL,payload)

}

handleMultiplication()
{
    const payload ={
        operator:'mul',
        constant:2
    };

    publish(this.messageContext, COUNTING_UPDATE_CHANNEL,payload)


}

handleMultiplication1()
{
    alert('hello dbclick is working');
}


handleMultiplication3()
{
    alert('hello handleMultiplication3 is working');

}
}