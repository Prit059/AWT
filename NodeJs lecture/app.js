const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, World!');
})

server.listen(3000, '127.0.0.1', () => {
  console.log('Server is running on http://127.0.0.1:3000');
})

// console.log('File system module loaded successfully!');
// Read a file
// const readtxt = fs.readFileSync('./data/read.txt', 'utf-8');
// console.log('File content:', readtxt);


// Write to a file
// fs.writeFileSync('./data/write.txt', 'Hello i am fine.');
// console.log('File written successfully.');

// fs.appendFileSync('./data/write.txt', `${readtxt}\n Today Date is ${Date(Date.now())}`)


// Asynchronous file operations
// fs.readFile('./data/read.txt','utf-8', (error, data) => {
//   if(error){
//     console.log("Error reading file:", error);
//   }
//   console.log("File :", data);

//   fs.writeFile('./data/write.txt', data, (err) => {
//     if(err){
//       console.log("Error writing file:",err);
//     }
//     console.log("File written successfully.");
//   })

//   fs.appendFile('./data/write.txt',' Today Date is ' + Date(Date.now()), (e)=> {
//     if(e){
//       console.log("Error appendingn a file", e);
//     }
//     console.log("File appended successfully.");
//   })
// });