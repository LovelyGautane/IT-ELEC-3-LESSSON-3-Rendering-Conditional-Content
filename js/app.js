const app = Vue.createApp({
    data() {
        return {
            enteredTaskValue: '',
            tasks: [],
            btn: true
        };
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTaskValue);
        },
        toggle() {
            this.btn = !this.btn
        }
    }
});

app.mount('#assignment'); 