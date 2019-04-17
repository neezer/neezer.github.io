import * as React from "react";
import { cleanup, render } from "react-testing-library";
import test, { Test } from "tape";
import { App } from "../src/app";

// tslint:disable-next-line no-var-requires
require("jsdom-global")();

test("shows a friendly message", (t: Test) => {
  t.plan(1);

  const { getByText } = render(<App />);

  try {
    getByText("Hello World!");

    t.pass("friendly message is correct");
  } catch (error) {
    t.fail(error.message);
  } finally {
    cleanup();
  }
});
