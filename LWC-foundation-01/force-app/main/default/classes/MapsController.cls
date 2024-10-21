public with sharing class MapsController {
    @AuraEnabled(cacheable=true)
    // public static List<Account> getAccounts() {
    //     return [Select Id,Name,BillingStreet,BillingCity,BillingCountry,BillingState,BillingPostalCode from Account ORDER BY Name Desc LIMIT 10];
    // }
    public static List<Account> getAccounts(){
        try {

            return [Select Id,Name,Industry,Description,BillingStreet, BillingCity, BillingCountry, BillingState,BillingPostalCode from Account ORDER BY Name LIMIT 10];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
}