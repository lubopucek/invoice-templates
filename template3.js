// TEMPLATE 3

const { jsPDF } = window.jspdf;

// SETTINGS

// FORMAT

const doc = new jsPDF({
  format: 'a4'
});

// ADD CUSTOM FONTS

doc.addFont("Saans-Regular.ttf", "Saans-Regular", "regular");
doc.addFont("Saans-Bold.ttf", "Saans-Bold", "bold");
doc.addFont("Saans-RegularItalic.ttf", "Saans-Regular-Italic", "italic");

// HEADER

// HEADER - TITLE

doc.setFontSize(28);
doc.setFont("Saans-Regular", "regular");
doc.text(6, 15, 'Displaay');
doc.text(6, 25, 'Type Foundry');

// HEADER - LOGO

const imgLogo = "df_logo.png";
doc.addImage(imgLogo, "PNG", 190, 5, 12.5, 12.5);

// SECTION 1

doc.setFontSize(7);

// SECTION 1 - INVOICE NO. AND LINE

doc.setFont("Saans-Regular", "regular");
doc.text(6, 47, 'INVOICE NO.:');
doc.setFont("Saans-Bold", "bold");
doc.text(21.5, 47, '021');
doc.setLineWidth(0.3);
doc.line(6, 50, 203.5, 50);

// SECTION 1 - LEFT

doc.setFont("Saans-Regular", "regular");
doc.text(6, 55, 'SUPPLIER');
doc.text(6, 61, 'Company: Displaay Type Foundry s.r.o.');
doc.text(6, 64, 'Address: U Libeňského pivovaru 2442/6');
doc.text(6, 67, 'Post Code: 180 00, City: Prague');
doc.text(6, 70, 'Country: Czech Republic');
doc.text(6, 73, 'Email: abc@displaay.net');
doc.text(6, 76, 'ID Number: 09224823');
doc.text(6, 79, 'VAT Number: CZ09224823');
doc.text(6, 85, 'Recorded in the Commercial Register held');
doc.text(6, 88, 'by the Municipal Court in Prague, Section C,');
doc.text(6, 91, 'Inset 332873.');

// SECTION 1 - MIDDLE

doc.setFont("Saans-Regular", "regular");
doc.text(72, 55, 'PURCHASE DETAILS');
doc.text(72, 61, 'Date of taxable supply: 09/8/2023 09:58 (CET)');
doc.text(72, 64, 'CNB rate for this date : 1 € = 24,245 CZK');
doc.text(72, 67, 'Stripe number: XXX');

// SECTION 1 - RIGHT

doc.setFont("Saans-Regular", "regular");
doc.text(145, 55, 'CUSTOMER (NON-ENTREPRENEUR)');
doc.text(145, 61, 'Name Surname: Kantoor Kolos');
doc.text(145, 64, 'Address: Veemarkt 37/A3');
doc.text(145, 67, 'Post Code: 2800, City: Mechelen');
doc.text(145, 70, 'Country: Belgium, EU');
doc.text(145, 73, 'Email: kenzo@kantoorkolos.be');
doc.text(145, 76, 'ID Number: NA');
doc.text(145, 79, 'VAT Number: NA');
doc.text(145, 82, 'PO Number: NA');

// SECTION 2

doc.setFontSize(7);

// SECTION 2.1 - LINE

doc.setLineWidth(0.3);
doc.line(6, 105, 203.5, 105);

// SECTION 2.1 - LEFT

doc.setFont("Saans-Bold", "bold");
doc.text(6, 110, 'MERCH STORE:');
doc.setFont("Saans-Regular", "regular");
doc.text(25, 110, 'OFFLINE');
doc.text(6, 116, 'Offline Beanie (Size: M, Colour: Red)');
doc.text(6, 119, 'Offline Beanie (Size: M, Colour: Red)');
doc.text(6, 122, 'Offline PINS');

// SECTION 2.1 - MIDDLE

doc.setFont("Saans-Regular", "regular");
doc.text(72, 110, 'PRICE PER ITEM ');
doc.text(72, 116, '30 € / 419,20 CZK');
doc.text(72, 119, '30 € / 419,20 CZK');
doc.text(72, 122, '13 € / 419,20 CZK');

// SECTION 2.1 - RIGHT

doc.setFont("Saans-Regular", "regular");
doc.text(145, 110, 'DELIVERY ADDRESS');
doc.text(145, 116, 'Name Surname: abc');
doc.text(145, 119, 'Address: xyz');
doc.text(145, 122, 'Post Code: 123 00, City: Los Angeles');
doc.text(145, 125, 'Country: cmyk');
doc.text(145, 128, 'Email: abc@email.com');
doc.text(145, 131, 'Phone: +420 123 456 789');

// SECTION 2.2 - LINE

doc.setLineWidth(0.1);
doc.line(6, 135, 203.5, 135);

// SECTION 2.2 - LEFT

doc.setFont("Saans-Regular", "regular");
doc.text(6, 140, 'SUBTOTAL (excl. VAT)');
doc.text(6, 143, 'VAT 19%');
doc.text(6, 146, 'Shipping');

// SECTION 2.2 - MIDDLE

doc.setFont("Saans-Regular", "regular");
doc.text(72, 140, '91 € / 2 206,30 CZK');
doc.text(72, 143, '17,29 € / 419,20 CZK');
doc.text(72, 146, '18 € / 280 CZK');

// SECTION 2.2 - RIGHT

doc.setFont("Saans-Regular-Italic", "italic");
doc.text(145, 140, 'Merchedise is managed in');
doc.text(145, 143, 'OSS (One Stop Shop) mode.');

// SECTION 3

doc.setFontSize(7);

// SECTION 3 - LINE

doc.setLineWidth(0.3);
doc.line(6, 153, 203.5, 153);

// SECTION 3 - LEFT

doc.setFont("Saans-Bold", "bold");
doc.text(6, 158, 'TOTAL (incl. VAT)');

// SECTION 3 - MIDDLE

doc.setFont("Saans-Bold", "bold");
doc.text(72, 158, '108,29 € / 2 625,49 CZK');

// FOOTER

// FOOTER - NOTE

doc.setFont("Saans-Regular-Italic", "italic");
doc.text(6, 288, 'Displaay Type Foundry is independent studio based in Prague, Czech Republic.');
doc.text(6, 291, 'Est. 2014');

// FOOTER - SIGNATURE

doc.setFont("Saans-Regular", "regular");
const imgSignature = "signature.png";
doc.addImage(imgSignature, "PNG", 145, 268, 55, 12);
doc.text(145, 288, 'Signature');
doc.text(145, 291, 'Martin Vácha, CEO');

// SAVE FILE

doc.save('template3.pdf');