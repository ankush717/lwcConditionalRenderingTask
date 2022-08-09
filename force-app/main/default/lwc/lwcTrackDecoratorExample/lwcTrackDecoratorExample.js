import { LightningElement,track } from 'lwc';

export default class LwcTrackDecoratorExample extends LightningElement {

@track fullname={fname:'', lname:'' };

valueUpdate(event)
{
  const field=event.target.name;

  if(field==='fname')

   {
     this.fullname.fname=event.target.value;
   }
   else if(field==='lname')
   {
    this.fullname.lname=event.target.value;

   }
}

}

