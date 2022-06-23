import { LightningElement } from 'lwc';

export default class LwcComboBox extends LightningElement {

    value ='';

    get options(){
        return [
     
            { label: 'Cricket', value: 'MsDhoni' },
            { label: 'Developer', value: 'Ankush' },
        ];
    }
    pickValueFromAccount(event)
    {
        this.value=event.detail.value; 
    }

}


