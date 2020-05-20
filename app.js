var app = new Vue({
  el: "#app",
  data: {
    newTodo: "",
    todos: [
      {
        id: "1",
        title: "示例（单击方框完成，双击文字可编辑）",
        completed: false
      }
    ],
    visibility: "all",
    cacheTodo: {},
    cacheTitle: ""
  },
  computed: {
    filteredTodos: function () {
      if (this.visibility === "all") {
        return this.todos;
      } else if (this.visibility === "active") {
        return this.todos.filter((item) => item.completed === false);
      } else if (this.visibility === "completed") {
        return this.todos.filter((item) => item.completed === true);
      }
    },
    number: function () {
      return this.todos.filter((item) => item.completed === false).length;
    }
  },
  methods: {
    addTodo: function () {
      if (!this.newTodo) return;
      let timestamp = new Date();
      this.todos.push({
        id: +timestamp,
        title: this.newTodo,
        completed: false
      });
      this.newTodo = "";
    },
    removeTodo: function (todo) {
      let key = "";
      this.todos.forEach(function (item, index) {
        if (todo.id === item.id) {
          key = index;
        }
      });
      this.todos.splice(key, 1);
    },
    editTodo: function (item) {
      this.cacheTodo = item;
      this.cacheTitle = item.title;
    },
    doneEdit: function (item) {
      item.title = this.cacheTitle;
      this.cacheTitle = "";
      this.cacheTodo = {};
    },
    cancelEdit: function (item) {
      this.cacheTitle = "";
      this.cacheTodo = {};
    },
    clearAllTodos: function () {
      this.todos = [];
    }
  }
});
