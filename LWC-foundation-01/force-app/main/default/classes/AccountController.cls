public with sharing class AccountController {
   

    @AuraEnabled(Cacheable=true)
    public static List<Account>getAccountList()
    {
        return [Select Id,Name,Phone,Industry from Account LIMIT 10];
    }

    @AuraEnabled(Cacheable=true)
    public static List<Account>filterAccountByTpe(String type)
    {
        return [Select Id,Name,Phone,Industry,Type from Account where Type =:type LIMIT 5];
    }

    @AuraEnabled(Cacheable=true)
    public static List<Account>findAccountsBySearchKeyword(String enteredKey)
    {
        String key = '%'+enteredKey+'%';
        return [Select Id,Name,Phone,Industry,Type from Account where name LIKE :key LIMIT 5];
    }

    @AuraEnabled(Cacheable=true)
    public static List<Contact>getContacts()
    {
        return [Select Id,FirstName,LastName,Email,Phone from Contact LIMIT 15];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsListData(){
        return [SELECT Id, Name, Phone, AnnualRevenue, Industry from Account];
    }
}