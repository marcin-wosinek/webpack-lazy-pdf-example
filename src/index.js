// require dependencies
const PDFDocument = require("pdfkit");

// create a document the same way as above
const doc = new PDFDocument();

const element = document.getElementById("core");

element.innerHTML = "Main app is loaded";
