{
    "use strict";

    let vm = new Vue({
        el: "#app",
        data: {
            newItem: "",
            todos: [
                "task 1",
                "task 2",
                "task 3",
            ]
        },
        methods: {
            addItem() {
                this.todos.push(this.newItem);
                this.newItem = "";
            },
            deleteItem(index) {
                if (confirm("are you sure?")) {
                    this.todos.splice(index, 1);
                }
            }
        }
    });
}
