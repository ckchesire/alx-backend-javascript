# ES6 (ECMAScript 2015) Cheatsheet

This guide provides a quick reference to the major features introduced in **ES6 (ECMAScript 2015)**. ES6 was a significant update to JavaScript that improved code readability, modularity, and performance.

---

## 🔹 What is ES6?

**ES6**, also known as **ECMAScript 2015**, is the 6th edition of the ECMAScript language specification. It introduced powerful new syntax and features for writing modern JavaScript applications.

---

##  New Features Introduced in ES6

- Block-scoped variables (`let`, `const`)
- Arrow functions (`=>`)
- Default function parameters
- Template literals
- Destructuring assignment
- Rest and spread operators
- Classes and inheritance
- Promises
- Modules (`import` / `export`)
- Maps, Sets, WeakMaps, WeakSets
- Symbols
- Iterators and generators
- `for...of` loop

---

## Constants vs Variables

| Keyword | Scope        | Reassignable | Hoisted |
|--------|--------------|--------------|---------|
| `let`  | Block-scoped | ✅ Yes        | ❌ No    |
| `const`| Block-scoped | ❌ No         | ❌ No    |
| `var`  | Function-scoped | ✅ Yes    | ✅ Yes  |

Example:
```js
let x = 5;
x = 10; // OK

const y = 5;
y = 10; // ❌ Error
```

---

## Block-Scoped Variables

Variables declared with `let` and `const` are only accessible within the block they are defined:

```js
if (true) {
  let a = 10;
  const b = 20;
}
console.log(a); // ❌ ReferenceError
```

---

## Arrow Functions & Default Parameters

Arrow functions provide a concise syntax and do not bind their own `this`.

```js
const greet = (name = "Guest") => `Hello, ${name}`;
```

---

## ... Rest and Spread Parameters

- **Rest (`...`)** gathers arguments:
```js
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
```

- **Spread (`...`)** expands iterables:
```js
const arr = [1, 2, 3];
const extended = [...arr, 4, 5];
```

---

## String Templating (Template Literals)

Use backticks and `${}` to embed variables:
```js
const name = "Elroy";
console.log(`Welcome, ${name}!`);
```

---

## Object Creation & Properties

- **Shorthand properties**:
```js
let age = 30;
const user = { name: "Elroy", age };
```

- **Computed property names**:
```js
const key = "role";
const profile = {
  name: "Elroy",
  [key]: "admin"
};
```

- **Method shorthand**:
```js
const obj = {
  greet() {
    return "Hello!";
  }
};
```

---

## Iterators & `for...of` Loops

`for...of` is used to loop over **iterables** (like arrays, strings, etc.):

```js
for (let color of ["red", "green", "blue"]) {
  console.log(color);
}
```

---

## Summary

ES6 introduced powerful new features that help you write cleaner, more efficient, and modern JavaScript. Understanding and using these features is essential for any JavaScript developer.

---

## References

- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ECMAScript Language Specification](https://tc39.es/ecma262/)
