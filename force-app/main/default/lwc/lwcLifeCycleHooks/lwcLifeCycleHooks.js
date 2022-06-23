import { LightningElement } from 'lwc';

export default class LwcLifeCycleHooks extends LightningElement {

constructor(){
    super();
    alert('parent constrcutor is runninng');


    //define a varable is allowed
    let name='salesforce'
    if(name)
    {
        this.property='salesforce  lwc Developer';
    }

    
}


}