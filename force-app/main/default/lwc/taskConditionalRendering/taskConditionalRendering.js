import { LightningElement,track } from 'lwc';
import JAVA_DEF from '@salesforce/label/c.Java_def';
import javaimg from '@salesforce/resourceUrl/javaimage';

import oracleimg from '@salesforce/resourceUrl/oracleimage';

import reactimg from '@salesforce/resourceUrl/reactimage';

export default class TaskConditionalRendering extends LightningElement {
    Javadef = JAVA_DEF;
    @track javavisble=false;

    @track myjavavariable='java is a object oriented language';

    @track oraclevisble=false;

    @track myoracleable='oracle is database language';

    @track reactvisble=false;

    @track myreactvariable='react is js library';

   jimg=javaimg;
   oimg=oracleimg;
   rimg=reactimg;

    java()
    {
  
         this.javavisble=true;
         this.oraclevisble=false;
         this.reactvisble=false;

    }
    oracle()
    {
        this.javavisble=false;
        this.reactvisble=false;
         this.oraclevisble=true;
        

    }

    react()
    {
         this.javavisble=false;
         this.oraclevisble=false;
         this.reactvisble=true;

    }

}