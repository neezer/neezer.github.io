import * as React from "react";
import { AssetContext } from "./contexts/assets";

interface IProps {
  className?: string;
}

export const Bio: React.FunctionComponent<IProps> = ({ className }) => {
  const { images } = React.useContext(AssetContext);

  if (images.tomatoes === undefined) {
    return null;
  }

  return (
    <img title="three tomatoes" src={images.tomatoes} className={className} />
  );
};
