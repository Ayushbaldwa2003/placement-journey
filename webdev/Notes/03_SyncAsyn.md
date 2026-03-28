# 🧠 Node.js Event Loop (Easy Notes)

## 📌 1. How Request Comes

* First, a **client (browser/user)** sends a request to the Node.js server
* Node.js receives the request
* Now Node decides:

  * Should I do it **directly (sync)**?
  * Or send it **somewhere else (async)**?

---

## 🔄 2. What is Event Loop?

👉 Event Loop is like a **manager** 👨‍💼

* It keeps checking:

  * Is the **main thread free?**
  * Is there any **callback waiting?**
* If yes → it executes that callback

---

## ⚡ 3. Types of Operations

### 🔴 Blocking (Synchronous)

👉 Easy meaning: **“Wait and do work”**

* Runs on **main thread**
* Stops everything until work is finished

### Example:

```javascript
fs.readFileSync('file.txt','utf-8');
```

### Flow:

1. Task starts
2. Node waits ⛔
3. After completion → next line runs

✔ No thread pool
✔ Slower if many requests

---

### 🟢 Non-Blocking (Asynchronous)

👉 Easy meaning: **“Start work and move ahead”**

* Node sends task to:

  * OS OR
  * Thread pool (for file system, etc.)
* Does NOT wait

### Example:

```javascript
fs.readFile('file.txt','utf-8',(err,data)=>{
    console.log(data);
});
```

### Flow:

1. Task is sent to background 🚀
2. Node continues next lines
3. When task completes → callback comes to queue
4. Event loop executes it

✔ Faster
✔ Used in real apps

---

## 🔁 4. Step-by-Step Flow (Important)

1. Code starts running (main thread)
2. Async task is given to system/thread pool
3. Main thread continues other work
4. When async task finishes:

   * Its callback goes to **callback queue**
5. Event loop checks:

   * If main thread is free → runs callback

---

## 🎯 5. Key Difference

| Feature     | Blocking (Sync) | Non-Blocking (Async) |
| ----------- | --------------- | -------------------- |
| Thread used | Main thread     | Thread pool / OS     |
| Waits?      | Yes ⛔           | No ✅                 |
| Speed       | Slow            | Fast                 |
| Example     | readFileSync    | readFile             |

---

## 💡 Important Points (Remember These)

* Node.js is **single-threaded for JavaScript**
* **Only one task runs at a time on main thread**
* Thread pool is used **only for async tasks**
* Event loop handles **callbacks**, not heavy work

---

## 🧠 Simple Example

### Sync Code:

```javascript
console.log("First");
fs.readFileSync('file.txt','utf-8');
console.log("Second");
```

👉 Output:

```
First
(file data)
Second
```

---

### Async Code:

```javascript
console.log("First");

fs.readFile('file.txt','utf-8',(err,data)=>{
    console.log(data);
});

console.log("Second");
```

👉 Output:

```
First
Second
(file data)
```

---

## 🎯 Final One-Line Summary

👉 **Sync = Wait and block**
👉 **Async = Don’t wait, use background, callback later**

---
