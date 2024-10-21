public with sharing class OpportunityController {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities() {
        System.debug('Fetching Opportunities');
        List<Opportunity> opps = [SELECT StageName FROM Opportunity];
        System.debug('Opportunities fetched: ' + opps);
        return opps;
    }
}
