<template>
  <div class="todo-view">
    <v-container class="todo-container">
      <v-navigation-drawer
        class="pa-4"
        v-model="drawer"
        :absolute="!$vuetify.breakpoint.mdAndUp"
        :permanent="$vuetify.breakpoint.mdAndUp"
      >
        <v-list flat>
          <v-subheader>TODOS</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item :to="{ name: 'todo.all' }" exact>
              <v-list-item-icon>
                <v-icon>mdi-star</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>All</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'todo.done' }">
              <v-list-item-icon>
                <v-icon>mdi-star</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Done</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'todo.archive' }">
              <v-list-item-icon>
                <v-icon>mdi-star</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Archive</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'todo.not-completed' }">
              <v-list-item-icon>
                <v-icon>mdi-star</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Not Completed</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <div class="todo-content">
        <v-toolbar color="white" dense class="hidden-md-and-up mb-2">
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
          <v-toolbar-title>Todo</v-toolbar-title>
        </v-toolbar>
        <div>
          <v-card>
            <v-list class="pa-0">
              <v-list-item>
                <v-text-field
                  label="New todo input"
                  v-model="todo"
                  autofocus
                  clearable
                  color="primary"
                  flat
                  hide-details
                  maxlength="1023"
                  placeholder="What needs to be done?"
                  solo
                  @keydown.enter="handleAddTodo"
                ></v-text-field>
              </v-list-item>
            </v-list>
          </v-card>
          <router-view />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TodoView",
  data() {
    return {
      drawer: false,
      todo: "",
    };
  },
  methods: {
    handleAddTodo() {
      this.addTodo({ body: this.todo }).then(() => {
        this.todo = "";
      });
    },
    ...mapActions("todo", ["addTodo"]),
  },
  components: {},
};
</script>
<style lang="scss">
.todo-view {
  height: 100%;

  .todo-container {
    display: flex;
    height: 100%;
    padding: 0;

    .todo-content {
      padding: 16px;
      flex: 1;
    }
  }
}
</style>
