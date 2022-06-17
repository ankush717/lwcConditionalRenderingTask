import { LightningElement,track  } from 'lwc';

export default class LwcConditionalRendering extends LightningElement {

   @track  dynamiclabel='show';

   @track  mytitle='ankush this side';

   @track cardvisible =false;

   changeLBL(event)
    {
       const lable=event.target.label;

        if(lable ==='show')
        {
            this.dynamiclabel='hide';
            this.cardvisible=true;
        }
        else if(lable==='hide')
        {
            this.dynamiclabel='show';
            this.cardvisible=false;

        }

    }

}