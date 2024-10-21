import { api, LightningElement } from 'lwc';
import generatePdf from '@salesforce/apex/PdfController.generatePdf';
export default class PdfGeneratorDemo extends LightningElement {

    @api recordId;
    imageUrl='https://img.freepik.com/premium-vector/document-payment-invoice-icon-vector_419328-1156.jpg';
    invoiceNumber='INV-0015';
    invoiceCreated='10/10/2020';
    
    invoiceInfo={
            invoiceNumber:'INV-0015',
            invoiceCreated:'10/10/2020',
            invoiceDueDate:'10/24/2020',
            companyName:'Troop Technologies Pvt. Ltd.',
            address1:'3rd Floor, Sector-62',
            address2:'Noida, Uttar Pradesh, India-201301',
            paymentTerms:'Due Upon Receipt'

    }


    clientData={
        clientName: 'John-texas.ltd.in',
        clientAddress:'3rd Floor, Sector-62',
        clientEmail:'John@gmail.com',
        clientPhone:'+91-9811864119'
        
    }



    services=[
        {
                serviceName:'Web Development',
                 serviceHours:'4',
                 serviceRate:2000
        }
        ,
        {
                serviceName:'Backend dev',
                 serviceHours:'6',
                 serviceRate:9000
        },
        {
                serviceName:'Mobile App',
                 serviceHours:'2',
                 serviceRate:5000
        }
    ]





   get totalAmount()
   {
       let total=0;
       this.services.forEach(element => {
           total+=element.serviceRate;
       });
       return total;
   }



   pdfHandler()
    {
        let pdf = this.template.querySelector('.container');
        console.log(pdf.outerHTML);


        generatePdf({recordId:this.recordId,htmlData:pdf.outerHTML}).then((response) =>
        {
            console.log('attachement id'+response);
            window.open(`https://sailwcsfcom586-dev-ed.develop.file.force.com/servlet/servlet.FileDownload?file=${response.Id}`)
           
        }).catch((error) => {
            console.log(error);
        });
   }
}


