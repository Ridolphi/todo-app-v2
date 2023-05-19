<script setup>
</script>

<template>
  <main>
    <section>
      <div>
        <h1>Quest Log</h1>
      </div>
    </section>
    <section>
      <div>
        <button v-on:click="addNewTodo">Add New</button>
      </div>
      <div>
        <input v-model="newItemText" />
      </div>
    </section>
    <section>
      <div><input type="checkbox" v-model="l.comp" />In Progress</div>
      <div><input type="checkbox" v-model="l.comp" />Completed</div>
    </section>
    <section>
      <div>
        <button v-on:click="deleteItem">Remove</button>
      </div>
    </section>
  </main>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      list: [],
      hide: true,
      newItemText: "",
  }
},
computed: {
  hiddenlist() {
    return this.hide ?
      this.list.filter(l => !l.comp) : this.list
  }
},
methods: {
  addNewTodo() {
    this.list.push({
      task: this.NewItemText,
      comp: false
    });
    localStorage.setItem("listItems", JSON.stringify(this.list));
    this.NewItemText = "";
  },
  deleteItem() {
    this.list = this.list.filter(l => !l.comp);
    localStorage.setItem("listItems", JSON.stringify(this.list));
  }
},

created() {
  let data = localStorage.getItem("listItems");
  if (data != null) {
    this.list = JSON.parse(data);
  }
}
}
</script>
