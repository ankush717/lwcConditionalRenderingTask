trigger rolluptrigger on Account (before insert,before update) {
    
      List<Account> accList = new List<Account>([Select id from Account]);
            
       integer a=1;
    
        for(Account acc1:trigger.new){
            
            for(Account acc:accList)
            { 
                a++;       
            }
            acc1.rolluptriOutput__c=a;
            
            system.debug('record count is '+a);
        }
    }