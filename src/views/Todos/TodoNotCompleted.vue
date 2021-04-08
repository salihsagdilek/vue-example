<template>
  <v-card class="mt-3">
    <v-list class="pa-0" v-if="notCompletedTodo.length">
      <template v-for="todo in notCompletedTodo">
        <v-divider :key="`${todo.id}-divider`"></v-divider>
        <todo-item :todo="todo" :key="todo.id" />
      </template>
    </v-list>
    <div class="all-done" v-else><h1>Hell ya</h1></div>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "../../components/TodoItem";

export default {
  name: "TodoNotCompleted",
  components: { TodoItem },
  computed: {
    ...mapGetters("todo", ["notCompletedTodo"]),
  },
};
</script>

<style lang="scss">
.all-done {
  text-align: center;
  padding: 1rem;
}
</style>
