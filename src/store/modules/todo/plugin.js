import * as types from "./mutation-types";
import { TODO } from "./mutation-types";

export function createAccountPlugin({ namespace = "todo" } = {}) {
  return function (store) {
    store.subscribe(({ type }, state) => {
      if (type.startsWith(namespace)) {
        localStorage.setItem(
          types.TODO,
          JSON.stringify(state[namespace][TODO])
        );
      }
    });
  };
}
