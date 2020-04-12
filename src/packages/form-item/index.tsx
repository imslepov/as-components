import { CreateElement, RenderContext } from "vue";
import { mergeData } from "vue-functional-data-merge";
import { FormItemProps } from "src/types/form-item";

export default {
  name: "AsFormItem",
  functional: true,
  props: {
    tag: {
      type: String,
      default: "div",
    },
    label: {
      type: String,
      default: "",
    },
    hint: {
      type: String,
      default: "",
    },
    for: {
      type: String,
      default: undefined,
    },
    required: Boolean,
    hasError: Boolean,
    errorMessage: {
      type: String,
      default: "",
    },
  },
  render(
    h: CreateElement,
    { data, props, slots }: RenderContext<FormItemProps>,
  ) {
    const Tag = props.tag;
    const {
      label: labelProp,
      hint: hintProp,
      for: forProp,
      required,
      hasError,
      errorMessage,
    } = props;

    const { label: labelSlot, hint: hintSlot, default: defaultSlot } = slots();

    const label = labelSlot || labelProp;
    const hint = hintSlot || hintProp;
    const componentData = {
      class: [
        "as-form-item",
        {
          "has-error": hasError || errorMessage,
        },
      ],
    };

    return (
      <Tag {...mergeData(data, componentData)}>
        {label && (
          <label class="as-form-item-label" for={forProp}>
            {label}
            {required && <span class="as-form-item-req">*</span>}
          </label>
        )}
        {defaultSlot}
        {errorMessage && <div class="as-form-item-message">{errorMessage}</div>}
        {hint && <div class="as-form-item-hint">{hint}</div>}
      </Tag>
    );
  },
};
