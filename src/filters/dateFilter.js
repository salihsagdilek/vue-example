import Vue from "vue";
import { format } from "date-fns";

Vue.filter("date", (value) => format(new Date(value), "dd/mm/yyyy"));
Vue.filter("datetime", (value) =>
  format(new Date(value), "dd/mm/yyyy hh:mm:ss")
);
