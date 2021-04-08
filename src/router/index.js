import Vue from "vue";
import VueRouter from "vue-router";
import TodoView from "../views/Todos/TodoView";

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
        component: () => import("../views/Todos/TodoAll"),
      },
      {
        path: "done",
        name: "todo.done",
        component: () => import("../views/Todos/TodoDone"),
      },
      {
        path: "trash",
        name: "todo.trash",
        component: () => import("../views/Todos/TodoTrash"),
      },
      {
        path: "undone",
        name: "todo.undone",
        component: () => import("../views/Todos/TodoUndone"),
      },
    ],
  },
  {
    path: "/note",
    name: "notes",
    component: () => import("../views/Notes/NotesView"),
  },
  {
    path: "/tasks",
    name: "tasks",
    component: () => import("../views/Tasks/TasksView"),
  },
  {
    path: "/deserts",
    name: "deserts",
    component: () => import("../views/Deserts/DesertsView"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
