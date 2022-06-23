import { LightningElement,track } from 'lwc';

export default class LwcLifeCycleHookChildComponent extends LightningElement {

@track property;

constructor()
{
    super();
    alert('child constructor is running');


    
}
    
}