Great question, Haendel 🌱 — let’s unpack this gently and clearly.

---

## 📌 Why Key-Value Pairs Are Called *Entries*

- In data structures like **maps**, **objects**, or **dictionaries**, each **key-value pair** represents a single **piece of information** stored in the collection.  
- The term **entry** comes from the idea that each pair is an **entry in a table or logbook**:
  - The **key** is like the label or heading.
  - The **value** is the content associated with that label.
- Together, they form one **entry** in the collection.

---

## 🧩 Example in JavaScript

```javascript
const user = {
  name: "Alice",
  age: 25,
  role: "Admin"
};

// Object.entries(user) → returns an array of key-value pairs
console.log(Object.entries(user));
// [ ["name", "Alice"], ["age", 25], ["role", "Admin"] ]
```

Here:
- Each pair like `["name", "Alice"]` is considered an **entry**.  
- The whole object is a collection of entries.

---

## 📊 Visual Breakdown

| Entry | Key   | Value   |
|-------|-------|---------|
| 1     | name  | Alice   |
| 2     | age   | 25      |
| 3     | role  | Admin   |

---

## 🌱 Cozy Metaphor

Imagine a **guestbook at a cozy inn**:
- Each guest writes an **entry** in the book.  
- The **key** is their name.  
- The **value** is their details (room number, length of stay).  
- The whole guestbook is a collection of entries, each one a key-value pair.  

---

👉 So: **key-value pairs are called entries because they represent one complete record in a collection.**  

Would you like me to show you how this idea connects to **databases** (rows in a table) so you can see how “entries” scale up from simple objects to structured systems?
