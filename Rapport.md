
---

# 📝 JavaScript Operators Cheatsheet

### 🔢 1. Basic Arithmetic

```javascript
+   // addition
-   // subtraction
*   // multiplication
/   // division
%   // modulo (remainder after division)
**  // exponentiation (power)
```

👉 Example:

```javascript
5 + 3   // 8
5 - 3   // 2
5 * 3   // 15
5 / 3   // 1.666...
5 % 3   // 2 (remainder of 5 / 3)
2 ** 3  // 8 (2 to the power of 3)
```

---

### 🔄 2. Increment & Decrement

```javascript
++   // increase by 1
--   // decrease by 1
```

👉 Example:

```javascript
let x = 5;
x++;  // x = 6
x--;  // x = 5 again
```

---

### ➕ 3. Shorthand Assignment

Instead of writing `x = x + something`, we can use shorthand:

```javascript
x += 2;   // same as x = x + 2
x -= 2;   // same as x = x - 2
x *= 2;   // same as x = x * 2
x /= 2;   // same as x = x / 2
x %= 2;   // same as x = x % 2
```

👉 Example:

```javascript
let y = 3;
y += 2;  // y = 5
y *= 3;  // y = 15
```

---

### ⚖️ 4. Comparison Operators

Used in `if` conditions:

```javascript
==   // equal (value only, not type)
===  // strict equal (value + type) ✅ recommended
!=   // not equal
!==  // strict not equal ✅ recommended
>    // greater than
<    // less than
>=   // greater than or equal
<=   // less than or equal
```

👉 Example:

```javascript
5 == "5"    // true  (compares values only)
5 === "5"   // false (number vs string, different types)
10 > 5      // true
10 <= 5     // false
```

---

### 🔀 5. Logical Operators

```javascript
&&   // AND (both must be true)
||   // OR (at least one must be true)
!    // NOT (reverses true/false)
```

👉 Example:

```javascript
true && false   // false
true || false   // true
!true           // false
```

---

---

# 📝 Python vs JavaScript Cheatsheet

---

## 🔹 1. Printing

**Python**

```python
print("Hello")
```

**JavaScript**

```javascript
console.log("Hello");
```

---

## 🔹 2. Variables

**Python**

```python
x = 5
name = "Alice"
```

**JavaScript**

```javascript
let x = 5;          // changeable variable
const name = "Alice"; // constant (cannot be reassigned)
```

👉 Use `let` for values that can change, `const` for fixed ones.

---

## 🔹 3. Data Types

| Python  | JavaScript                          |
| ------- | ----------------------------------- |
| `int`   | `number` (no int/float distinction) |
| `float` | `number`                            |
| `str`   | `string`                            |
| `bool`  | `boolean`                           |
| `list`  | `array`                             |
| `dict`  | `object`                            |
| `None`  | `null` or `undefined`               |

---

## 🔹 4. Functions

**Python**

```python
def greet(name):
    return "Hello " + name
```

**JavaScript**

```javascript
// Classic way
function greet(name) {
    return "Hello " + name;
}

// Modern way (arrow function)
const greet = (name) => {
    return "Hello " + name;
};
```

---

## 🔹 5. If / Else

**Python**

```python
x = 10
if x > 5:
    print("Big")
else:
    print("Small")
```

**JavaScript**

```javascript
let x = 10;
if (x > 5) {
    console.log("Big");
} else {
    console.log("Small");
}
```

---

## 🔹 6. Loops

**Python (for loop with range)**

```python
for i in range(5):
    print(i)
```

**JavaScript**

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

**Python (while)**

```python
i = 0
while i < 5:
    print(i)
    i += 1
```

**JavaScript**

```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

---

## 🔹 7. Lists / Arrays

**Python**

```python
nums = [1, 2, 3]
nums.append(4)
print(nums[0])
```

**JavaScript**

```javascript
let nums = [1, 2, 3];
nums.push(4);
console.log(nums[0]);
```

---

## 🔹 8. Dictionaries / Objects

**Python**

```python
person = {"name": "Alice", "age": 25}
print(person["name"])
```

**JavaScript**

```javascript
let person = { name: "Alice", age: 25 };
console.log(person.name);   // dot notation
console.log(person["name"]); // bracket notation
```

---

## 🔹 9. Length

**Python**

```python
len(nums)
```

**JavaScript**

```javascript
nums.length
```

---

## 🔹 10. String Operations

**Python**

```python
s = "Hello"
print(s.lower())
print("World" in s)
```

**JavaScript**

```javascript
let s = "Hello";
console.log(s.toLowerCase());
console.log(s.includes("World"));
```

---

## 🔹 11. Special Values

**Python**

```python
None, True, False
```

**JavaScript**

```javascript
null, true, false, undefined
```

---

## 🔹 12. Comments

**Python**

```python
# This is a comment
```

**JavaScript**

```javascript
// This is a single-line comment

/* 
   This is 
   a multi-line comment
*/
```

---

## 🔹 13. Equality

**Python**

```python
5 == 5   # True
```

**JavaScript**

```javascript
5 == "5"   // true (loose comparison, not recommended)
5 === "5"  // false (strict comparison, type + value)
```

👉 Always use `===` instead of `==`.

---

## 🔹 14. Range Equivalent

**Python**

```python
for i in range(1, 5):
    print(i)
```

**JavaScript**

```javascript
for (let i = 1; i < 5; i++) {
    console.log(i);
}
```

---
