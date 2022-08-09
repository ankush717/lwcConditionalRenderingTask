import { LightningElement } from 'lwc';

export default class LwcChildToParentCommunitcationParentCmp extends LightningElement {

    countvalue=0;

    increment()
    {
         this.countvalue++;

    }
    
    decrement()
    {

        this.countvalue--;

    }

    multi(event)
    {
        const tempvariable= event.detail;

        alert('multipy handlemethod value is '+tempvariable);

        this.countvalue= this.countvalue*tempvariable;
        
    }

}