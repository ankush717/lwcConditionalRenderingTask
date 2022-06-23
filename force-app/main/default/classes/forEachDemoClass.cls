public with sharing class forEachDemoClass
 {
    @AuraEnabled(cacheable =true)
    public static List<player__c> getPlayersList()
     {

        List<player__c> l1= new List<player__c>([Select id, Name FROM player__c ]);

        return l1;

    }
}
