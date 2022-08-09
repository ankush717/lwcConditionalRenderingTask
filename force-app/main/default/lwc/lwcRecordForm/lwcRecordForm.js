import { LightningElement, track } from 'lwc';
import  PLAYER_OBJECT from '@salesforce/schema/player__c';
import  NAME_FIELD from '@salesforce/schema/player__c.Name';
import  EMAIL_FIELD from '@salesforce/schema/player__c.Email__c';
import  GOAL_FIELD from '@salesforce/schema/player__c.Goal__c';
import  IMAGE_FIELD from '@salesforce/schema/player__c.imageFormula__c';
export default class LwcRecordForm extends LightningElement {
    
    @track fields= [NAME_FIELD,EMAIL_FIELD,GOAL_FIELD,IMAGE_FIELD]
    objectApiName=PLAYER_OBJECT;
    recordId="a0V5j000000FtcWEAS";
    
}