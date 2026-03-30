# 📘 Middleware in Express.js (Easy + In-Depth Notes)

---

## 🔹 What is Middleware?

Middleware is a **function that runs between request and response**.

### Flow:

```
Client Request → Middleware → Route Handler → Response
```

👉 It can:

* Read request data
* Modify request/response
* Stop request
* Pass control to next function

---

## 🔹 Basic Example

```js
app.use((req, res, next) => {
    console.log("Middleware executed");
    next(); // pass control
});
```

---

## 🔹 Why Middleware is Used?

Middleware is used to:

* Parse data (`req.body`)
* Authentication (login check)
* Logging
* Error handling
* Validation

---

## 🔹 Types of Middleware

### 1️⃣ Application-Level Middleware

Applied to entire app:

```js
app.use((req, res, next) => {
    console.log("Runs for every request");
    next();
});
```

---

### 2️⃣ Route-Level Middleware

Applied to specific route:

```js
app.get('/api', (req, res, next) => {
    console.log("Only for /api");
    next();
}, (req, res) => {
    res.send("Done");
});
```

---

### 3️⃣ Built-in Middleware

Provided by Express:

#### 👉 JSON Parser

```js
app.use(express.json());
```

#### 👉 URL Encoded Parser

```js
app.use(express.urlencoded({ extended: false }));
```

---

### 4️⃣ Third-party Middleware

Example:

* `cors`
* `morgan`
* `helmet`

```js
const cors = require('cors');
app.use(cors());
```

---

### 5️⃣ Error Handling Middleware

```js
app.use((err, req, res, next) => {
    res.status(500).send("Something broke!");
});
```

---

## 🔹 Important: `next()` Function

👉 `next()` passes control to next middleware

```js
app.use((req, res, next) => {
    console.log("Step 1");
    next();
});

app.use((req, res) => {
    console.log("Step 2");
    res.send("Done");
});
```

---

### ❌ If you don't call `next()`

👉 Request will **hang (no response)**

---

## 🔹 Example: Body Parsing Middleware

### Without middleware:

```js
console.log(req.body); // undefined ❌
```

### With middleware:

```js
app.use(express.json());
console.log(req.body); // data available ✅
```

---

## 🔹 Real-Life Example

```js
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
```

👉 Logs every request

---

## 🔹 Middleware Execution Order

👉 Order matters!

```js
app.use((req, res, next) => {
    console.log("First");
    next();
});

app.use((req, res, next) => {
    console.log("Second");
    next();
});
```

Output:

```
First
Second
```

---

## 🔹 Common Mistakes

### ❌ Forgetting `next()`

### ❌ Sending multiple responses

### ❌ Wrong middleware order

### ❌ Missing body parser

---

## 🔹 Interview Questions

### ❓ What is middleware?

👉 Function that runs between request and response.

### ❓ Why use middleware?

👉 For parsing, authentication, logging, validation.

### ❓ What is `next()`?

👉 It passes control to next middleware.

---

## 🔹 One-Line Memory Trick

👉
**Middleware = “Middle function between request and response”**

---

## 🔹 Summary

* Middleware runs before response
* It can modify request/response
* Must call `next()` to continue
* Order is important

---

## 🚀 Pro Tip

👉 Every Express app internally works as a **chain of middleware**

---

END 🚀
