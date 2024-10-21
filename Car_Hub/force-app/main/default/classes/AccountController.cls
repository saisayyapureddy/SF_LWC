public with sharing class AccountController {

    @AuraEnabled(Cacheable=true)
    public static List<Account> getAccountDetails(){
        try {
            // Corrected the SOQL query syntax
            return [SELECT Id, Name, Phone, website, (SELECT Id, Name, Phone,Email FROM Contacts) FROM Account LIMIT 15];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
