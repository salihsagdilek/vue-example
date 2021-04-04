import Vue from "vue";
import VueRouter from "vue-router";
import TodoView from "../views/TodoView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "todo",
    component: TodoView,
    children: [
      {
        path: "",
        name: "todo.all",
        component: () => import("../views/Todo/TodoAll"),
      },
      {
        path: "done",
        name: "todo.done",
        component: () => import("../views/Todo/TodoDone"),
      },
      {
        path: "trash",
        name: "todo.trash",
        component: () => import("../views/Todo/TodoTrash"),
      },
      {
        path: "undone",
        name: "todo.undone",
        component: () => import("../views/Todo/TodoUndone"),
      },
    ],
  },
  {
    path: "/note",
    name: "notes",
    component: () => import("../views/NotesView"),
  },
  {
    path: "/tasks",
    name: "tasks",
    component: () => import("../views/TasksView"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
