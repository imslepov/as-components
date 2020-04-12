import { VNode, CreateElement, RenderContext } from "vue";
import { mergeData } from "vue-functional-data-merge";
import {
  DefaultSizeProp,
  LoaderProps,
  LoaderOverlayProp,
  LoaderShapeProp,
} from "src/types";
import { DEFAULT_SIZES } from "src/utils/consts";
import Circle from "./circle.svg";
import Dots from "./dots.svg";

export const OVERLAY_LIST = ["container", "page"] as const;
export const SHAPES_MAP = {
  circle: Circle,
  dots: Dots,
};

export default {
  name: "AsLoader",
  functional: true,
  props: {
    tag: {
      type: String,
      default: "div",
    },
    size: {
      type: String,
      default: "md",
      validator: (v: DefaultSizeProp) => DEFAULT_SIZES.includes(v),
    },
    overlay: {
      type: String,
      default: undefined,
      validator: (v: LoaderOverlayProp) => !v || OVERLAY_LIST.includes(v),
    },
    shape: {
      type: String,
      default: "circle",
      validator: (v: LoaderShapeProp) => Object.keys(SHAPES_MAP).includes(v),
    },
  },
  render(h: CreateElement, { data, props }: RenderContext<LoaderProps>): VNode {
    const { overlay } = props;
    const Shape = SHAPES_MAP[props.shape];

    const componentData = {
      class: [
        "as-loader",
        "is-" + props.size,
        {
          "is-container-overlay": overlay === "container",
          "is-page-overlay": overlay === "page",
        },
      ],
    };

    return h(props.tag, mergeData(data, componentData), [h(Shape)]);
  },
};
