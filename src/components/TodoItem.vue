<template>
  <v-list-item class="todo-item" :class="{ editing: editing }">
    <v-list-item-action>
      <v-checkbox
        color="primary"
        v-if="!editing"
        v-model="todoStatus"
      ></v-checkbox>
      <v-icon color="primary" v-else>mdi-edit</v-icon>
    </v-list-item-action>
    <template v-if="!editing">
      <v-list-item-content
        :class="{ 'primary--text': todo.done }"
        @dblclick="editing = true"
      >
        {{ todo.body }}
      </v-list-item-content>
      <v-list-item-action>
        <div class="actions">
          <v-btn
            color="lighten-3"
            text
            icon
            @click.prevent="restore"
            v-if="todo.archive"
          >
            <v-icon>mdi-restore</v-icon>
          </v-btn>
          <v-btn
            color="red lighten-3"
            text
            icon
            @click.prevent="handleArchiveOrDelete"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
      </v-list-item-action>
    </template>
    <v-text-field
      :value="todo.body"
      clearable
      color="primary"
      text
      flat
      hide-details
      maxlength="1023"
      ref="input"
      solo
      v-else
    ></v-text-field>
  </v-list-item>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TodoItem",
  props: {
    todo: { required: true },
  },
  data() {
    return {
      editing: false,
    };
  },
  methods: {
    restore() {
      this.$confirm("Do you want restore Todo?").then(() => {
        this.changeArchiveStatus({ id: this.todo.id });
      });
    },
    handleArchiveOrDelete() {
      let text = "Are you want to move archive";
      if (this.todo.archive) {
        text = "Are you want to move delete";
      }
      this.$confirm(text).then(() => {
        if (this.todo.archive) {
          this.removeTodo({ id: this.todo.id });
        } else {
          this.changeArchiveStatus({ id: this.todo.id });
        }
      });
    },
    ...mapActions("todo", [
      "changeTodoStatus",
      "changeArchiveStatus",
      "removeTodo",
    ]),
  },
  computed: {
    todoStatus: {
      get() {
        return this.todo.completed;
      },
      set() {
        this.changeTodoStatus({ id: this.todo.id });
      },
    },
  },
};
</script>

<style lang="scss">
.actions {
  display: flex;
  align-items: center;
}
</style>
