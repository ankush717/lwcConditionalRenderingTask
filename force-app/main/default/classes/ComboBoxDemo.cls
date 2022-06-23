public with sharing class ComboBoxDemo {
    
@AuraEnabled
public static List<Account> getAccountRecords(){

List<Account> l1=new List<Account>([Select id,Name From Account]);

return  l1;

}

}
