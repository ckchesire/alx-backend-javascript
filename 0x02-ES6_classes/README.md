# 0x02. ES6 classes

# JavaScript OOP and Metaprogramming Concepts

This repository contains simple examples showcasing key JavaScript concepts related to Object-Oriented Programming (OOP), static methods, inheritance, and metaprogramming techniques like Proxies and Symbols.

---

## Topics Covered

### 1. Defining a Class

Defines a class using the `class` keyword and a constructor.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
```

### 2. Adding Methods to a Class

Demonstrates instance methods inside a class.

```javascript
class Calculator {
  add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }
}
```

### 3. Static Methods

Illustrates how to define utility methods that don’t rely on instance data.

```javascript
class MathUtils {
  static square(x) {
    return x * x;
  }
}
```

### 4. Inheritance with `extends`

Shows how to create a subclass and override methods from the parent class.

```javascript
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}
```

### 5. Metaprogramming

#### a. Using Proxies

Intercepts object property access dynamically.

```javascript
const handler = {
  get: (target, prop) => {
    return prop in target ? target[prop] : `Property '${prop}' does not exist`;
  }
};

const person = new Proxy({ name: "John" }, handler);
```

#### b. Using Symbols

Demonstrates how to define unique object keys that are hidden from typical enumeration.

```javascript
const secretKey = Symbol("secret");

const obj = {
  [secretKey]: "hidden value",
  public: "visible value"
};
```

## Learning Goals

- Understand JavaScript class syntax
- Use static methods appropriately
- Implement inheritance using `extends`
- Apply metaprogramming techniques like Proxies and Symbols
