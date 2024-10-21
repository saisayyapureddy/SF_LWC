public with sharing class OlderAccountsUtility {
    @AuraEnabled
    public static void getAccounts(){
        try {
           Account account = [select Name,Id from Account where Name='Burlington Textiles Corp of America'];
            
         //  System.debug('Account Name: ' + account.Name + account.Id);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}