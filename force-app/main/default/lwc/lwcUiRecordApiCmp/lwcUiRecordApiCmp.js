import { LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import Name_Field from '@salesforce/schema/Account.Name';
import Id_Field from '@salesforce/schema/Account.Id';
import { updateRecord } from 'lightning/uiRecordApi';


export default class LwcUiRecordApiCmp extends LightningElement {

    accountID
    nameValue='';

handleId(event)
{
    this.accountID=event.target.value;
    
}

handleName(event)
{

    this.nameValue=event.target.value;

}

handleUpdateAccount()
{

    const fields={};
    
    fields[Id_Field.fieldApiName]=this.accountID;
    fields[Name_Field.fieldApiName]=this.nameValue;
 
    console.log("Account fields is  "+JSON.stringify(fields));


    const recordInput={fields};

    updateRecord(recordInput)
     .then(result=>{
        console.log("result"+JSON.stringify(result));

     })
     .catch(error=>{

        console.error("error is"+JSON.stringify(error));
     }
     );

}
}


