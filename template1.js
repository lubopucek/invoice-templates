// Load the custom font data from the font file
// import { font } from './Saans-Regular-normal.js';

// console.log(font);

// Create a new jsPDF instance
var doc = new jsPDF();

// Add the custom font data???

// Set the custom font
// doc.setFont("Saans-Regular");
doc.setFontType("normal");

// Add text using the custom font
doc.text(20, 50, 'This is Saans Regular.');

// Save the PDF
doc.save('template1.pdf');
