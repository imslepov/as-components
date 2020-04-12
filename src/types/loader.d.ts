import { DefaultSizeProp } from "./index";
import { OVERLAY_LIST, SHAPES_MAP } from "../packages/loader";

export type LoaderOverlayProp = typeof OVERLAY_LIST[number];
export type LoaderShapeProp = keyof typeof SHAPES_MAP;

export type LoaderProps<
  SizeProp = DefaultSizeProp,
  OverlayProp = LoaderOverlayProp,
  ShapeProp = LoaderShapeProp
> = {
  tag: string;
  size: SizeProp;
  overlay: OverlayProp;
  shape: ShapeProp;
};
