trigger ValiAcc on Account (before insert,before update) {
        
   for(Account acc:Trigger.new )
   {
       
       if(String.isBlank(acc.Site))
       {
          acc.addError('site field is required to fill'); 
       }
                  
   }
    
}