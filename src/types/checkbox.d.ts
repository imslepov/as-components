import Vue, { ComponentOptions } from "vue";
import { CombinedVueInstance } from "vue/types/vue";
import { PropsDefinition } from "vue/types/options";

export type CheckboxData = {};
export type CheckboxComputed = {
  isChecked: boolean;
  classes: unknown;
};

export type CheckboxMethods<V = Vue> = {
  onInput: (this: V, e: Event) => void;
};

export type CheckboxProps = {
  tag: string;
  checked: boolean | Array<number | string | boolean>;
  trueValue: boolean | number | string;
  falseValue: boolean | number | string;
  disabled: boolean;
  readonly: boolean;
  hasError: boolean;
  indeterminate: boolean;
};

export type CheckboxContext = CombinedVueInstance<
  Vue,
  CheckboxData,
  CheckboxMethods<Vue>,
  CheckboxComputed,
  CheckboxProps
>;

export type CheckboxComponent = ComponentOptions<
  CheckboxContext,
  (this: CheckboxContext) => CheckboxData,
  CheckboxMethods<CheckboxContext>,
  CheckboxComputed,
  PropsDefinition<CheckboxProps>
>;
