public with sharing class CalculateNumberss {
   
    @AuraEnabled
    public static integer getSummResult(integer firstNumber,integer secondNumber){
        
        return (firstNumber+secondNumber);
    }


}
