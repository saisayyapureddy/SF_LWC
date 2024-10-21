public with sharing class PdfController {

   @AuraEnabled
   public  static Attachment generatePdf(String recordId,String htmlData) {

    pageReference pgRef = Page.renderAsPdf;
    pgRef.getParameters().put('pdfText',htmlData);
    
    
    Contact con = new Contact(Id=recordId);
    Attachment obj = new Attachment();
    obj.Name='invoice.pdf';
    obj.ParentId=con.Id;
    obj.Body=pgRef.getContentaspdf();
    obj.IsPrivate=false;

    insert obj;
    return obj;


    }



}