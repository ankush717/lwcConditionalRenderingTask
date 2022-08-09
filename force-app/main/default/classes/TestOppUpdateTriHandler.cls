@isTest
public class TestOppUpdateTriHandler {
      
@testSetup 
  public static void prepareData()
 {      
     //create common test account
     
     List<Opportunity> test1= new List<Opportunity>();
     
     for(integer i=0;i<=20;i++)
     {
         test1.add(new Opportunity(Name='test'+i ,CloseDate=date.parse('7/27/2022'),StageName='Qualification'));
         
     }
     
     insert test1;
 }      
    
@isTest
    public static void testmethod1()
    { 
        
           Opportunity opp1=[Select CloseDate,StageName From Opportunity Where Name='test0'];
        
             date oldCloseDate= opp1.CloseDate;
        
            String oldStageName=opp1.StageName;
        
        
            //this update is local to this test  method only.
            opp1.CloseDate=date.parse('7/29/2022');
        
            Update opp1;
          
           date newCloseDate= opp1.CloseDate;
        
           System.debug('test data new close date is '+newCloseDate);   
        
           if(oldCloseDate!=newCloseDate)
           {
               opp1.StageName='Closed Lost';
           }
          Update opp1;
        
          String newStageName=opp1.StageName;

        
        System.assertEquals(date.parse('7/29/2022'), newCloseDate);
        
        System.assertEquals('Closed Lost', newStageName, 'both name are diffrent so our test class working properly ');
       
    }   
    
    

 @isTest
    public static void testmethod2()
    { 
        Opportunity opp1=[Select CloseDate,StageName From Opportunity Where Name='test0'];
        
             date oldCloseDate= opp1.CloseDate;
        
            String oldStageName=opp1.StageName;
        
        
            //this update is local to this test  method only.
            opp1.CloseDate=date.parse('7/29/2022');
        
            Update opp1;
          
           date newCloseDate= opp1.CloseDate;
        
           System.debug('test data new close date is '+newCloseDate);   
        
           if(oldCloseDate!=newCloseDate)
           {
               opp1.StageName='Closed Lost';
           }
          Update opp1;
        
          String newStageName=opp1.StageName;

        System.assertEquals('Closed Lost', newStageName);
        
    }   
       
}