const fs=require('fs');

// writeFileSync is used to create a file and write data into it. If the file already exists, it will overwrite the existing content with the new content provided.
// synchronous method to write data into a file
fs.writeFileSync('read.txt','welcome to node js');
fs.writeFileSync('read.txt','welcome to node js and file handling');

// asynchronous method to write data into a file
fs.writeFile('read.txt','welcome to node js and file handling this is asynchronous',(err)=>{});

// readFileSync is used to read the content of a file. It returns the content of the file as a string. If the file does not exist, it will throw an error.
// readfile is used to read the content of a file. It takes a callback function as an argument, which is called when the file is read. The callback function takes two arguments: an error object and the data read from the file. If there is an error, the error object will contain the error details; otherwise, it will be null, and the data will contain the content of the file and it does not return anything.


// const data=fs.readFileSync('read.txt','utf-8');
// console.log(data);
// fs.readFile('read.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });

// Output for readfilesync is welcome to node js and file handling
// Output for readfile is welcome to node js and file handling this is asynchronous
// Difference in the output is because of the asynchronous nature of readFile. The writeFileSync method is synchronous, so it will block the execution until the file is written, while the writeFile method is asynchronous, so it will not block the execution and will call the callback function once the file is written.
// due to this readfileSync will read the content of the file before the asynchronous writeFile method has completed writing to the file, resulting in the output of "welcome to node js and file handling". On the other hand, readFile will read the content of the file after the asynchronous writeFile method has completed writing to the file, resulting in the output of "welcome to node js and file handling this is asynchronous".


const data2=fs.readFileSync('contacts.txt','utf-8');
console.log(data2);
fs.readFile('contacts.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});



fs.appendFileSync('contacts.txt',new Date().getDate().toLocaleString()+'\n');


fs.copyFileSync('contacts.txt','contacts2.txt');
fs.unlinkSync('contacts2.txt');