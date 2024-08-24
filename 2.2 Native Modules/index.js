//using Native Modules/File system

const fs = require("fs")

//writeFile module: this module allows the user to create a file with some data in this case a string
fs.writeFile("message.txt", "Hello From fs.writeFile and I want to update this",(err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

//readFile module: this module allow the user to read a file
fs.readFile("message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });