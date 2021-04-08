import { TODO } from "./mutation-types";

let todo = JSON.parse(localStorage.getItem(TODO)) || [];
export default {
  [TODO]: todo,
};
