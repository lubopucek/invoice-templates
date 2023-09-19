// Load the custom font data from the font file
const { jsPDF } = window.jspdf;

const doc = new jsPDF({
  format: 'a4'
});

// SETTINGS
// Add custom fonts
doc.addFont("Saans-Regular.ttf", "Saans-Regular", "regular");
doc.addFont("Saans-Bold.ttf", "Saans-Bold", "bold");

// HEADER
doc.setFontSize(32);
doc.setFont("Saans-Regular", "regular");
doc.text(6, 15, 'Displaay');
doc.text(6, 27, 'Type Foundry');

const imgLogo = "df_logo.png";
doc.addImage(imgLogo, "PNG", 190, 5, 12.5, 12.5);

// SECTION 1
doc.setFontSize(8);
doc.setFont("Saans-Regular", "regular");
doc.text(6, 46.5, 'INVOICE NO.:');
doc.setFont("Saans-Bold", "bold");
doc.text(23.5, 46.5, '021');

doc.setLineWidth(0.5);
doc.line(6, 50, 203.5, 50);

doc.setFont("Saans-Regular", "regular");
doc.text(6, 56, 'SUPPLIER');

doc.text(6, 62, 'Company: Displaay Type Foundry s.r.o.');
doc.text(6, 66, 'Address: U Libeňského pivovaru 2442/6');

doc.save('template1.pdf');