/*

Flow b?W LWC, vf page(renderAsPdf) and  apex pdfController(pdfController) and apex controller (pdfPagecontroller)

steps:

Here's a step-by-step explanation of how communication happens between the LWC component, Visualforce page, and Apex controller classes in your implementation:

### 1. **LWC Component (`pdfHandler()` method)**

- **User Action**: When the user clicks the **"Generate PDF"** button in the LWC component, the `pdfHandler()` method is triggered.

- **Gather HTML Content**: Inside the `pdfHandler()` method, it selects the HTML content of the `.container` div (which contains the invoice details) and stores it as a string in the `pdf.outerHTML` variable.

- **Calling Apex Method**: The `generatePdf` Apex method (from the `PdfController` class) is called using `generatePdf({recordId: this.recordId, htmlData: pdf.outerHTML})`. It sends two pieces of data to the Apex controller:
  - `recordId`: The ID of the related record (e.g., a `Contact` record in Salesforce).
  - `htmlData`: The HTML content that needs to be rendered as a PDF.

### 2. **Apex Controller Class (`PdfController`)**

- **Apex Method**: The `generatePdf` method in the `PdfController` class is invoked by the LWC component. It accepts two parameters:
  - `recordId`: The ID of the `Contact` to associate the PDF with.
  - `htmlData`: The HTML content (invoice) that will be passed to the Visualforce page for rendering.

- **Creating a PageReference Object**: The method then creates a `PageReference` object (`pgRef`) to refer to the Visualforce page (`Page.renderAsPdf`), which will render the PDF. 
  - The Visualforce page (`renderAsPdf`) is designed to render the passed HTML data into a PDF format.

- **Passing HTML to Visualforce Page**: The HTML content (`htmlData`) is passed as a URL parameter (`pgRef.getParameters().put('pdfText', htmlData)`) to the Visualforce page. The `pdfText` parameter in the Visualforce page receives the HTML content.

- **Generating PDF Content**: The `pgRef.getContentAsPdf()` method is then called to convert the HTML (rendered via Visualforce) into PDF format.

- **Storing the PDF**: The generated PDF content is saved as an `Attachment` in Salesforce. The `Attachment` object is created with:
  - `Name`: Set as `'invoice.pdf'`.
  - `ParentId`: Set to the `recordId` (in this case, the `Contact` record to which the PDF will be related).
  - `Body`: The binary content of the PDF file (`pgRef.getContentAsPdf()`).
  
  The `Attachment` is then inserted into Salesforce, and the method returns the attachment object (with the ID of the PDF).

### 3. **Visualforce Page (`PdfPageController`)**

- **Page Structure**: The Visualforce page is responsible for rendering the HTML content passed via the `pdfText` parameter as a PDF.

- **Receiving HTML Data**: The `PdfPageController` Apex controller retrieves the `pdfText` parameter using `ApexPages.currentPage().getParameters().get('pdfText')`. This data represents the HTML content sent from the LWC component.

- **Escaping Quotes**: Since the HTML content could contain single quotes, the method uses `String.escapeSingleQuotes()` to escape any single quotes that may cause issues during rendering.

- **Rendering HTML as PDF**: The Visualforce page outputs the HTML content using `<apex:outputText value="{!pdfText}" escape="false" />`. This renders the HTML without escaping it, allowing it to be formatted and converted into a PDF.

### 4. **PDF Download in LWC**

- **Handling the Response**: After the `generatePdf` method in the Apex controller creates and stores the PDF as an attachment, the attachment ID is returned to the LWC component.

- **Opening PDF**: The LWC component then opens the PDF in a new tab using:
  ```js
  window.open(`https://your-domain.force.com/servlet/servlet.FileDownload?file=${response.Id}`);
  ```
  This URL points to the PDF attachment that was created and allows the user to download or view the PDF.

---

### Simplified Communication Flow:

1. **LWC Component**: Sends the invoice HTML data to the `PdfController.generatePdf` method in Apex.
   
2. **Apex Controller**: 
   - Sends the HTML data to a Visualforce page (`renderAsPdf`).
   - Converts the HTML to a PDF and saves it as an `Attachment` in Salesforce.
   - Returns the ID of the generated PDF to the LWC component.

3. **Visualforce Page**: 
   - Receives the HTML data.
   - Renders the content as a PDF.

4. **LWC Component**: Opens the generated PDF file for the user to download or view.

This process ensures that the invoice is generated dynamically in LWC, converted to PDF via the Visualforce page, and then made available for download.


-----------------------------------------

clear steps 


To clarify the part where the **Visualforce page** and **PdfPageController** communicate and handle data transmission, let's break down the steps after the **PageReference** is created and how data flows between the LWC, Apex, Visualforce page, and the PdfPageController.

### 1. **LWC to Apex (PdfController)**

When the `generatePdf` method in the **Apex Controller** (`PdfController`) is called from the LWC, it sends the HTML content (`htmlData`) and the `recordId`. So far, this part is clear to you, as the LWC passes data to the Apex controller.

### 2. **Apex Controller to Visualforce Page via `PageReference`**

Once the `generatePdf` method in the **Apex Controller** receives the HTML data, here's the process:

#### Step 1: **Creating a PageReference**

The `PageReference pgRef = Page.renderAsPdf;` line creates a **PageReference** object that points to the **Visualforce page** (`renderAsPdf`), which is responsible for rendering the HTML into PDF format.

#### Step 2: **Passing Data to Visualforce Page Parameters**

Next, `pgRef.getParameters().put('pdfText', htmlData);` is called. This means the HTML content (`htmlData`) that was passed from the LWC is now set as a URL parameter called `pdfText`. This is similar to how query parameters work in a URL (like `example.com/page?param1=value1&param2=value2`).

In this case, the `pdfText` parameter holds the entire HTML content of the invoice. This is key because this HTML data needs to be rendered by the **Visualforce page**.

#### Step 3: **Visualforce Page Receives Data**

When the **Visualforce page** (the one defined in `Page.renderAsPdf`) is loaded, it can access the URL parameters (like `pdfText`) using the **Apex controller** that is assigned to it.

### 3. **Visualforce Page and PdfPageController**

The **Visualforce page** is bound to the `PdfPageController` Apex controller. Here's how data communication happens:

#### Step 1: **Retrieving `pdfText` Parameter in `PdfPageController`**

The `PdfPageController` is responsible for extracting the `pdfText` parameter from the URL. This is done using the following code in the controller's constructor:

```apex
public PdfPageController() {
    pdfText = String.escapeSingleQuotes(
        ApexPages.currentPage().getParameters().get('pdfText')
    );
}
```

- `ApexPages.currentPage().getParameters().get('pdfText')` extracts the `pdfText` parameter from the current page URL. 
- `pdfText` is then stored as a string in the `pdfText` property of the `PdfPageController`.

At this point, the **Visualforce page** has access to the `pdfText` data, which is the HTML content sent from the LWC.

#### Step 2: **Rendering HTML on the Visualforce Page**

The **Visualforce page** uses the following line to render the HTML data passed via the `pdfText` property:

```html
<apex:outputText value="{!pdfText}" escape="false"></apex:outputText>
```

- The `pdfText` data (HTML content) is output on the Visualforce page.
- The `escape="false"` ensures that the HTML is not escaped and renders the content as actual HTML instead of plain text.

### 4. **Rendering the Visualforce Page as PDF**

Since the **Visualforce page** is rendered as a **PDF** (due to `renderAs="pdf"` in the Visualforce page declaration), Salesforce automatically converts the HTML content rendered in the Visualforce page into a PDF file.

### 5. **Apex Controller Saves the PDF as an Attachment**

After the Visualforce page is rendered as a PDF, the Apex controller (`PdfController`) calls `pgRef.getContentAsPdf();`, which:

- Triggers the Visualforce page to render as a PDF.
- Captures the binary content of the PDF in the Apex controller.

This PDF content is then saved as an `Attachment` in Salesforce associated with the specified `Contact` record (`recordId`).

---

### Summary of Communication (Step-by-Step Flow)

1. **LWC to Apex**:
   - The `pdfHandler` method in the LWC captures the invoice HTML data and sends it to the `PdfController.generatePdf` method along with the `recordId`.

2. **Apex Controller to Visualforce Page**:
   - The `PdfController` creates a `PageReference` for the Visualforce page (`Page.renderAsPdf`) and passes the HTML data (`pdfText`) as a parameter to the Visualforce page.

3. **Visualforce Page to PdfPageController**:
   - The Visualforce page accesses the `pdfText` parameter through the `PdfPageController` (using `ApexPages.currentPage().getParameters().get('pdfText')`).
   - The controller stores this data and passes it to the Visualforce page.

4. **Rendering the PDF**:
   - The Visualforce page renders the HTML content as a PDF and the Apex controller retrieves the binary content of the PDF using `pgRef.getContentAsPdf()`.
   
5. **Saving PDF**:
   - The PDF is saved as an `Attachment` related to the `Contact` record and its ID is returned to the LWC.

---

By using the **URL parameters** (`pdfText`), the LWC's data is passed all the way through the Apex controller to the Visualforce page, which then renders it as a PDF. The PDF is generated using the HTML content that was originally passed from the LWC component.


*/