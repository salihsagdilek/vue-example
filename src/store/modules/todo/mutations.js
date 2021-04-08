import {
  ADD_TODO,
  ARCHIVE_TODO,
  CHANGE_TODO_STATUS,
  EDIT_TODO,
  REMOVE_TODO,
  TODO,
} from "./mutation-types";

export default {
  [TODO](state, payload) {
    state[TODO] = payload;
  },
  [ADD_TODO](state, payload) {
    state[TODO].push({
      id: Date.now(),
      body: payload,
      completed: false,
      archive: false,
    });
  },
  [REMOVE_TODO](state, id) {
    state[TODO] = state[TODO].filter((t) => t.id !== id);
  },
  [CHANGE_TODO_STATUS](state, id) {
    const index = state[TODO].findIndex((t) => t.id === id);
    state[TODO][index].completed = !state[TODO][index].completed;
  },
  [ARCHIVE_TODO](state, id) {
    const index = state[TODO].findIndex((t) => t.id === id);
    state[TODO][index].archive = !state[TODO][index].archive;
  },
  [EDIT_TODO](state, { id, body }) {
    const index = state[TODO].findIndex((t) => t.id === id);
    state[TODO][index].body = body;
  },
};
