import { api, LightningElement } from 'lwc';
import  PLAYER_OBJECT from '@salesforce/schema/player__c';
import  NAME_FIELD from '@salesforce/schema/player__c.Name';
import  EMAIL_FIELD from '@salesforce/schema/player__c.Email__c';
import  GOAL_FIELD from '@salesforce/schema/player__c.Goal__c';
import  IMAGE_FIELD from '@salesforce/schema/player__c.imageFormula__c';

export default class LwcRecordViewFormCmp extends LightningElement {

objectApiName=PLAYER_OBJECT;
namefield=NAME_FIELD;
emailfield=EMAIL_FIELD;
goalfield=GOAL_FIELD;
imagefield=IMAGE_FIELD;

}