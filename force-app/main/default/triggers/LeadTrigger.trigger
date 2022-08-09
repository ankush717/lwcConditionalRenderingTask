trigger LeadTrigger on Lead (before insert,before update) {
    
    if(trigger.isBefore &&(Trigger.isInsert || Trigger.isUpdate)){
        
        List<Lead>varListLead=new List<Lead>();
        
        varListLead=[Select ID ,AnnualRevenue from Lead];
        
           System.debug('The Test'+varListLead);
               }
        
        
    }