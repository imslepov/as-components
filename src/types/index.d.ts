/* eslint-disable prettier/prettier */
import { DEFAULT_SIZES, EXTENDED_SIZES, BREAKPOINTS } from "../utils/consts";
export { ButtonProps } from "./button";
export { LoaderOverlayProp, LoaderShapeProp, LoaderProps } from "./loader";
export { RowJustifyProp, RowAlignProp, RowDirectionProp, RowGuttersProp, RowProps } from "./row";
export { ColNumericProp, ColProps } from "./col";
export { FormItemProps } from "./form-item";
export { CheckboxData, CheckboxComputed, CheckboxProps, CheckboxMethods, CheckboxContext, CheckboxComponent } from "./checkbox";

export type DefaultSizeProp = typeof DEFAULT_SIZES[number];
export type ExtendedSizeProp = typeof EXTENDED_SIZES[number];

export type BreakpointName = keyof typeof BREAKPOINTS;
