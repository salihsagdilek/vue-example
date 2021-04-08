<template>
  <div>
    <v-card class="mt-3" v-show="allTodo.length">
      <v-progress-linear class="my-0" :value="completedPercentage" />
      <v-card-actions class="px-3" v-show="allTodo.length">
        <span class="primary--text">{{ statusText }}</span>
        <v-spacer></v-spacer>
      </v-card-actions>
      <v-list class="pa-0">
        <template v-for="todo in allTodo">
          <v-divider :key="`${todo.id}-divider`"></v-divider>
          <todo-item :todo="todo" :key="todo.id" />
        </template>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import TodoItem from "../../components/TodoItem";
import { mapGetters } from "vuex";

export default {
  name: "TodoAll",
  components: { TodoItem },
  computed: {
    statusText() {
      if (this.notCompletedTodoCount) {
        return `${this.notCompletedTodoCount} left`;
      } else {
        return "Hell ya";
      }
    },
    ...mapGetters("todo", [
      "allTodo",
      "completedPercentage",
      "notCompletedTodoCount",
    ]),
  },
};
</script>

<style scoped></style>
