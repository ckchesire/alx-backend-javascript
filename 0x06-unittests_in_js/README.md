# Mocha Testing Guide

This guide covers essential concepts and examples for writing effective tests using **Mocha**, along with **Chai**, **Sinon**, and **Supertest** in a Node.js environment.

---

##  Setup

Install necessary packages:

```bash
npm install --save-dev mocha chai sinon supertest
```

---

##  Folder Structure Example

```
project/
├── app.js
├── test/
│   ├── math.test.js
│   └── user.test.js
└── README.md
```

---

##  Writing a Test Suite with Mocha

```js
const assert = require('assert');

describe('Math Functions', () => {
  it('should return 4 when 2 + 2', () => {
    assert.strictEqual(2 + 2, 4);
  });
});
```

* `describe()` defines a test suite.
* `it()` defines a test case.

Run with:

```bash
npx mocha
```

---

##  Assertion Libraries

### Node's Built-in `assert`

```js
assert.strictEqual(actual, expected);
```

### Chai (Recommended)

```js
const { expect } = require('chai');

expect(3 + 3).to.equal(6);
expect([1, 2, 3]).to.include(2);
```

---

##  Managing Large Test Suites

* Use nested `describe()` blocks.
* Split into multiple test files.
* Use `--reporter` and `--grep`:

```bash
npx mocha --reporter dot
npx mocha --grep "User API"
```

---

##  Spies with Sinon

Track calls and arguments:

```js
const sinon = require('sinon');

const spy = sinon.spy();
myFunction(spy);
sinon.assert.calledOnce(spy);
```

---

##  Stubs with Sinon

Replace a function’s behavior:

```js
const stub = sinon.stub(obj, 'method').returns(fakeValue);

// Restore after test
stub.restore();
```

---

## 🔁 Hooks

```js
before(() => { /* Run once before all tests */ });
after(() => { /* Cleanup after all tests */ });
beforeEach(() => { /* Before each test */ });
afterEach(() => { /* After each test */ });
```

Use for setup/teardown logic.

---

##  Async Function Testing

### With async/await:

```js
it('resolves with 42', async () => {
  const result = await asyncFunc();
  expect(result).to.equal(42);
});
```

### With Promises:

```js
it('resolves with 42', () => {
  return asyncFunc().then(result => {
    expect(result).to.equal(42);
  });
});
```

---

##  Integration Testing (Supertest + Express)

```js
const request = require('supertest');
const app = require('../app');

describe('GET /api/hello', () => {
  it('returns greeting', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.status).to.equal(200);
    expect(res.body.message).to.equal('Hello world');
  });
});
```

---

##  Tips

* Use `chai.expect` for expressive assertions.
* Use `sinon` for mocking, spying, and stubbing.
* Keep tests modular and readable.
* Group related tests logically.