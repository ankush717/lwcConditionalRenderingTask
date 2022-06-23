import { LightningElement } from 'lwc';

export default class LwcApiExamlpleParentComponent extends LightningElement {

    parentbuttonEvent()
    {
       this.template.querySelector("c-lwc-Api-Decorator-Example").valueChange();

    }

}