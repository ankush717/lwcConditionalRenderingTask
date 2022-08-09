import { LightningElement } from 'lwc';

import {NavigationMixin} from 'lightning/navigation';

export default class LwcNavigationService extends NavigationMixin(LightningElement) {

    handleClick()
    {
//naivigate to tab lightning page tab.

        this[NavigationMixin.Navigate]({

            type:'standard__navItemPage',
            attributes:{
                apiName:'myLightningPage',
            }
        })
      
    }


    handleClick1()
    {
      //naivigate to tab object page tab.

        this[NavigationMixin.Navigate]({

            type:'standard__objectPage',
            attributes:{
                objectApiName:'player__c',
                actionName:'list'
            },

            state:{ 
                filterName:'recent',
            }
        })
    }




    handleClick2()
    {
      //naivigate to tab object page tab.

        this[NavigationMixin.Navigate]({

            type:'standard__objectPage',
            attributes:{
                objectApiName:'player__c',
                actionName:'new'
            }

        })
    }



    handleClick3()
    {
//naivigate to tab record page tab in view mode.

this[NavigationMixin.Navigate]({

    type:'standard__recordPage',
    attributes:{
        recordId:'a0V5j0000009g1GEAQ',
        objectApiName:'player__c',
        actionName:'view'
    }

})

    }


    handleClick4()
    {


    //naivigate to tab record page tab in edit mode.

     this[NavigationMixin.Navigate]({

    type:'standard__recordPage',
    attributes:{
        recordId:'a0V5j0000009g1GEAQ',
        objectApiName:'player__c',
        actionName:'edit'
    }



})

    }





    handleClick5()
    {


    //naivigate to particuler websitePage.

     this[NavigationMixin.Navigate]({

    type:'standard__webPage',
    attributes:{
       url:'https://infofeat.com/'
    }
})

    }


    handleClick6()
    {

    //naivigate to files .

     this[NavigationMixin.Navigate]({

    type:'standard__namedPage',
    attributes:{
       pageName:'filePreview'
    },
    state:{
        recordIds:'0695j00000AVsJbAAL,0695j00000AVsJpAAL',
        selectedRecordId:'0695j00000AVsJpAAL'
    }
})

    }

}