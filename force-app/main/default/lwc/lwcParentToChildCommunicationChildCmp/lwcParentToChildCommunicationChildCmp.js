import { LightningElement,api } from 'lwc';

export default class LwcParentToChildCommunicationChildCmp extends LightningElement {


@api counter=0;


@api increment()
{
    this.counter=this.counter+100;
}

}


