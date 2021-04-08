import Vue from "vue";
import VueRouter from "vue-router";
import TodoView from "../views/Todos/TodoView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
        path: "archive",
        name: "todo.archive",
        component: () => import("../views/Todos/TodoArchive"),
      },
      {
        path: "not-completed",
        name: "todo.not-completed",
        component: () => import("../views/Todos/TodoNotCompleted"),
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
    path: "/desserts",
    name: "desserts",
    component: () => import("../views/Desserts/DessertsView"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
