# 🌐 URL & Node.js HTTP Server Notes

---

## 🔗 Example URL

```
https://www.google.com/about?myname=Ayush&age=23
```

---

## 🔹 1. Protocol (Scheme)

**`https://`**

* Full form: HyperText Transfer Protocol Secure
* Defines communication method between client & server
* HTTPS = encrypted & secure

---

## 🔹 2. Subdomain

**`www`**

* Stands for World Wide Web
* Optional in modern websites

---

## 🔹 3. Domain Name

**`google`**

* Unique identity of a website
* Registered globally

---

## 🔹 4. Top-Level Domain (TLD)

**`.com`**

* Represents category/type

### Common TLDs:

* `.com` → Commercial
* `.org` → Organization
* `.edu` → Education
* `.in` → India

---

## 🔹 5. Path

**`/about`**

* Points to specific resource
* Can be:

  * Web page
  * API endpoint
  * File

---

## 🔹 6. Query Parameters

**`?myname=Ayush&age=23`**

* Starts with `?`
* Sends extra data to server

### Format:

```
key=value&key2=value2
```

### Example:

* `myname = Ayush`
* `age = 23`

---

## 🔹 7. Full Breakdown

| Part      | Value                | Meaning              |
| --------- | -------------------- | -------------------- |
| Protocol  | https                | Secure communication |
| Subdomain | www                  | Web service          |
| Domain    | google               | Website name         |
| TLD       | .com                 | Commercial domain    |
| Path      | /about               | Specific page        |
| Query     | ?myname=Ayush&age=23 | Extra data           |

---

## 🧠 Key Points

* URL = Uniform Resource Locator
* Complete address of resource
* Query params → dynamic data
* Path → resource location

---

## 🚀 URL Structure

```
protocol://subdomain.domain.tld/path?query
```

---

# ⚡ Node.js HTTP Server Example

## 📌 Basic Server with Routing + Logging

```js
const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    console.log("Incoming URL:", req.url);

    // Ignore favicon requests
    if (req.url === '/favicon.ico') {
        return res.end();
    }

    // Parse URL
    const myurl = url.parse(req.url, true);

    // Create log
    const log = `${new Date().toLocaleString()} : ${req.url}\n`;

    fs.appendFile('log.txt', log, (err) => {
        if (err) {
            console.log("Error writing log");
        }

        // Routing
        switch (myurl.pathname) {

            case '/':
                res.end('🏠 Welcome to Homepage');
                break;

            case '/about':
                const name = myurl.query.myname || 'Guest';
                res.end(`👋 Welcome ${name} to About Page`);
                break;

            case '/contact':
                res.end('📞 Contact us at contact@example.com');
                break;

            default:
                res.end('❌ 404 Not Found');
        }
    });
});

server.listen(3000, () => {
    console.log('🚀 Server running on port 3000');
});
```

---

# 🔥 Improved Version (Modern Approach)

👉 Using **URL class instead of url.parse()**

```js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const myURL = new URL(req.url, `http://${req.headers.host}`);

    const log = `${new Date().toLocaleString()} : ${req.url}\n`;

    fs.appendFile('log.txt', log, () => {

        if (myURL.pathname === '/') {
            res.end('Home Page');
        }

        else if (myURL.pathname === '/about') {
            const name = myURL.searchParams.get('myname') || 'Guest';
            res.end(`Hello ${name}`);
        }

        else {
            res.end('404 Not Found');
        }

    });
});

server.listen(3000);
```

---

# 🧠 Important Concepts (Interview Ready)

## 🔹 req.url

* Contains full request path + query
* Example:

  ```
  /about?myname=Ayush
  ```

---

## 🔹 url.parse()

* Converts URL into object
* Gives:

  * pathname
  * query

---

## 🔹 URL (Modern API)

* Better alternative
* Built-in parsing

---

## 🔹 fs.appendFile()

* Used for logging
* Appends data into file

---

## 🔹 Routing

* Based on:

  * `pathname`

Example:

```js
if(path === '/about')
```

---

## 🔹 Query Handling

Old:

```js
myurl.query.myname
```

New:

```js
myURL.searchParams.get('myname')
```

---

# ⚡ Bonus Tips

* Always handle `/favicon.ico`
* Use modern `URL` instead of `url.parse()`
* Add logging for debugging
* Use switch-case or router for scalability

---

# ✅ Summary

* URL defines **where + what + how**
* Node.js server handles requests using:

  * `http`
  * `url`
  * `fs`
* Query params help create dynamic responses
* Routing decides what response to send

---

💡 This topic is VERY important for:

* Backend interviews
* Node.js basics
* Web development fundamentals

---
