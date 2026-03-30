# 🌐 HTTP Methods (Easy + Moderate Notes)

---

## 🔹 What are HTTP Methods?

* HTTP methods tell the server **what action to perform**
* Used in APIs and web apps
* Also called **HTTP verbs**

---

# 📌 1. GET

👉 Used to **fetch data from server**

### 🧠 Points:

* Does NOT change data
* Data is sent in URL (query params)
* Safe and fast

### 📌 Example:

```id="getex"
GET /users?name=Ayush
```

### 📍 Use Cases:

* View users
* Get products
* Load a webpage

---

# 📌 2. POST

👉 Used to **send data and create new resource**

### 🧠 Points:

* Data is sent in **request body**
* Used in forms (signup/login)
* Can change server data

### 📌 Example:

```id="postex"
POST /users
```

### 📍 Use Cases:

* Create account
* Submit form
* Add new data

---

# 📌 3. PUT

👉 Used to **update complete data**

### 🧠 Points:

* Replaces full resource
* If data exists → update
* If not → may create

### 📌 Example:

```id="putex"
PUT /users/1
```

### 📍 Use Cases:

* Update full profile
* Replace all user info

---

# 📌 4. PATCH

👉 Used to **update partial data**

### 🧠 Points:

* Only updates specific fields
* More efficient than PUT

### 📌 Example:

```id="patchex"
PATCH /users/1
```

### 📍 Use Cases:

* Change password
* Update email
* Edit small details

---

# 📌 5. DELETE

👉 Used to **remove data**

### 🧠 Points:

* Deletes resource from server
* Simple and direct

### 📌 Example:

```id="deleteex"
DELETE /users/1
```

### 📍 Use Cases:

* Delete account
* Remove item

---

# 🔥 Quick Comparison

| Method | Purpose        | Data Sent | Example Use         |
| ------ | -------------- | --------- | ------------------- |
| GET    | Fetch data     | URL       | Get users           |
| POST   | Create data    | Body      | Signup              |
| PUT    | Full update    | Body      | Update full profile |
| PATCH  | Partial update | Body      | Change email        |
| DELETE | Remove data    | ❌         | Delete user         |

---

# ⚡ Easy Way to Remember

* GET → Read data
* POST → Create data
* PUT → Replace everything
* PATCH → Update some part
* DELETE → Remove data

---

# 🧠 Important Tips (Interview)

* Use **GET only for fetching**
* Use **POST for creating**
* Prefer **PATCH for small updates**
* Do NOT send sensitive data in URL

---

# ✅ Summary

* HTTP methods define **action in APIs**
* Most common methods:

  * GET
  * POST
  * PUT
  * PATCH
  * DELETE
* Very important for backend development & interviews

---
