import { VNode, CreateElement, RenderContext } from "vue";
import { mergeData } from "vue-functional-data-merge";
import { ColNumericProp, ColProps } from "src/types";

const numericProp = {
  type: [Number, String],
  default: 0,
  validate: (v: ColNumericProp) => {
    v = Number(v);
    return isNaN(v) || v > 12 || v < 0;
  },
};

export default {
  name: "AsCol",
  functional: true,
  props: {
    tag: {
      type: String,
      default: "div",
    },
    cols: numericProp,
    sm: numericProp,
    md: numericProp,
    lg: numericProp,
    xl: numericProp,
    offset: numericProp,
    offsetSm: numericProp,
    offsetMd: numericProp,
    offsetLg: numericProp,
    offsetXl: numericProp,
    first: Boolean,
    firstSm: Boolean,
    firstMd: Boolean,
    firstLg: Boolean,
    firstXl: Boolean,
    last: Boolean,
    lastSm: Boolean,
    lastMd: Boolean,
    lastLg: Boolean,
    lastXl: Boolean,
  },
  render(
    h: CreateElement,
    { data, props, children }: RenderContext<ColProps>,
  ): VNode {
    const componentData = {
      class: [
        "as-col",
        {
          ["is-" + props.cols]: props.cols,
          ["sm:is-" + props.sm]: props.sm,
          ["md:is-" + props.md]: props.md,
          ["lg:is-" + props.lg]: props.lg,
          ["xl:is-" + props.xl]: props.xl,
          ["has-offset-" + props.offset]: props.offset,
          ["sm:has-offset-" + props.offsetSm]: props.offsetSm,
          ["md:has-offset-" + props.offsetMd]: props.offsetMd,
          ["lg:has-offset-" + props.offsetLg]: props.offsetLg,
          ["xl:has-offset-" + props.offsetXl]: props.offsetXl,
          "is-first": props.first,
          "sm:is-first": props.firstSm,
          "md:is-first": props.firstMd,
          "lg:is-first": props.firstLg,
          "xl:is-first": props.firstXl,
          "is-last": props.last,
          "sm:is-last": props.lastSm,
          "md:is-last": props.lastMd,
          "lg:is-last": props.lastLg,
          "xl:is-last": props.lastXl,
        },
      ],
    };

    return h(props.tag, mergeData(data, componentData), children);
  },
};
