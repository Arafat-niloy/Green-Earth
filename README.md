
# JS Questions & Answers

## 1. What is the difference between var, let, and const?

`var`

- Function scoped

- Re-declare করা যায়

- Hoisting হয় (variable উপরে উঠায়)
 

Example:
```js
var x = 10;
var x = 20; // allowed
```

`let`

- Block scoped (`{ }`)

- Same scope এ re-declare করা যায়

- Re-assign করা যায়

Example:
```js
let y = 10;
y = 20; // allowed 
let y = 30; // not allowed in same block ❌
```

`const`

- Block scoped

- re-declared করা যায় না

- re-assigned করা যায় না (for constant value)

Example:
```js
const z = 10;
z = 20; // ❌ not allowed
```

## 2. What is the difference between map(), forEach(), and filter()?

`map()`

- একটি নতুন array রিটার্ন করে

- প্রতিটি element modify করে নতুন array বানাতে কাজে লাগে

Example:
```js
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2); // [2, 4, 6] নতুন array রিটার্ন করেছে
```

`forEach()`

- কিছু রিটার্ন করে না (undefined দেয়)

- শুধু প্রতিটি element এর জন্য কাজ চালায়

Example:
```js
const numbers = [1, 2, 3];
numbers.forEach(n => console.log(n * 2)); 
// শুধু print হবে, নতুন array হবে না
```

`filter()`

- একটি নতুন array রিটার্ন করে

- শর্ত অনুযায়ী element গুলো বেছে নেয়

Example:
```js
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]
```

## 3. What are arrow functions in ES6?

- Arrow function হলো ছোট ও সহজভাবে function লেখার উপায়

- function keyword ব্যবহার করতে হয় না


Example:
```js
// Normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => a + b;  //short & easy
```

## 4. How does destructuring assignment work in ES6?

> Destructuring assignment এর মাধ্যমে array বা object থেকে মান আলাদা করে variable এ নেয়া যায়।

Array Destructuring Example:
```js
const numbers = [10, 20, 30];
const [a, b, c] = numbers; 
console.log(a, b, c); // 10 20 30
```

Object Destructuring Example:
```js
const user = { name: "Gulbahar", age: 21 };
const { name, age } = user;
console.log(name, age); // Gulbahar 21
```

## 5. Explain template literals in ES6. How are they different from string concatenation?

**Template literals:** 
- এটা `backtick(``)` দিয়ে লেখা হয়

- Multi-line string লেখা সহজ হয়

- **${}** ব্যবহার করে Variable সহজে add করা যায় 

Template Literal Example:
```js
const name = "Gulbahar";
const message = `Hello, ${name}!`;
console.log(message); //Hello, Gulbahar!
```

String Concatenation Example:
```js
const name = "Gulbahar";
const message = "Hello, " + name + "! How are you?";
console.log(message); //Hello, Gulbahar! How are you?
```

### Difference:

- Template literals এ **multi-line string** করা যায় 

- `${}` ব্যবহার করে সহজে variable, expression add ও করা যায়

- Concatenation (old way) এক্ষেত্রে  ` + ` ব্যবহার করতে হয়, যা বড় হলে বারবার লেখার ঝামেলা হয়। 