<template>
  <div class="notes-view">
    <v-container>
      <v-textarea
        counter
        label="Note"
        v-model="note"
        auto-grow
        autofocus
        clearable
        shaped
        outlined
      ></v-textarea>
      <p>Last updated:{{ noteData.lastUpdated | datetime }}</p>
    </v-container>
  </div>
</template>

<script>
function getDefaultValue() {
  return {
    note: "",
    lastUpdate: new Date(),
  };
}

export default {
  name: "NotesView",
  components: {},
  data() {
    return {
      noteData: getDefaultValue(),
    };
  },
  created() {
    this.getDataFromStorage();
  },
  methods: {
    getDataFromStorage() {
      const storage = localStorage.getItem("note");
      let data = getDefaultValue();
      if (storage) {
        data = JSON.parse(storage);
      }
      this.noteData = data;
    },
  },
  computed: {
    note: {
      get() {
        return this.noteData.note;
      },
      set(value) {
        localStorage.setItem(
          "note",
          JSON.stringify({
            note: value || "",
            lastUpdated: new Date(),
          })
        );
        this.getDataFromStorage();
      },
    },
  },
};
</script>
