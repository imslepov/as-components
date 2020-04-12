import { VNode, CreateElement, RenderContext } from "vue";
import { mergeData } from "vue-functional-data-merge";
import { ButtonProps, DefaultSizeProp, LoaderShapeProp } from "src/types";
import { DEFAULT_SIZES } from "src/utils/consts";
import AsLoader, { SHAPES_MAP } from "src/packages/loader";

export default {
  name: "AsButton",
  functional: true,
  props: {
    tag: {
      type: String,
      default: "button",
    },
    href: {
      type: String,
      default: undefined,
    },
    to: {
      type: [Object, String],
      default: undefined,
    },
    theme: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "md",
      validator: (v: DefaultSizeProp) => DEFAULT_SIZES.includes(v),
    },
    loader: {
      type: String,
      validator: (v: LoaderShapeProp) => Object.keys(SHAPES_MAP).includes(v),
    },
    outline: Boolean,
    rounded: Boolean,
    circle: Boolean,
    loading: Boolean,
    disabled: Boolean,
    block: Boolean,
    pressed: Boolean,
    nuxt: Boolean,
  },
  render(
    h: CreateElement,
    { data, props, slots }: RenderContext<ButtonProps>,
  ): VNode {
    let Tag = props.tag;
    const { href, to, loading, disabled, nuxt } = props;
    const {
      prepend: prependSlot,
      append: appendSlot,
      default: defaultSlot,
    } = slots();

    if (href) {
      Tag = "a";
    } else if (to && !nuxt) {
      Tag = "router-link";
    } else if (to && nuxt) {
      Tag = "nuxt-link";
    }

    const componentData = {
      class: [
        "as-button",
        "is-" + props.theme,
        "is-" + props.size,
        {
          "is-outline": props.outline,
          "is-rounded": props.rounded,
          "is-circle": props.circle,
          "is-disabled": disabled,
          "is-loading": loading,
          "is-pressed": props.pressed,
          "is-block": props.block,
        },
      ],
      attrs: {
        disabled: Tag === "button" && (disabled || loading),
        href: href || undefined,
        to: to || undefined,
      },
    };

    return (
      <Tag {...mergeData(data, componentData)}>
        {loading && h(AsLoader, { props: { shape: props.loader } })}
        {prependSlot && <span class="as-button-prepend">{prependSlot}</span>}
        {defaultSlot}
        {appendSlot && <span class="as-button-append">{appendSlot}</span>}
      </Tag>
    );
  },
};
