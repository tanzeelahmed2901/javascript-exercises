# React Covid App [Testing 1]

## Objectives

- Write one or two basic tests for your `Result` and `Select` components for your covid app

## The Task

![Covid App](../../img/covid.png)

Write some unit tests using the `react-testing` library

- Create a directory in `/components` called `__tests__`
- Add tests here following the convention: `Component.test.js`
- Use the included boilerplate to get started
- Execute the test-runner with `yarn test` or `npm run test`

## Boilerplate

```js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Some Component", () => {
  it("should do something", () => {
    // Test code goes here
  });
  it("should do something else", () => {
    // Test code goes here
  });
});
```

## Running the solution (Instructor)

- CD into `../solutions/testing-1` and look at the readme
