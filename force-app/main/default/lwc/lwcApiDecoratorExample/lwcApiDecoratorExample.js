import { LightningElement, api } from 'lwc';

export default class LwcApiDecoratorExample extends LightningElement
 {

@api itemName="child component is running";


@api valueChange()

{
    this.itemName="we are changing the value of child componet using parent onlciick event"
}

}