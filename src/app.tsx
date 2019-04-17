/** @jsx jsx */

import { css, jsx } from "@emotion/core";
import * as React from "react";

const style = css`
  font-family: Montserrat, Ubuntu, sans-serif;
`;

export const App: React.FunctionComponent = () => (
  <h1 css={style}>Hello World!</h1>
);
