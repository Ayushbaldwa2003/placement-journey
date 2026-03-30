# 🚀 Express.js Basic Server Notes

---

## 🔹 What is Express?

* **Express.js** is a web framework for Node.js
* Helps to build **servers & APIs easily**
* Removes complexity of raw `http` module

---

## 📌 Import & Setup

```js
const express = require('express');
const app = express();
```

### 🧠 Explanation:

* `require('express')` → imports Express
* `app` → main server object

---

## 📌 Route 1: Home Page

```js
app.get('/', (req, res) => {
    res.end('Hello, World!');
});
```

### 🧠 Explanation:

* `app.get()` → handles **GET request**
* `'/'` → homepage route
* `req` → request object
* `res` → response object
* `res.end()` → sends response

---

## 📌 Route 2: About Page

```js
app.get('/about', (req, res) => {
    res.end(`Welcome ${req.query.name || 'Guest'} to the about page!`);
});
```

### 🧠 Explanation:

* `/about` → route path
* `req.query` → gets query parameters

### 📌 Example URL:

```id="url1"
http://localhost:3000/about?name=Ayush
```

### 📌 Output:

```id="out1"
Welcome Ayush to the about page!
```

If no name:

```id="out2"
Welcome Guest to the about page!
```

---

## 📌 Start Server

```js
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

### 🧠 Explanation:

* `3000` → port number
* Server runs on:

```id="url2"
http://localhost:3000
```

---

## 🔥 Important Concepts

### 🔹 app.get()

* Used for **GET requests**

---

### 🔹 req (Request Object)

Contains:

* URL
* Query params
* Headers

Example:

```js
req.query.name
```

---

### 🔹 res (Response Object)

Common methods:

* `res.end()` → send response
* `res.send()` → better alternative (auto handles type)

---

## ⚡ Improved Version (Best Practice)

```js
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
```

---

## 🧠 Flow of Execution

1. User hits URL
2. Request goes to server
3. Matching route runs
4. Response is sent back

---

## 📊 Summary Table

| Part       | Meaning            |
| ---------- | ------------------ |
| express()  | Create server      |
| app.get()  | Handle GET request |
| req        | Incoming request   |
| res        | Send response      |
| app.listen | Start server       |

---

## ✅ Summary

* Express makes backend easy
* Routes define behavior
* Query params make responses dynamic
* Server runs on a port

---

💡 Next Step:

* Learn **POST request + body parsing**
* Then move to **REST APIs + Express Router** 🚀

---
