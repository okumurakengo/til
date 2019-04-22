{
    "use strict";

    let vm = new Vue({
        el: "#app",
        data: {
            newItem: "",
            todos: [{
                title: "task 1",
                isDone: false,
            }, {
                title: "task 2",
                isDone: false,
            }, {
                title: "task 3",
                isDone: true,
            }]
        },
        methods: {
            addItem() {
                const item = {
                    title: this.newItem,
                    isDone: false,
                }
                this.todos.push(item);
                this.newItem = "";
            },
            deleteItem(index) {
                if (confirm("are you sure?")) {
                    this.todos.splice(index, 1);
                }
            },
            purge() {
                if (!confirm("delete finished?")) {
                    return;
                }
                this.todos = this.todos.filter(todo => {
                    return !todo.isDone;
                });
                this.todos = this.remaining;
            },
        },
        computed: {
            remaining() {
                return this.todos.filter(todo => {
                    return !todo.isDone;
                });
            }
        }
    });
}
