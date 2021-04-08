import { TODO } from "./mutation-types";

export default {
  allTodo(state) {
    return state[TODO].filter((t) => !t.archive);
  },
  completedTodo(state) {
    return state[TODO].filter((t) => t.completed && !t.archive);
  },
  archivedTodo(state) {
    return state[TODO].filter((t) => t.archive);
  },
  notCompletedTodo(state) {
    return state[TODO].filter((t) => !t.completed && !t.archive);
  },
  todoCount(state) {
    return state[TODO].length;
  },
  completedTodoCount(state, getter) {
    return getter.completedTodo.length;
  },
  notCompletedTodoCount(state, getter) {
    return getter.notCompletedTodo.length;
  },
  completedPercentage(state, getter) {
    return (getter.completedTodoCount / getter.todoCount) * 100;
  },
};
