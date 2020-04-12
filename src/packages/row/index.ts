import { VNode, CreateElement, RenderContext } from "vue";
import { mergeData } from "vue-functional-data-merge";
import {
  RowJustifyProp,
  RowAlignProp,
  RowDirectionProp,
  RowGuttersProp,
  RowProps,
  BreakpointName,
} from "src/types";
import { DEFAULT_SIZES } from "src/utils/consts";

export const JUSTIFY_LIST = [
  "space-between",
  "space-around",
  "center",
  "left",
  "right",
  "stretch",
  "end",
  "start",
  "flex-end",
  "flex-start",
] as const;

export const ALIGN_LIST = [
  "center",
  "flex-end",
  "flex-start",
  "baseline",
  "stretch",
] as const;

export const DIRECTION_LIST = [
  "column",
  "column-reverse",
  "row",
  "row-reverse",
] as const;

const justifyProp = {
  type: String,
  default: "",
  validator: (v: RowJustifyProp) => !v || JUSTIFY_LIST.includes(v),
};

const alignProp = {
  type: String,
  default: "",
  validator: (v: RowAlignProp) => !v || ALIGN_LIST.includes(v),
};

const guttersProp = {
  type: [Boolean, String],
  default: false,
  validator: (v: RowGuttersProp) =>
    typeof v === "boolean" || DEFAULT_SIZES.includes(v),
};

const guttersFactory = (
  prop: RowGuttersProp,
  suffix: BreakpointName = null,
): string | boolean => {
  if (!prop) {
    return false;
  }

  prop = typeof prop === "boolean" ? "md" : prop;

  return `${suffix ? suffix + ":" : ""}has-${prop}-gutters`;
};

export default {
  name: "AsRow",
  functional: true,
  props: {
    tag: {
      type: String,
      default: "div",
    },
    justify: justifyProp,
    justifySm: justifyProp,
    justifyMd: justifyProp,
    justifyLg: justifyProp,
    justifyXl: justifyProp,
    align: alignProp,
    alignSm: alignProp,
    alignMd: alignProp,
    alignLg: alignProp,
    alignXl: alignProp,
    direction: {
      type: String,
      default: "",
      validator: (v: RowDirectionProp) => !v || DIRECTION_LIST.includes(v),
    },
    nowrap: Boolean,
    gutters: guttersProp,
    guttersSm: guttersProp,
    guttersMd: guttersProp,
    guttersLg: guttersProp,
    guttersXl: guttersProp,
  },
  render(
    h: CreateElement,
    { data, props, children }: RenderContext<RowProps>,
  ): VNode {
    const componentData = {
      class: [
        "as-row",
        {
          ["is-justify-" + props.justify]: props.justify,
          ["sm:is-justify-" + props.justifySm]: props.justifySm,
          ["md:is-justify-" + props.justifyMd]: props.justifyMd,
          ["lg:is-justify-" + props.justifyLg]: props.justifyLg,
          ["xl:is-justify-" + props.justifyXl]: props.justifyXl,
          ["is-align-" + props.align]: props.align,
          ["sm:is-align-" + props.alignSm]: props.alignSm,
          ["md:is-align-" + props.alignMd]: props.alignMd,
          ["lg:is-align-" + props.alignLg]: props.alignLg,
          ["xl:is-align-" + props.alignXl]: props.alignXl,
          ["is-direction-" + props.direction]: props.direction,
          "is-nowrap": props.nowrap,
        },
        guttersFactory(props.gutters),
        guttersFactory(props.guttersSm, "sm"),
        guttersFactory(props.guttersMd, "md"),
        guttersFactory(props.guttersLg, "lg"),
        guttersFactory(props.guttersXl, "xl"),
      ],
    };

    return h(props.tag, mergeData(data, componentData), children);
  },
};
