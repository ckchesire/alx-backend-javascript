```markdown
# JavaScript Promises, Error Handling, and Async/Await

## What is a Promise?

A **Promise** is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

## Why Use Promises?

Promises are used to handle asynchronous operations such as:

- Fetching data from APIs
- Reading or writing files
- Timers or delays
- Event-based or callback-heavy code

## Creating a Promise

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("It worked!");
  } else {
    reject("It failed.");
  }
});
```

## Using `.then()`, `.catch()`, and `.finally()`

```javascript
myPromise
  .then(result => {
    console.log("Success:", result);
  })
  .catch(error => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("This runs no matter what.");
  });
```

- `.then()` handles the resolved value.
- `.catch()` handles any errors (rejected state).
- `.finally()` executes regardless of the promise outcome.

## Common Promise Methods

| Method                      | Description                                                      |
|----------------------------|------------------------------------------------------------------|
| `Promise.resolve(value)`   | Returns a resolved promise with the specified value.             |
| `Promise.reject(error)`    | Returns a rejected promise with the specified error.             |
| `Promise.all([p1, p2])`    | Resolves when all promises resolve, or rejects if any fail.      |
| `Promise.race([p1, p2])`   | Resolves or rejects as soon as any promise settles.              |
| `Promise.allSettled([...])`| Resolves when all promises settle, regardless of the outcome.    |
| `Promise.any([...])`       | Resolves when any promise is fulfilled. Rejects if all fail.     |

## Error Handling with `try`, `catch`, and `throw`

Using traditional `try/catch`:

```javascript
try {
  throw new Error("Something went wrong");
} catch (err) {
  console.error("Caught error:", err.message);
}
```

Inside a promise:

```javascript
new Promise((resolve, reject) => {
  throw new Error("Oops!");
}).catch(err => {
  console.log("Caught inside promise:", err.message);
});
```

## Async/Await

### Async Function

An `async` function always returns a promise.

```javascript
async function greet() {
  return "Hello!";
}

greet().then(console.log); // Output: Hello!
```

### Await Operator

The `await` operator pauses the execution of an `async` function until the promise is resolved.

```javascript
async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Fetch error:", err);
  }
}
```

## Complete Example

```javascript
function fetchNumber() {
  return new Promise((resolve, reject) => {
    const num = Math.random();
    setTimeout(() => {
      if (num > 0.5) resolve(num);
      else reject("Number too low");
    }, 1000);
  });
}

async function run() {
  try {
    const result = await fetchNumber();
    console.log("Result:", result);
  } catch (err) {
    console.error("Caught error:", err);
  } finally {
    console.log("Finished.");
  }
}

run();
```

## Summary

- Use Promises to simplify asynchronous code.
- Chain `.then()`, `.catch()`, and `.finally()` for better flow control.
- Use `async/await` for cleaner and more readable asynchronous functions.
- Always handle errors using `try/catch` or `.catch()` to avoid unhandled rejections.
```
