const fs = require("fs");
const os = require("os");
console.log(os.cpus().length);
// Blocking --
console.log("First");
const result=fs.readFileSync('file1.txt', 'utf-8');
console.log(result);
console.log("Second");

// Non-Blocking --
console.log("First");
fs.readFile('file1.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }else {
        console.log(result);
    }
});
console.log("Second");

