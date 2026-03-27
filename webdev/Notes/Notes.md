# 📦 Node.js Modules Guide

## 🚀 Running a Node.js File

To run your Node.js program:

1. Save your file as `helloWorld.js`
2. Run the following command in terminal:

```bash
node helloWorld.js
```

---

## 📄 Adding Start Script in `package.json`

You can simplify execution using npm scripts.

Add this inside your `package.json`:

```json
"scripts": {
  "start": "node helloWorld.js"
}
```

Now run your app using:

```bash
npm start
```

---

## 📚 What are Modules in Node.js?

Modules in Node.js are **reusable pieces of code** that can be imported and used in other files.

### ✅ Benefits:

* Better code organization
* Reusability
* Maintainability

Node.js provides:

* Built-in modules (like `fs`, `http`)
* Custom modules (created by you)

---

## 🛠️ Creating Your Own Module

You can create a module by exporting functions, objects, or values from a file.

### 📁 `math.js`

```javascript
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract
};
```

---

## 📁 Using the Module

### 📄 `helloWorld.js`

```javascript
// Import entire module
const math = require('./math');

// Import specific functions
const { add, subtract } = require('./math');

console.log(add(2, 3));        // 5
console.log(math.add(2, 3));   // 5
console.log(math.subtract(5, 2)); // 3
```

---

## ⚠️ Important Notes

* File name is **case-sensitive** → use `'./math'` not `'./Math'`
* Exported function names must match while importing
* You can:

  * Import full module → `math.add()`
  * Import specific functions → `add()`

---

## 🎯 Summary

* Modules help in organizing and reusing code
* Use `module.exports` to export
* Use `require()` to import
* Use `npm start` for easier execution

---

💡 *Tip: Always keep your file names consistent and lowercase to avoid errors!*
