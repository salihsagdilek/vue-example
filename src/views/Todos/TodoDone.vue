<template>
  <v-card class="mt-3">
    <v-list class="pa-0" v-show="completedTodo.length">
      <template v-for="todo in completedTodo">
        <v-divider :key="`${todo.id}-divider`"></v-divider>
        <todo-item :todo="todo" :key="todo.id" />
      </template>
    </v-list>
    <div v-show="!completedTodo.length" class="need-to-work">
      You want a hot body? You want a Bugatti? <br />
      You want a Maserati? You better work, bitch <br />
      You want a Lamborghini? Sippin' martinis? <br />
      Look hot in a bikini? You better work, bitch <br />
      You wanna live fancy? Live in a big mansion? <br />
      Party in France? <br />
      You better work, bitch, you better work, bitch <br />
      You better work, bitch, you better work, bitch <br />
      Now get to work, bitch! (Ah-ah) <br />
    </div>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "../../components/TodoItem";

export default {
  name: "TodoDone",
  components: { TodoItem },
  computed: {
    ...mapGetters("todo", ["completedTodo"]),
  },
};
</script>

<style lang="scss">
.need-to-work {
  padding: 1rem;
  text-align: center;
  line-height: 3rem;
  font-size: 1.5rem;
  letter-spacing: 3px;
  color: #c1c1c1;
}
</style>
