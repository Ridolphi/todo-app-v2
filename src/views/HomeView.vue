<template>
  <main>
    <div>
      <h1>Quest Log</h1>

      <div v-if="!isEditing">
        <input type="text" v-model="todo" />
        <input type="submit" value="add" @click="storeTodo" />
      </div>
      <div v-else>
        <input type="text" v-model="todo" />
        <input type="submit" value="update" @click="updateTodo" />
      </div>
      <ol>
        <li v-for="(item, index) in list" :key="index">
          {{ item.text }}

          <input type="checkbox" v-model="item.inProgress" />In Progress
          <input type="checkbox" v-model="item.completed" />Completed
        </li>
      </ol>
    </div>
    <!--
      <div>
        <button v-on:click="addNewTodo">Add New</button>
      </div>
      <div>
        <input v-model="newItemText" />
      </div>
      <div><input type="checkbox" v-model="l.comp" />In Progress</div>
      <div><input type="checkbox" v-model="l.comp" />Completed</div>
      <div>
        <button v-on:click="deleteItem">Remove</button>
      </div>
      -->
  </main>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      isEditing: false,
      selectedIndex: null,
      todo: "",
      todos: [],
      list: [],
      hide: true,
      newItemText: "",
    };
  },
  methods: {
    storeTodo() {
      this.list.push({
        text: this.todo,
        inProgress: false,
        completed: false,
      });
      this.todo = "";
      localStorage.setItem("listItems", JSON.stringify(this.list));
    },

    addNewTodo(index, todo) {
      this.list.push(todo);
      this.todo = "";
    },
    editTodo(index, todo) {
      this.todo = todo;
      this.selectedIndex = index;
      this.isEditing = true;
    },
    updateTodo() {
      this.todos.splice(this.selectedIndex, 1, this.todo);
      this.isEditing = false;
    },
    deleteItem() {
      this.list = this.list.filter((l) => !l.comp);
      localStorage.setItem("listItems", JSON.stringify(this.list));
    },
  },
  computed: {
    hiddenlist() {
      return this.hide ? this.list.filter((l) => !l.comp) : this.list;
    },
  },
  created() {
    let data = localStorage.getItem("listItems");
    if (data != null) {
      this.list = JSON.parse(data);
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap");

h1 {
  font-family: "MedievalSharp", cursive;
  text-align: center;
  height: 100%;
}
</style>
