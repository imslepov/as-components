import { VueConstructor } from "vue";
import AsButton from "./packages/button";
import AsRow from "./packages/row";
import AsCol from "./packages/col";
import AsLoader from "./packages/loader";
import AsCheckbox from "./packages/checkbox";

const components = {
  AsButton,
  AsRow,
  AsCol,
  AsLoader,
  AsCheckbox,
};

export { AsButton };
export { AsRow };
export { AsCol };
export { AsLoader };
export { AsCheckbox };

export default {
  install(Vue: VueConstructor): void {
    Object.keys(components).forEach(key => {
      Vue.component(components[key].name, components[key]);
    });
  },
};
