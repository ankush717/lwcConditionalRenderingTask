import { LightningElement,track } from 'lwc';
import getValue from '@salesforce/apex/ComboBoxDemo.getAccountRecords';

export default class CallApexFromLwcComboBox extends LightningElement 
{
    @track value ='';
    @track accOption =[];

    get options()
    {
        return this.accOption;
       
    }
     connectedCallback()
     {
        getValue()
        
            .then(result =>{
                let arr=[];
                for( var i=0;i<result.length;i++)
                {

                    arr.push({label:result[i].Name, value:result[i].Id});
                }
                this.accOption=arr;
            })

    }

    pickValueFromAccount(event)
    {
        this.value=event.detail.value; 
    }
    
}