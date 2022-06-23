import { LightningElement,track,api } from 'lwc';
import getSumResult from '@salesforce/apex/CalculateNumberss.getSummResult';

export default class LwcToApexValueTransfer extends LightningElement {

    @track fNumber;
    @track sNumber;
    @track sum;
    @track errors;

    handleClick(){
        getSumResult({firstNumber:this.fNumber,secondNumber:this.sNumber})
       
    }
    handleChange(event){
        if(event.target.name==='fstNumber'){
            this.fNumber = event.target.value;            
        }
        else if(event.target.name==='scdNumber'){
            this.sNumber = event.target.value;            
        }
    }
}