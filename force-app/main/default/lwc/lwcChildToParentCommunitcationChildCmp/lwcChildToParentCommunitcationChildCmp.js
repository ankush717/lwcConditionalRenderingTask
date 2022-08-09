import { LightningElement } from 'lwc';

export default class LwcChildToParentCommunitcationChildCmp extends LightningElement {

    handleSubstract()
    {

      this.dispatchEvent(new CustomEvent('substract'));

    }

    handleAdd()
    {
        this.dispatchEvent(new CustomEvent('addition'))

    }

    handleMultiply(event)
    {

      const temp= event.target.value ;
      alert('value of multiply event is '+temp)
      
      this.dispatchEvent(new CustomEvent('multiply',{ detail:temp}))
      
    }
    
}