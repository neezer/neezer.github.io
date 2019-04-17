import { createContext } from "react";

export interface IAssets {
  images: Record<string, string>;
}

export const AssetContext = createContext<IAssets>({ images: {} });
