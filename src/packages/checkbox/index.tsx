import { VNode, CreateElement } from "vue";
import { CheckboxContext, CheckboxComponent } from "src/types";
import { toggleValue } from "src/utils/array";

export default {
  name: "AsCheckbox",
  inheritAttrs: false,
  model: {
    prop: "checked",
    event: "input",
  },
  props: {
    tag: {
      type: String,
      default: "label",
    },
    checked: {
      type: [Boolean, Array],
      default: false,
    },
    trueValue: {
      type: [Boolean, Number, String],
      default: true,
    },
    falseValue: {
      type: [Boolean, Number, String],
      default: false,
    },
    disabled: Boolean,
    readonly: Boolean,
    hasError: Boolean,
    indeterminate: Boolean,
  },
  computed: {
    classes(this: CheckboxContext) {
      return [
        "as-checkbox",
        {
          "is-checked": this.isChecked,
          "is-disabled": this.disabled,
          "is-readonly": this.readonly,
          "has-error": this.hasError,
        },
      ];
    },
    isChecked(this: CheckboxContext) {
      return Array.isArray(this.checked)
        ? this.checked.includes(this.trueValue)
        : this.checked === this.trueValue;
    },
  },
  methods: {
    onInput(this: CheckboxContext, e: Event) {
      const checked = (e.target as HTMLInputElement).checked;
      const value = checked ? this.trueValue : this.falseValue;
      const model = Array.isArray(this.checked)
        ? toggleValue(this.checked, value)
        : value;

      this.$emit("input", model);
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(this: CheckboxContext, h: CreateElement): VNode {
    const Tag = this.tag;
    const { default: defaultSlot } = this.$slots;
    const inputData = {
      staticClass: "as-checkbox-input",
      attrs: {
        ...this.$attrs,
        type: "checkbox",
        checked: this.isChecked,
      },
      on: {
        input: this.onInput,
      },
    };

    return (
      <Tag class={this.classes}>
        <input {...inputData}></input>
        <span class="as-checkbox-icon"></span>
        <span class="as-checkbox-text">{defaultSlot}</span>
      </Tag>
    );
  },
} as CheckboxComponent;
