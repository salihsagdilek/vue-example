import {
  ADD_TODO,
  ARCHIVE_TODO,
  CHANGE_TODO_STATUS,
  EDIT_TODO,
  REMOVE_TODO,
} from "./mutation-types";

export default {
  addTodo({ commit }, { body }) {
    commit(ADD_TODO, body);
  },
  changeTodoStatus({ commit }, { id }) {
    commit(CHANGE_TODO_STATUS, id);
  },
  removeTodo({ commit }, { id }) {
    commit(REMOVE_TODO, id);
  },
  changeArchiveStatus({ commit }, { id }) {
    commit(ARCHIVE_TODO, id);
  },
  editTodo({ commit }, { body, id }) {
    commit(EDIT_TODO, { body, id });
  },
};
