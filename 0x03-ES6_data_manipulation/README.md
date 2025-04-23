# JavaScript Data Structures & Functional Methods

This document provides a concise guide to working with JavaScript’s powerful array methods (`map`, `filter`, and `reduce`), typed arrays, and built-in data structures like `Set`, `Map`, `WeakSet`, and `WeakMap`.

---

## Array Methods

### map()
Transforms every item in an array and returns a new array.

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2); // [2, 4, 6]
```

### filter()
Filters items based on a condition.

```js
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]
```

### reduce()
Reduces an array to a single value.

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 10
```

---

## Typed Arrays

Typed Arrays are used for handling binary data in low-level APIs like WebGL, file streams, or sockets.

```js
const buffer = new ArrayBuffer(8); // Creates an 8-byte buffer
const view = new Uint8Array(buffer);
view[0] = 255;

console.log(view); // Uint8Array(8) [255, 0, 0, 0, 0, 0, 0, 0]
```

Common types:
- Int8Array, Uint8Array
- Int16Array, Uint16Array
- Int32Array, Uint32Array
- Float32Array, Float64Array

---

## Data Structures

### Set
Stores unique values.

```js
const s = new Set([1, 2, 2, 3]);
s.add(4);
console.log([...s]); // [1, 2, 3, 4]
```

### Map
Stores key-value pairs. Keys can be of any type.

```js
const m = new Map();
m.set('a', 1);
m.set({ x: 10 }, 'object value');
console.log(m.get('a')); // 1
```

### WeakMap and WeakSet

- Hold weak references to objects
- Not iterable
- Allow garbage collection when objects are no longer in use

```js
const wm = new WeakMap();
let obj = {};
wm.set(obj, 'data');
obj = null; // Now eligible for garbage collection
```

---

## Notes

- Use `map`, `filter`, and `reduce` for functional programming.
- Use `Set` when you need to eliminate duplicates.
- Use `Map` when you need key-value storage with complex keys.
- Use `WeakMap` and `WeakSet` when you want memory-safe references to objects.

