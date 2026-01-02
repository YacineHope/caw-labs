var myvar = require('fs');

// Get the filename from command line arguments
var filename = process.argv[2];
// Read the file  and display contents
var content = myvar.readFileSync(filename, 'utf8');
console.log(content);