public class OppUpdateTriHandler {
    
    public static void show(List<Opportunity> varListOppoNew, List<Opportunity>varListOppoOld){
        
        
         for(Opportunity on1:varListOppoNew)
    {
        date close=on1.CloseDate;
        
        for(Opportunity ot:varListOppoOld)
        {
            System.debug(ot.CloseDate);
            
                System.debug(close);
            
           if(ot.CloseDate!=close)
           {
               
               on1.StageName='Closed Lost';
               
           }             
        }       
    }
        
    }

}