trigger CountContact on Contact (after update ) {
      
       for(Contact con:trigger.new)
        {
    
         Account  AccList=[Select Active_Contact__c,(Select Active__c from Contacts Where Active__c=true) from Account where id=:con.AccountId ];

             System.debug(AccList.Contacts);
            
             System.debug(AccList.Contacts.size());
                
               AccList.Active_Contact__c=AccList.Contacts.size();
                
            update AccList;
            
        }
      
    }