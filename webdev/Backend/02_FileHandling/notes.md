# 📂 Node.js File Handling (fs Module)

## 📌 Importing File System Module

```javascript
const fs = require('fs');
```

---

## ✍️ Writing Files

### 🔹 Synchronous Method

* `writeFileSync` creates a file and writes data.
* If the file already exists, it **overwrites** the content.
* It is **blocking** (executes line by line).

```javascript
fs.writeFileSync('read.txt','welcome to node js');
fs.writeFileSync('read.txt','welcome to node js and file handling');
```

---

### 🔹 Asynchronous Method

* `writeFile` writes data **in the background**
* It is **non-blocking**
* Takes a callback function

```javascript
fs.writeFile(
  'read.txt',
  'welcome to node js and file handling this is asynchronous',
  (err) => {}
);
```

---

## 📖 Reading Files

### 🔹 readFileSync (Synchronous)

* Returns file content directly
* Blocks execution until complete

```javascript
const data = fs.readFileSync('read.txt','utf-8');
console.log(data);
```

---

### 🔹 readFile (Asynchronous)

* Takes a callback function
* Does NOT return directly
* Runs after file operation completes

```javascript
fs.readFile('read.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
```

---

## ⚠️ Difference in Output

### 📌 Observed Outputs:

* `readFileSync` →

  ```
  welcome to node js and file handling
  ```

* `readFile` →

  ```
  welcome to node js and file handling this is asynchronous
  ```

---

### 🧠 Explanation

* `writeFileSync` is **blocking**, so it finishes execution first.
* `writeFile` is **non-blocking**, so Node.js continues execution without waiting.

👉 Because of this:

* `readFileSync` reads the file **before async write completes**
* `readFile` reads the file **after async write completes**

---

## 📂 Working with Another File (`contacts.txt`)

### 🔹 Reading File

```javascript
const data2 = fs.readFileSync('contacts.txt','utf-8');
console.log(data2);

fs.readFile('contacts.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
```

---

### 🔹 Appending Data

* Adds new data without deleting old content

```javascript
fs.appendFileSync(
  'contacts.txt',
  new Date().getDate().toLocaleString() + '\n'
);
```

---

### 🔹 Copying File

```javascript
fs.copyFileSync('contacts.txt','contacts2.txt');
```

---

### 🔹 Deleting File

```javascript
fs.unlinkSync('contacts2.txt');
```

---

## 🎯 Summary

* `writeFileSync` → Blocking (safe but slower)
* `writeFile` → Non-blocking (faster, async)
* `readFileSync` → Reads immediately
* `readFile` → Reads after async operations complete
* `appendFileSync` → Adds data
* `copyFileSync` → Copies file
* `unlinkSync` → Deletes file

---

💡 *Tip: Prefer asynchronous methods in real applications for better performance 🚀*
