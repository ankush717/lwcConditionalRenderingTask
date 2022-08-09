@RestResource(urlMapping='/SignupApi/*')
global class RestSignupDetail {

     @HttpGet
        global static List<SignupDetail__c> getSignupDetailByID()
        {
            
            return [select Name,Phone__c,DOB__c,Course__c,Fees__c,address__c from SignupDetail__c limit 10];
            
        }
    
    @HttpPost
     global static String doPost(String Name,String Phone,Date DOB,String Course,Integer Fees,String address )
    {
        SignupDetail__c sd= new SignupDetail__c();
        sd.Name=Name;
        sd.Phone__c=Phone;
        sd.DOB__c=DOB ;
        sd.Course__c=Course ;
        sd.Fees__c=Fees ;
        sd.address__c=address ;
        insert sd;
        return sd.id;
        
    }
    
    @HttpDelete
    global static void doDelete()   
    {
        RestResponse res = RestContext.response;
        
        RestRequest req = RestContext.request;
        
        String AccNumber= req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
        
        Account result=[Select Id,Name,Phone from account where AccountNumber=:AccNumber];

        delete result;
    } 
}