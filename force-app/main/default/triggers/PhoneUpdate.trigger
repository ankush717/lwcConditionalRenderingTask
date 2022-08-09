trigger PhoneUpdate on Account (before insert,before update) {
    
    if(trigger.isBefore &&trigger.isInsert)
    {
        for(account acc:trigger.new)
        {           
            if(acc.name=='ankush')
            {
                 acc.Phone ='7972422250';
            }
        
     }
    }

      if(trigger.isafter && trigger.isInsert)
    {
        List<Contact> conList= new List<Contact>();
        
        for(account acc:trigger.new)
        {
      
            if(acc.name=='Salesforce')
            {
                
                Contact con = new Contact();
                con.lastname=acc.name+'Contact';         
                conList.add(con);
            }
        
     }
        insert conList;
       
    }
}


