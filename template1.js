// TEMPLATE 1

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
doc.text(145, 55, 'CUSTOMER (ENTREPRENEUR)');
doc.text(145, 61, 'Name Surname/Company: abc');
doc.text(145, 64, 'Address: xyz');
doc.text(145, 67, 'Post Code: 123, City: rgb');
doc.text(145, 70, 'Country: United Arab Emirates');
doc.text(145, 73, 'Email: abc@email.com');
doc.text(145, 76, 'ID Number: 09224823');
doc.text(145, 79, 'VAT Number: CZ09224823');
doc.text(145, 82, 'PO Number: 1234');

// SECTION 2

doc.setFontSize(7);

// SECTION 2.1 - LINE

doc.setLineWidth(0.3);
doc.line(6, 105, 203.5, 105);

// SECTION 2.1 - LEFT

doc.setFont("Saans-Bold", "bold");
doc.text(6, 110, 'FONT LICENSES:');
doc.setFont("Saans-Regular", "regular");
doc.text(26, 110, 'NO. OF EMPLOYEES: UP TO 5');
doc.text(6, 116, 'Roobert Light (Latin)');
doc.text(6, 119, 'Roobert Regular (Latin)');
doc.text(6, 122, 'Roobert Medium (Latin)');
doc.text(6, 125, 'Roobert Bold (Latin)');
doc.text(6, 128, 'Roobert Bold (Latin)');
doc.text(6, 131, 'Roobert Bold Italic (Latin)');
doc.text(6, 134, 'Roobert Bold (Latin, Cyrillic, Greek)');
doc.text(6, 137, 'Reckless Condensed M Bold (Latin)');


// SECTION 2.1 - MIDDLE

doc.setFont("Saans-Regular", "regular");
doc.text(72, 116, 'Desktop, Web, App, Video');
doc.text(72, 119, 'Desktop, Web, App, Video');
doc.text(72, 122, 'Desktop, Web, App');
doc.text(72, 125, 'Desktop, Web');
doc.text(72, 128, 'Desktop');
doc.text(72, 131, 'Desktop, Web, App');
doc.text(72, 134, 'Logo');
doc.text(72, 137, 'Desktop, Web, App');

// SECTION 2.1 - RIGHT

doc.setFont("Saans-Regular", "regular");
doc.text(145, 110, 'LICENSEE DETAILS');
doc.text(145, 116, 'Name Surname/Company: abc');
doc.text(145, 119, 'Address: xyz');
doc.text(145, 122, 'Post Code: 123, City: rgb');
doc.text(145, 125, 'Country: cmyk');
doc.text(145, 128, 'Email: abc@email.com');
doc.text(145, 131, 'ID Number: NA');

// SECTION 2.2 - LINE

doc.setLineWidth(0.1);
doc.line(6, 141, 203.5, 142);

// SECTION 2.2 - LEFT

doc.setFont("Saans-Regular", "regular");
doc.text(6, 146, 'SUBTOTAL (excl. VAT)');
doc.text(6, 149, 'Discounts');
doc.text(6, 152, 'VAT 0%');

// SECTION 2.2 - MIDDLE

doc.setFont("Saans-Regular", "regular");
doc.text(72, 146, '5 000 € / 4 800,51 CZK');
doc.text(72, 149, '-1 000 € / -1 800,51 CZK');
doc.text(72, 152, '0 € / 0,00 CZK');

// SECTION 2.2 - RIGHT

doc.setFont("Saans-Regular-Italic", "italic");
doc.text(145, 146, 'If you need to update your licenses via your account,');
doc.text(145, 149, 'please log in via the website: displaay.net.');

// SECTION 3

doc.setFontSize(7);

// SECTION 3.1 - LINE

doc.setLineWidth(0.3);
doc.line(6, 166, 203.5, 166);

// SECTION 3.1 - LEFT

doc.setFont("Saans-Bold", "bold");
doc.text(6, 171, 'MERCH STORE:');
doc.setFont("Saans-Regular", "regular");
doc.text(25, 171, 'OFFLINE');
doc.text(6, 177, 'Offline Beanie (Size: M, Colour: Red)');
doc.text(6, 180, 'Offline Beanie (Size: M, Colour: Red)');
doc.text(6, 183, 'Offline PINS');

// SECTION 3.1 - MIDDLE

doc.setFont("Saans-Regular", "regular");
doc.text(72, 171, 'PRICE PER ITEM ');
doc.text(72, 177, '30 € / 4 800,51 CZK');
doc.text(72, 180, '30 € / 4 800,51 CZK');
doc.text(72, 183, '13 € / 4 800,51 CZK');

// SECTION 3.1 - RIGHT

doc.setFont("Saans-Regular", "regular");
doc.text(145, 171, 'DELIVERY ADDRESS');
doc.text(145, 177, 'Name Surname/Company: abc');
doc.text(145, 180, 'Address: xyz');
doc.text(145, 183, 'Post Code: 123 00, City: Los Angeles');
doc.text(145, 186, 'Country: cmyk');
doc.text(145, 189, 'Email: abc@email.com');
doc.text(145, 192, 'Phone: +420 123 456 789');

// SECTION 3.2 - LINE

doc.setLineWidth(0.1);
doc.line(6, 196, 203.5, 196);

// SECTION 3.2 - LEFT

doc.setFont("Saans-Regular", "regular");
doc.text(6, 201, 'SUBTOTAL (excl. VAT)');
doc.text(6, 204, 'Discounts');
doc.text(6, 207, 'VAT 0%');
doc.text(6, 210, 'Shipping');

// SECTION 3.2 - MIDDLE

doc.setFont("Saans-Regular", "regular");
doc.text(72, 201, '5 000 € / 4 800,51 CZK');
doc.text(72, 204, '-1 000 € / -1 800,51 CZK');
doc.text(72, 207, '0 € / 0,00 CZK');
doc.text(72, 210, '18 € / 280 CZK');

// SECTION 3.2 - RIGHT

doc.setFont("Saans-Regular-Italic", "italic");
doc.text(145, 201, 'You have ordered goods to be shipped outside the');
doc.text(145, 204, 'EU: “The performance is exempt from VAT under §66');
doc.text(145, 207, 'of the Value Added Tax Act with the right to deduct');
doc.text(145, 210, 'the tax.');

// SECTION 4

doc.setFontSize(7);

// SECTION 4 - LINE

doc.setLineWidth(0.3);
doc.line(6, 214, 203.5, 215);

// SECTION 4 - LEFT

doc.setFont("Saans-Bold", "bold");
doc.text(6, 219, 'TOTAL (incl. VAT)');

// SECTION 4 - MIDDLE

doc.setFont("Saans-Bold", "bold");
doc.text(72, 219, '45 000 € / 34 800,51 CZK');

// FOOTER

// FOOTER - NOTE

doc.setFont("Saans-Regular-Italic", "italic");
doc.text(6, 288, 'Note: Invoice in Reverse charge mode. The buyer is obligated to fill in the VAT amounts and pay the tax.');
doc.text(6, 291, '(Except Czech Republic customers)');

// FOOTER - SIGNATURE

doc.setFont("Saans-Regular", "regular");
const imgSignature = "signature.png";
doc.addImage(imgSignature, "PNG", 145, 268, 55, 12);
doc.text(145, 288, 'Signature');
doc.text(145, 291, 'Martin Vácha, CEO');

// SAVE FILE

doc.save('template1.pdf');