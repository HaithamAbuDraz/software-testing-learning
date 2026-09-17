# 🧪 Complete Software Testing Guide & Learning Repository

An in-depth, hands-on repository covering all major paradigms, tools, and methodologies in modern JavaScript/Node.js testing: **Unit Testing**, **Mocking & Spies**, **Integration Testing (API & Database)**, **Code Coverage**, **End-to-End (E2E) Testing**, and **Behavior-Driven Development (BDD)**.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-Testing-C21325?style=for-the-badge\&logo=jest\&logoColor=white)
![Cucumber](https://img.shields.io/badge/Cucumber-BDD-23D96C?style=for-the-badge\&logo=cucumber\&logoColor=white)
![Supertest](https://img.shields.io/badge/Supertest-API%20Testing-000000?style=for-the-badge)
![Puppeteer](https://img.shields.io/badge/Puppeteer-E2E%20Testing-40B5A4?style=for-the-badge\&logo=puppeteer\&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-Web%20API-000000?style=for-the-badge\&logo=express\&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)

---

## 📐 Testing Pyramid & Core Concepts

```
       / \
      / E2E \       <-- High confidence, slow, expensive (Puppeteer)
     /-------\
    /  Integ. \     <-- API & DB interaction (Supertest, MongoDB)
   /-----------\
  /    Unit     \   <-- Fast, isolated, test individual functions (Jest)
 /---------------\
```

1. **Unit Testing:** Tests individual functions/units in total isolation without hitting real databases, external networks, or file systems.
2. **Integration Testing:** Tests how different units interact with one another (e.g., Express router -> controller -> service -> real MongoDB database).
3. **End-to-End (E2E) Testing:** Tests complete user journeys inside an actual browser environment (e.g., loading web pages, filling out forms, submitting).
4. **Behavior-Driven Development (BDD):** Collaborative testing using human-readable business specifications (Gherkin syntax: Given-When-Then).

---

## 🛠 Tech Stack & Tools

- **Test Runner & Framework:** [Jest](https://jestjs.io/) (v30)
- **API Testing:** [Supertest](https://github.com/ladjs/supertest)
- **Database & ODM:** [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
- **Server Framework:** [Express.js](https://expressjs.com/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **E2E Browser Automation:** [Puppeteer](https://pptr.dev/)
- **BDD Framework:** [Cucumber.js](https://cucumber.io/) (`@cucumber/cucumber`)
- **Environment Management:** [cross-env](https://github.com/kentcdodds/cross-env) & [dotenv](https://github.com/motdotla/dotenv)
- **Containerization:** Docker & Docker Compose

---

## 📂 Project Architecture

```
software-testing-learning/
├── config/
│   └── config.js                   # Environment & Mongoose DB connection logic
├── src/
│   └── api/
│       ├── api-routes.js           # Main router aggregator (/books, /auth)
│       └── resources/
│           ├── auth/               # Authentication resource (registration)
│           │   ├── auth.controller.js
│           │   └── auth.router.js
│           └── books/              # Books CRUD resource
│               ├── books.controller.js
│               ├── books.model.js
│               ├── books.router.js
│               └── books.service.js
├── test/
│   ├── cucumber/                   # BDD Cucumber test suite
│   │   └── features/
│   │       ├── isPositiveNumber.feature
│   │       └── support/
│   │           └── steps.js
│   ├── e2e/                        # End-to-End browser test suite
│   │   ├── e2e.js                  # Puppeteer automation script
│   │   ├── home.html               # Welcome target page
│   │   └── mySite.html             # Login form page
│   ├── integration/                # Integration test suite (Supertest & DB)
│   │   ├── auth-api.test.js        # Auth endpoint testing
│   │   ├── books-api.test.js       # Books HTTP endpoint testing
│   │   └── books.test.js           # Books service & DB integration
│   └── unit/                       # Unit test suite
│       ├── app.test.js             # Smoke test
│       ├── spy.test.js             # Jest spyOn demonstrations
│       └── utils.test.js           # Jest matchers, async & mocking tests
├── app.js                          # Express application & HTTP server export
├── cucumber.js                     # Cucumber profile & configuration
├── db.js                           # Dummy DB module used for mocking tests
├── docker-compose.yml              # MongoDB & Mongo Express services
├── email.js                        # Dummy email notification module
├── package.json                    # Project metadata, dependencies & scripts
├── spy.js                          # Logging helper module for spy testing
└── utils.js                        # Utility functions for unit testing demos
```

---

## 🚀 Getting Started & Installation

### 1. Clone & Install Dependencies

```bash
git clone <repository-url>
cd software-testing-learning
npm install
```

### 2. Start MongoDB Database via Docker

```bash
docker compose up -d
```

- **MongoDB Port:** `27017`
- **Credentials:** Username: `user`, Password: `password`
- **Mongo Express Web UI:** `http://localhost:8081`

### 3. Environment Configuration

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

---

## ⚡ Test Scripts & Commands

All testing scripts are defined in `package.json`:

| Command | Description |
| :--- | :--- |
| `npm test` | Runs Jest in interactive watch mode (`--watchAll`), with detailed output (`--verbose`) and coverage report (`--coverage`) |
| `npm run test:run` | Runs all Jest tests once in band (`--runInBand`), suitable for CI pipelines |
| `npm run test:cucumber` | Executes BDD feature files using `cucumber-js` |
| `npm start` | Starts the Express server in development mode |

### Running Specific Tests

- **Run a single test file:**
  ```bash
  npx jest test/unit/utils.test.js
  ```
- **Filter tests by name (regex):**
  ```bash
  npx jest -t "applyDiscount"
  ```
- **Filter inside watch mode:**
  Press `p` to filter by filename, or `t` to filter by test name.

---

## 🧩 Module 1: Unit Testing Fundamentals

Unit tests verify that a small, isolated piece of code works as expected under varying conditions.

### Structure: `describe`, `it`, and `test`

Jest provides `describe` blocks for grouping and `it` / `test` for individual test cases:

```javascript
describe('sum', () => {
  it('should return 5 when adding 2 and 3', () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
  });
});
```

### Jest Matchers Guide

#### 1. Exact Equality & Numbers
```javascript
expect(result).toBe(5);                     // Strict equality (===)
expect(result).toBeGreaterThan(4);          // > 4
expect(result).toBeLessThan(6);             // < 6
expect(result).toBeGreaterThanOrEqual(5);   // >= 5
expect(result).toBeLessThanOrEqual(5);      // <= 5
expect(sum(0.102, 0.3)).toBeCloseTo(0.4);   // Floating point precision
```

#### 2. Strings & Regex
```javascript
expect(greeting('Haitham')).toMatch(/hello haitham/i);
```

#### 3. Booleans, Null & Undefined
```javascript
expect(isEven(4)).toBeTruthy();     // Truthy evaluation
expect(isEven(5)).toBeFalsy();      // Falsy evaluation

expect(x).toBeUndefined();          // undefined
expect(y).toBeDefined();            // not undefined
expect(z).toBeNull();               // null

// Negation with .not
expect(x).not.toBeDefined();
expect(y).not.toBeNull();
```

#### 4. Arrays
```javascript
expect(ANIMALS).toContain('cat');                            // Primitive in array
expect(orders).toContainEqual({ id: 1, price: 10 });        // Object in array (deep equality)
```

#### 5. Objects
```javascript
// Deep equality of all keys & values
expect(order).toEqual({ id: 1, price: 9 });

// Subset matching (checks only specified properties)
expect(result).toMatchObject({ id: 1, price: 10 });

// Checking property existence and value
expect(result).toHaveProperty('id', 1);
```

#### 6. Errors & Exceptions
When testing that a function throws, wrap the call in an anonymous arrow function:
```javascript
expect(() => getOrderByTd()).toThrow('id is not defined');
```

### Testing Asynchronous Code

#### Using `async / await`:
```javascript
it('should return orders', async () => {
  const orders = await getOrders();
  expect(orders.length).toBe(2);
});
```

#### Using `.resolves` and `.rejects`:
```javascript
// Resolves
await expect(getOrders()).resolves.toContainEqual({ id: 1, price: 10 });

// Rejects
await expect(createOrder()).rejects.toThrow('userId not found');
```

---

## 🎭 Module 2: Mocking & Spies

Mocking replaces dependencies with configurable dummy implementations, enabling true unit isolation.

### Mock Functions (`jest.fn()`)

Create a mock function:
```javascript
const mockFn = jest.fn();
```

### Mock Implementations & Return Values

```javascript
// Simple return value
db.getOrder = jest.fn().mockReturnValue({ id: 1, price: 10 });

// Sequential return values
const fn = jest.fn()
  .mockReturnValueOnce(10)
  .mockReturnValue(5);

// Async resolved value (Promises)
db.getUser = jest.fn().mockResolvedValue({ email: 'test@email.com' });

// Dynamic implementation based on arguments
db.getOrder = jest.fn().mockImplementation((id) => {
  if (id < 5) return { id, price: 10 };
  return { id, price: 8 };
});
```

### Mock Assertions & Call Inspection

```javascript
// Verify the mock was called
expect(db.updateOrder).toHaveBeenCalled();

// Verify arguments passed to the mock
expect(db.updateOrder).toHaveBeenCalledWith({ id: 1, price: 9 });

// Inspect call history details via `.mock` property
expect(db.getOrder.mock.calls.length).toBe(1);        // Called once
expect(db.getOrder.mock.calls[0][0]).toBe(1);        // 1st call, 1st argument was 1
```

### Mocking External Modules (`jest.mock`)

Mocking 3rd-party libraries like `axios` to prevent real HTTP calls during tests:

```javascript
// In test file
const axios = require('axios');
jest.mock('axios');

it('should return data from API', async () => {
  axios.get.mockResolvedValue({ id: 5 });

  const data = await fetchData();
  expect(data).toEqual({ id: 5 });
});
```

### Method Spies with `jest.spyOn()`

Track and inspect calls to existing object methods without completely overriding them:

```javascript
const logSpy = jest.spyOn(console, 'log');

afterEach(() => {
  logSpy.mockClear(); // Reset call count between tests
});

it('should log even for number 10', () => {
  isEven(10);
  expect(logSpy).toHaveBeenCalledWith('10 is even');
  expect(logSpy.mock.calls.length).toBe(1);
});
```

---

## 🔌 Module 3: Integration Testing

Integration tests verify that different layers work seamlessly together against a real MongoDB database and HTTP endpoints.

### Database Testing (MongoDB & Mongoose)

Tests in `test/integration/books.test.js` connect to the dedicated test database (`books-test`):

```javascript
const mongoose = require('../../config/config');
const booksService = require('../../src/api/resources/books/books.service');
const Book = require('../../src/api/resources/books/books.model');

beforeEach(async () => {
  await Book.deleteMany({}); // Start each test with an empty collection
});

afterAll(async () => {
  await Book.deleteMany({});
  await mongoose.disconnect(); // Cleanly close connection
});

describe('createBook', () => {
  it('should persist book in database', async () => {
    await booksService.createBook({ title: 'Clean Code' });
    const books = await Book.find({});
    expect(books.length).toBe(1);
    expect(books[0]).toMatchObject({ title: 'Clean Code' });
  });
});
```

### HTTP API Testing with Supertest

Tests in `test/integration/books-api.test.js` and `auth-api.test.js` make real HTTP requests:

```javascript
const request = require('supertest');
const server = require('../../app');

afterAll(async () => {
  server.close(); // Stop listening
});

describe('GET /api/books/:id', () => {
  it('should return 200 and the book object', async () => {
    const book = await Book.create({ title: 'Node.js Guide' });
    const res = await request(server).get(`/api/books/${book.id}`);

    expect(res.status).toBe(200);
    expect(res.body.data.book).toMatchObject({ title: 'Node.js Guide' });
  });

  it('should return 404 if book does not exist', async () => {
    const res = await request(server).get('/api/books/62b10f0171a491a27a1214e6');
    expect(res.status).toBe(404);
  });
});
```

### Handling Server Teardown & Open Handles

To prevent Jest from hanging after tests finish:
1. Export the active HTTP server instance: `const server = app.listen(...); module.exports = server;`
2. Close server and database connections in `afterAll`:
   ```javascript
   afterAll(async () => {
     server.close();
     await mongoose.disconnect();
   });
   ```
3. Use `--detectOpenHandles` in your test scripts to identify unclosed resources.

---

## 📊 Module 4: Code Coverage

Code coverage measures how much of your production code is executed by automated tests.

Run coverage analysis:
```bash
npm test
```

### Coverage Metrics Explained:
- **Statement Coverage (`% Stmt`):** Percentage of executable statements executed.
- **Branch Coverage (`% Branch`):** Percentage of control structure branches (if/else, switch) taken.
- **Function Coverage (`% Funcs`):** Percentage of declared functions called.
- **Line Coverage (`% Lines`):** Percentage of executable lines covered.

*Note: The generated `coverage/` directory is excluded from version control via `.gitignore`.*

---

## 🌐 Module 5: End-to-End (E2E) Testing with Puppeteer

E2E tests simulate actual human interactions in a real Chromium browser.

### Sample E2E Flow (`test/e2e/e2e.js`):

```javascript
const puppeteer = require('puppeteer');

async function main() {
  // Launch visible browser (headless: false)
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to target site
  await page.goto('http://127.0.0.1:5500/test/e2e/mySite.html');

  // Type into form inputs
  await page.type('input[id=email]', 'test@gmail.com');
  await page.type('input[id=password]', 'password123');

  // Capture screenshot of filled form
  await page.screenshot({ path: 'test.png' });

  // Submit the form
  await page.click('input[type=submit]');

  await browser.close();
}

main();
```

---

## 🥒 Module 6: Behavior-Driven Development (BDD) with Cucumber

BDD unites developers, QA, and business stakeholders by defining requirements in executable, human-readable specifications using Gherkin syntax.

### 1. Feature File (`test/cucumber/features/isPositiveNumber.feature`)

```gherkin
Feature: Is Positive Number

  Scenario: 5 is positive number
    Given number 5
    When i ask if number 5 is positive
    Then i should receive 1

  Scenario: -2 is negative number
    Given number -2
    When i ask if number -2 is positive
    Then i should receive 0
```

### 2. Step Definitions (`test/cucumber/features/support/steps.js`)

```javascript
const { Given, When, Then } = require('@cucumber/cucumber');
const { isPositive } = require('../../../../cucumber');
const assert = require('assert');

Given('number {int}', function (number) {
  this.number = number;
});

When('i ask if number {int} is positive', function (number) {
  this.actualAnswer = isPositive(number);
});

Then('i should receive {int}', function (expectedAnswer) {
  assert.equal(this.actualAnswer, expectedAnswer);
});
```

### 3. Run Cucumber Tests

```bash
npm run test:cucumber
```

---

## 👨‍💻 Author

**Haitham Abu Draz**

Software Engineering Student & Frontend Developer

🔗 **LinkedIn:**
https://www.linkedin.com/in/haithamabudraz

🔗 **GitHub:**
https://github.com/HaithamAbuDraz

---

## 📄 License

This project is licensed under the **MIT License**.

See the [`LICENSE`](LICENSE) file for more information.

---

## 🙏 Acknowledgments

This repository is built for educational purposes to demonstrate real-world software testing practices using modern tools and frameworks.

---

<div align="center">

### 🧪 Test. Learn. Improve. Repeat. 🚀

Made with ❤️ by **Haitham Abu Draz**

</div>
