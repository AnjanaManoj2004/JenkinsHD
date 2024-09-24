const app = Vue.createApp({
    data() {
        return {
            newTask: "",
            tasks: [],
        };
    },
    methods: {
        addTask() {
            if (this.new_Task.trim() !== "") {
                this.tasks.push({ text: this.newTask, completed: false });
                this.new_Task = "";
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
    },
});

app.mount("#app");