import { DefaultSizeProp } from "./index";
import { JUSTIFY_LIST, ALIGN_LIST, DIRECTION_LIST } from "../packages/row";

export type RowJustifyProp = typeof JUSTIFY_LIST[number];
export type RowAlignProp = typeof ALIGN_LIST[number];
export type RowDirectionProp = typeof DIRECTION_LIST[number];
export type RowGuttersProp = boolean | DefaultSizeProp;

export interface RowProps {
  tag: string;
  justify: RowJustifyProp;
  justifySm: RowJustifyProp;
  justifyMd: RowJustifyProp;
  justifyLg: RowJustifyProp;
  justifyXl: RowJustifyProp;
  align: RowAlignProp;
  alignSm: RowAlignProp;
  alignMd: RowAlignProp;
  alignLg: RowAlignProp;
  alignXl: RowAlignProp;
  direction: RowDirectionProp;
  nowrap: boolean;
  gutters: RowGuttersProp;
  guttersSm: RowGuttersProp;
  guttersMd: RowGuttersProp;
  guttersLg: RowGuttersProp;
  guttersXl: RowGuttersProp;
}
