import { ComponentInstance } from "vue";
import TestComponent from "./TestComponent.vue";

let props: ComponentInstance<typeof TestComponent>["$props"] = {
  label: "asdf",
  size: "lg",
};
