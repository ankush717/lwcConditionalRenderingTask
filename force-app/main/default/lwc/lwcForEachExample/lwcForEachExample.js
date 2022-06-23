import { LightningElement,wire,track } from 'lwc';

import getvalue from '@salesforce/apex/forEachDemoClass.getPlayersList'

export default class LwcForEachExample extends LightningElement {

@track data=[];

@wire(getvalue)

myproperty;


}