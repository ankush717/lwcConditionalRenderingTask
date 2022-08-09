import { LightningElement } from 'lwc';

export default class LwcParentToChildCommunicationParentCmp extends LightningElement {

    startCounter=0

    handleChange(event) 
    {

        this.startCounter=parseInt(event.target.value);

    }
 

    handleIncrement(event1)
    {
       const st=this.template.querySelector('c-lwc-parent-to-child-communication-child-cmp');
        st.increment();

         //there is another way to write same this
        //template.querySelector('c-lwc-parent-to-child-communication-child-cmp').increment();
    }

}