const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'app.js');
const htmlPath = path.join(__dirname, 'index.html');

const appCode = fs.readFileSync(appPath, 'utf8');
let html = fs.readFileSync(htmlPath, 'utf8');

const target = '<script type="text/babel" src="app.js"></script>';
if (html.includes(target)) {
  html = html.replace(target, `<script type="text/babel">\n${appCode}\n</script>`);
  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log('Successfully embedded app.js into index.html');
} else {
  console.log('Target tag not found or already embedded.');
}
