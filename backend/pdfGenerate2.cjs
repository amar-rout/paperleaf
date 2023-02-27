const fs = require('fs');
const pdf = require('html-pdf');

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

// Read the HTML template file
const htmlTemplate = fs.readFileSync('invoice_template.html', 'utf8');

// Replace the template placeholders with invoice data
const invoiceHtml = htmlTemplate
  .replace('{orderId}', invoice.orderId)
  .replace('{customerName}', invoice.customerName)
  .replace('{items}', invoice.items.map(item =>
    `<tr><td>${item.description}</td><td>${item.quantity}</td><td>$${item.price.toFixed(2)}</td></tr>`
  ).join(''))
  .replace('{subtotal}', `$${invoice.subtotal.toFixed(2)}`)
  .replace('{tax}', `$${invoice.tax.toFixed(2)}`)
  .replace('{total}', `$${invoice.total.toFixed(2)}`);

// Generate a PDF document from the HTML
pdf.create(invoiceHtml).toFile('invoice.pdf', (err, res) => {
  if (err) return console.log(err);
  console.log(res);
});
