import { css, Global } from "@emotion/core";
import * as React from "react";
import { render } from "react-dom";
import { App } from "./app";
import * as assets from "./assets";

const elem = document.getElementById("app");

const globalStyles = css`
  body {
  }
`;

render(
  <React.Fragment>
    <Global styles={globalStyles} />
    <App assets={assets} />
  </React.Fragment>,
  elem
);
