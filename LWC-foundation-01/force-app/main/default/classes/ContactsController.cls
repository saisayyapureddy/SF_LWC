
public with sharing class ContactsController {

                @AuraEnabled(cacheable=true)
                public static List<Contact> getContactList(String recordId){
                    try {
                        return [Select Id,Name,Phone,Email from Contact];
                    } catch (Exception e) {
                        throw new AuraHandledException(e.getMessage());
                    }
                
            }
        


}