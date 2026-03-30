# 🌐 RESTful API (Full Notes - Easy + Detailed)

---

# 🔹 What is an API?

API = Application Programming Interface

👉 Simple meaning:

* It is a **bridge** between frontend and backend
* It allows two systems to communicate

### 📌 Real-life Example:

* You open Instagram → request goes to server → data comes back → you see posts

👉 That communication happens through an **API**

---

# 🔹 What is REST?

REST = Representational State Transfer

👉 It is a **set of rules (architecture style)** to design APIs

If an API follows REST rules → it is called a **RESTful API**

---

# 🧩 Core Principles of REST (Very Important)

---

## 1️⃣ Stateless

👉 Server does NOT remember anything

* Each request is independent
* Client must send all required data every time

### ✔ Example:

```
GET /profile
Headers: Authorization: token123
```

👉 Server does not remember previous login

---

## 2️⃣ Client-Server Architecture

👉 Frontend and backend are separate

* Client → UI (React, Angular)
* Server → logic + database

👉 This makes system flexible

---

## 3️⃣ Uniform Interface

👉 API should be simple and consistent

* Use proper URLs
* Use standard HTTP methods
* Use JSON format

---

## 4️⃣ Cacheable

👉 Responses can be cached

* Improves performance

Example:

* Same data not fetched again and again

---

## 5️⃣ Layered System

👉 Client does not know if request goes through:

* proxy
* load balancer
* server

👉 Improves security & scalability

---

# 🔥 HTTP Methods (Very Important)

| Method | Use              | Example      |
| ------ | ---------------- | ------------ |
| GET    | Get data         | Get users    |
| POST   | Create data      | Add user     |
| PUT    | Update full data | Replace user |
| PATCH  | Update partial   | Update email |
| DELETE | Delete data      | Remove user  |

---

## 📌 Example:

```
GET /users
POST /users
PUT /users/1
DELETE /users/1
```

---

# 🔗 URL Design Rules

## ❌ Bad:

```
/getUserData
```

## ✅ Good:

```
/users
```

👉 Always use **nouns (not verbs)**

---

## 📌 More Examples:

```
/users          → all users
/users/1        → specific user
/users/1/posts  → posts of user
```

---

# 📦 Data Format (JSON)

👉 REST APIs usually use JSON

Example:

```
{
  "name": "Ayush",
  "age": 21
}
```

---

# 📊 Status Codes (Very Important)

| Code | Meaning      |
| ---- | ------------ |
| 200  | Success      |
| 201  | Created      |
| 400  | Bad Request  |
| 401  | Unauthorized |
| 403  | Forbidden    |
| 404  | Not Found    |
| 500  | Server Error |

---

# ⚙️ Example REST API Flow

### 🎯 Create User

```
POST /users
Body:
{
  "name": "Ayush"
}
```

---

### 🎯 Get Users

```
GET /users
```

---

### 🎯 Update User

```
PATCH /users/1
```

---

### 🎯 Delete User

```
DELETE /users/1
```

---

# 🆚 REST vs Normal API

| Feature     | REST API | Normal API |
| ----------- | -------- | ---------- |
| Rules       | Strict   | No rules   |
| Structure   | Standard | Random     |
| Scalability | High     | Low        |

---

# ❗ Common Mistakes

❌ Using verbs in URL
❌ Not using status codes
❌ Mixing GET and POST
❌ Not keeping API stateless

---

# 🎯 Advantages of REST API

* Simple and easy to understand
* Scalable
* Works with web and mobile
* Uses standard HTTP

---

# ❌ Disadvantages

* Stateless → more data sent every time
* Sometimes over-fetching data

---

# 🧠 Easy Trick to Remember

REST =

* R → Rules
* E → Easy URLs
* S → Stateless
* T → HTTP methods

---

# 🚀 Final Quick Revision

* API = communication bridge
* REST = rules for API
* Stateless system
* Use HTTP methods
* Use clean URLs
* Use JSON + status codes

---

Done ✅

