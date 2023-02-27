const PDFDocument = require('pdfkit');
const fs = require('fs');

// Invoice data
const invoice = {
  orderId: '123456',
  customerName: 'John Doe',
  items: [
    { description: 'Product 1', quantity: 2, price: 10.00 },
    { description: 'Product 2', quantity: 1, price: 20.00 },
  ],
  subtotal: 40.00,
  tax: 2.00,
  total: 42.00
};

// Create a new PDF document
const doc = new PDFDocument({ margin: 50 });

// Set the document metadata
doc.info['Title'] = `Invoice - Order #${invoice.orderId}`;
doc.info['Author'] = 'Your Company Name';
doc.info['Subject'] = 'Invoice';
doc.info['Keywords'] = 'Invoice, Order';

// Add content to the PDF document
doc
  .font('Helvetica-Bold')
  .fontSize(20)
  .text('Invoice', { align: 'center' })
  .moveDown();
  
doc
  .font('Helvetica')
  .fontSize(12)
  .text(`Order #${invoice.orderId}`, { align: 'right' })
  .text(`Customer: ${invoice.customerName}`)
  .moveDown();
  
doc
  .font('Helvetica-Bold')
  .fontSize(14)
  .text('Items', { underline: true })
  .moveDown();

doc
  .font('Helvetica')
  .fontSize(12);

invoice.items.forEach(item => {
  doc
    .text(`${item.quantity} x ${item.description}`, { indent: 20 })
    .text(`$${item.price.toFixed(2)}`, { align: 'right' })
    .moveDown();
});

doc.moveDown();

doc
  .font('Helvetica-Bold')
  .fontSize(12)
  .text(`Subtotal: $${invoice.subtotal.toFixed(2)}`, { align: 'right' })
  .text(`Tax: $${invoice.tax.toFixed(2)}`, { align: 'right' })
  .text(`Total: $${invoice.total.toFixed(2)}`, { align: 'right' })
  .moveDown(2);
  
doc
  .font('Helvetica')
  .fontSize(10)
  .text('Thank you for your business!', { align: 'center' })
  .moveDown();

// Save the PDF document to a file
doc.pipe(fs.createWriteStream('invoice.pdf'));
doc.end();
