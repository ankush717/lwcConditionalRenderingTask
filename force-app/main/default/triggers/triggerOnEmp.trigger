trigger triggerOnEmp on emp__c (before insert) 
{
    if(Trigger.Isbefore && Trigger.isInsert== True)
    {
        
        for(emp__c  a : Trigger.new )
        {
   
            if(a.Test_Trigger__c=='Good')
            {
                
                a.empjob__c='Its my first Trigger Program';
            }
            
            else
            {
                 a.empjob__c='ankush is good developer';
            }           
       }       
    }
}