# TypeScript Concepts Guide

This guide provides a concise overview of essential TypeScript concept.

## Basic Types in TypeScript

TypeScript offers several built-in types to support static type checking.

```ts
let username: string = "Elroy";
let age: number = 30;
let isActive: boolean = true;
let anything: any = "Can be anything";
let unknownValue: unknown = 42;
let scores: number[] = [10, 20, 30];
let tupleExample: [string, number] = ["Elroy", 25];
```

Enums provide a way to define named constants:

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right
}
```
## Interfaces, Classes, and Functions

### Interfaces

Interfaces define the shape of an object.

```ts
interface User {
  name: string;
  age: number;
}
```

### Classes

Classes support object-oriented programming.

```ts
class Animal {
  constructor(public name: string) {}

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
```

### Functions

Functions can have typed parameters and return types.

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

## Working with the DOM and TypeScript

TypeScript provides type definitions for DOM elements.

```ts
const button = document.getElementById("submitBtn") as HTMLButtonElement;

button.addEventListener("click", () => {
  console.log("Button clicked");
});
```

## Generic Types

Generics provide a way to create reusable components.

```ts
function identity<T>(value: T): T {
  return value;
}

let result = identity<string>("Hello");
```

## Namespaces

Namespaces help organize code and prevent global scope pollution.

```ts
namespace MathUtils {
  export function square(x: number): number {
    return x * x;
  }
}

let result = MathUtils.square(4);
```

## Merging Declarations

TypeScript allows merging multiple declarations into one.

```ts
interface Car {
  brand: string;
}

interface Car {
  model: string;
}

const car: Car = {
  brand: "Toyota",
  model: "Corolla"
};
```

## Using an Ambient Namespace to Import an External Library

Ambient namespaces allow you to describe external JS libraries in TypeScript.

```ts
declare namespace MyLibrary {
  function doSomething(input: string): void;
}

MyLibrary.doSomething("test");
```

## Basic Nominal Typing with TypeScript

TypeScript is structurally typed by default, but you can simulate nominal typing using unique branding.

```ts
type USD = number & { readonly brand: unique symbol };
type EUR = number & { readonly brand: unique symbol };

function pay(amount: USD) {}

const usdAmount = 100 as USD;
const eurAmount = 100 as EUR;

pay(usdAmount); // Valid
pay(eurAmount); // Error: incompatible type
```

## Conclusion

This guide outlines key features and advanced patterns in TypeScript including basic types, classes, functions, DOM integration, generics, namespaces, declaration merging, and nominal typing.
```
