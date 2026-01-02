const fs = require('fs');

/* First task */
/*
// Get the text from command line arguments
const text = process.argv[2];

const fileName = "f.txt";

// The lambda function method
fs.writeFile(fileName, text, (err) => {
  if (err) {
    console.error("Error writing file:", err.message);
    process.exit(1);
  }
  console.log("The file has been saved!");
});

*/




/*Second task*/

/*
// Get filename and text from command line arguments
const fileName = process.argv[2];
const text = process.argv[3];

if (!fileName || !text) {
  console.error("Usage: node exo4.js <filename> <text>");
  process.exit(1);
}

// Write the text into the specified file
fs.writeFile(fileName, text, (err) => {
  if (err) {
    console.error("Error writing file:", err.message);
    process.exit(1);
  }
  console.log("The file has been saved!");
});

*/



/* Third task */

// Get filename and text from command line arguments
const fileName = process.argv[2];
const text = process.argv[3];

if (!fileName || !text) {
  console.error("Usage: node exo4.js <filename> <text>");
  process.exit(1);
}

// Write the text into the specified file
fs.writeFile(fileName, text, (err) => {
  if (err) {
    console.error("Error writing file:", err.message);
    process.exit(1);
  }
  console.log("The file has been saved!");

  // Read and display the contents of the file
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading file:", err.message);
      process.exit(1);
    }
    console.log(data);
  });
});
