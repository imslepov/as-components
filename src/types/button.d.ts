import { DefaultSizeProp } from "./index";
import { LoaderShapeProp } from "./loader";

export type ButtonProps<
  SizeProp = DefaultSizeProp,
  LoaderProp = LoaderShapeProp
> = {
  tag: "button" | "a" | "router-link" | "nuxt-link";
  href: string;
  to: object | string;
  theme: string;
  size: SizeProp;
  loader: LoaderProp;
  outline: boolean;
  rounded: boolean;
  circle: boolean;
  loading: boolean;
  disabled: boolean;
  block: boolean;
  pressed: boolean;
  nuxt: boolean;
};
