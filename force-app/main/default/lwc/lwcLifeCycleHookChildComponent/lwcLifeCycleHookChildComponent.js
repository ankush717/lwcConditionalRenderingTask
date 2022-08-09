import { LightningElement,track } from 'lwc';

export default class LwcLifeCycleHookChildComponent extends LightningElement {

@track property;

constructor()
{
    super();
    alert('child constructor is running');  
}

connectedCallback()
{
    alert('connectedcallback  is runninng from child');
}
    
renderedCallback()

{
    alert('rendercallback is runninng from child');

}

disconnectedCallback()
{
    alert('disconnectedCallback is runninng from child');

}

errorCallback()
{
    alert('disconnectedCallback is runninng from child');

}
}