public with sharing class PdfPageController {
    public String  pdfText{get;set;}
    public PdfPageController() {
           pdfText = String.escapeSingleQuotes(
            ApexPages.currentPage().getParameters().get('pdfText')
        );

    }
}