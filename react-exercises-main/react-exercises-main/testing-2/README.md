# React Covid App [Testing 2]

## Objectives

- Write one or two basic tests for your `useCovid` hook from your covid app

## The Task

![Covid App](../../img/covid.png)

Write some unit tests using the `react-testing` library

you'll need to run `yarn add @testing-library/react-hooks -S`

- Create a directory in `/hooks` called `__tests__`
- Add tests here following the convention: `Hook.test.js`
- Use the included boilerplate to get started
- Execute the test-runner with `yarn test` or `npm run test`

## Boilerplate

```js
import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import "@testing-library/jest-dom/extend-expect";


describe("useCovid", () => {
  it("should do something", () => {
    // test goes here
  });
});
```

## Running the solution (Instructor)

- CD into `../solutions/testing-2` and look at the readme
