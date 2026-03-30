# 🌐 URL Structure Notes

## Example URL

```
https://www.google.com/about?myname=Ayush&age=23
```

---

## 🔹 1. Protocol (Scheme)

**`https://`**

* Full form: HyperText Transfer Protocol Secure
* Defines how data is transferred between client and server
* HTTPS = encrypted & secure communication

---

## 🔹 2. Subdomain

**`www`**

* Stands for World Wide Web
* Indicates web service (optional, not mandatory nowadays)

---

## 🔹 3. Domain Name

**`google`**

* Unique name of the website
* Registered with a domain registrar
* Helps identify the server on the internet

---

## 🔹 4. Top-Level Domain (TLD)

**`.com`**

* Represents type/category of website
* Common TLDs:

  * `.com` → commercial
  * `.org` → organization
  * `.edu` → education
  * `.in` → India

---

## 🔹 5. Path

**`/about`**

* Specifies resource location on server
* Can represent:

  * a page
  * an API route
  * a file

---

## 🔹 6. Query String

**`?myname=Ayush&age=23`**

* Starts with `?`
* Used to send data to server
* Format:

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

* URL = Complete address of a resource on internet
* Query params help send dynamic data
* HTTPS ensures security
* Path defines what resource you want

---

## 🚀 Bonus (Interview Tip)

* URL = Uniform Resource Locator
* Structure:

  ```
  protocol://subdomain.domain.tld/path?query
  ```

---

## ✅ Summary

A URL contains all the information required for a browser to locate and communicate with a server and fetch a specific resource, optionally passing extr
