<template>
  <v-card class="mt-3">
    <v-list class="pa-0" v-if="archivedTodo.length">
      <template v-for="todo in archivedTodo">
        <v-divider :key="`${todo.id}-divider`"></v-divider>
        <todo-item :todo="todo" :key="todo.id" />
      </template>
    </v-list>
    <div v-else class="no-archived-item">
      <h1>you not have a any archived items</h1>
    </div>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "../../components/TodoItem";

export default {
  name: "TodoArchive",
  components: { TodoItem },
  computed: {
    ...mapGetters("todo", ["archivedTodo"]),
  },
};
</script>

<style scoped lang="scss">
.no-archived-item {
  text-align: center;
  padding: 1rem;
}
</style>
