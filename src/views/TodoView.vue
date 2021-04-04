<template>
  <div class="todo-view">
    <v-container class="todo-container">
      <v-navigation-drawer
        class="pa-4"
        v-model="drawer"
        :absolute="!$vuetify.breakpoint.mdAndUp"
        :permanent="$vuetify.breakpoint.mdAndUp"
      >
        <v-btn block color="primary" large> Add Todo </v-btn>
        <v-list flat>
          <v-subheader>REPORTS</v-subheader>
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
            <v-list-item :to="{ name: 'todo.trash' }">
              <v-list-item-icon>
                <v-icon>mdi-star</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Trash</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item :to="{ name: 'todo.undone' }">
              <v-list-item-icon>
                <v-icon>mdi-star</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Undone</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <div class="todo-content">
        <v-toolbar color="white" dense class="hidden-md-and-up">
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
          <v-toolbar-title>Todo</v-toolbar-title>
        </v-toolbar>
        <router-view />
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "TodoView",
  data() {
    return {
      drawer: false,
    };
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
