const pdf = require('html-pdf');
function createPDF(html) {
    const options = { format: 'A4', orientation: 'landscape' };
   
    return new Promise((resolve, reject) => {
       pdf.create(html, options).toBuffer((err, buffer) => {
         if (err) {
           reject(err);
         } else {
           resolve(buffer);
         }
       });
    });
   }

module.exports = {createPDF,}