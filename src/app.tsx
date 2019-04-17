/** @jsx jsx */

import { css, jsx } from "@emotion/core";
import * as React from "react";
import { Bio } from "./bio";
import { AssetContext, IAssets } from "./contexts/assets";

const container = css`
  display: grid;
  max-width: 960px;
  margin: 0 auto;
  grid-template-areas: "header" "bio";
  justify-items: center;
`;

const style = css`
  font-family: Montserrat, Ubuntu, sans-serif;
  border: 10px solid black;
  padding: 10px;
  text-transform: uppercase;
  text-align: center;
  font-size: 50px;
  grid-area: header;
`;

const bio = css`
  grid-area: bio;
`;

interface IProps {
  assets: IAssets;
}

export const App: React.FunctionComponent<IProps> = ({ assets }) => {
  return (
    <AssetContext.Provider value={assets}>
      <div css={container}>
        <h1 css={style}>Evan Sherwood</h1>
        <Bio css={bio} />
      </div>
    </AssetContext.Provider>
  );
};
