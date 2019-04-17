import * as React from "react";
import { cleanup, render } from "react-testing-library";
import test, { Test } from "tape";
import { App } from "../src/app";

// tslint:disable-next-line no-var-requires
require("jsdom-global")();

test("shows a friendly message", (t: Test) => {
  t.plan(1);

  try {
    const { getByText } = render(<App assets={{ images: {} }} />);

    getByText("Evan Sherwood");

    t.pass("friendly message is correct");
  } catch (error) {
    t.fail(error.message);
  } finally {
    cleanup();
  }
});
